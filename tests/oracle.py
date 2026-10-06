#!/usr/bin/env python3
"""Independent oracle for LicenseLens.

1. Cross-checks engine.js LICENSES metadata (name / osi / fsf / deprecated)
   against the official SPDX license-list-data v3.29.0 JSON.
2. Re-implements the compatibility spec from scratch (table below) and
   computes the expected verdict for every case in cases.json.
Writes expected.json for run_tests.js. Exits non-zero on any failure.
"""
import json, re, sys

BASE = __import__('os').path.dirname(__file__)
spdx = {l['licenseId']: l for l in json.load(open(f'{BASE}/spdx-3.29.0.extract.json'))['licenses']}

# --- independent spec table: id -> (kind, excl, cond) ----------------------
# kind: any | set | never
# excl: outbounds excluded when kind=any
# cond: (outbound-regex-or-set, kind-of-conditional)
GNU = {'GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'}
PERMISSIVE = ['MIT','ISC','BSD-1-Clause','BSD-2-Clause','BSD-3-Clause','0BSD','Zlib','X11','curl',
 'BSL-1.0','PostgreSQL','NCSA','AFL-3.0','UPL-1.0','BlueOak-1.0.0','Artistic-2.0','Python-2.0',
 'Beerware','MIT-0','WTFPL','Unlicense','CC0-1.0']
FILELEVEL = ['MS-PL','MS-RL','CDDL-1.0','CDDL-1.1','EPL-1.0','MPL-1.1']
ASSET = ['CC-BY-4.0','CC-BY-3.0','CC-BY-SA-4.0','CC-BY-SA-3.0','GFDL-1.3-only','GFDL-1.3-or-later','OFL-1.1']

SPEC = {}
for i in PERMISSIVE: SPEC[i] = ('any', set(), None)
SPEC['Apache-2.0'] = ('any', {'GPL-2.0-only'}, 'LGPL2-CAUTION')
for i in ['Apache-1.1','BSD-4-Clause','OpenSSL']: SPEC[i] = ('any', set(GNU), None)
for i in FILELEVEL: SPEC[i] = ('any', set(GNU), None)
SPEC['EPL-2.0'] = ('any', set(GNU), 'COND-GNU')   # secondary-licenses notice
SPEC['MPL-2.0'] = ('any', set(), 'COND-GNU')       # exhibit B check
SPEC['EUPL-1.2'] = ('set', {'EUPL-1.2','GPL-2.0-only','GPL-2.0-or-later','GPL-3.0-only','GPL-3.0-or-later','AGPL-3.0-only','AGPL-3.0-or-later'}, None)
for i in ['LGPL-2.0-only','LGPL-2.0-or-later','LGPL-2.1-only','LGPL-2.1-or-later']:
    SPEC[i] = ('set', {i,'GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'}, 'LIBRARY')
SPEC['LGPL-3.0-only'] = ('set', {'LGPL-3.0-only','LGPL-3.0-or-later','GPL-3.0-only','AGPL-3.0-only'}, 'LIBRARY')
SPEC['LGPL-3.0-or-later'] = SPEC['LGPL-3.0-only']
SPEC['GPL-2.0-only'] = ('set', {'GPL-2.0-only'}, None)
SPEC['GPL-2.0-or-later'] = ('set', {'GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'}, None)
SPEC['GPL-3.0-only'] = ('set', {'GPL-3.0-only','AGPL-3.0-only'}, None)
SPEC['GPL-3.0-or-later'] = ('set', {'GPL-3.0-only','AGPL-3.0-only'}, None)
SPEC['AGPL-3.0-only'] = ('set', {'AGPL-3.0-only'}, None)
SPEC['AGPL-3.0-or-later'] = ('set', {'AGPL-3.0-only'}, None)
SPEC['AGPL-1.0-only'] = ('set', set(), None)
SPEC['AGPL-1.0-or-later'] = ('set', set(), None)
for i in ASSET: SPEC[i] = ('any', set(), 'ASSET')
SPEC['JSON'] = ('any', set(GNU), None)
for i in ['CC-BY-NC-4.0','CC-BY-NC-SA-4.0','CC-BY-NC-ND-4.0']: SPEC[i] = ('never', set(), 'NC')
SPEC['CC-BY-ND-4.0'] = ('never', set(), None)
SPEC['SSPL-1.0'] = ('never', set(), None)
for i in ['BUSL-1.1','Elastic-2.0']: SPEC[i] = ('never', set(), 'SA-COND')

UNIVERSE = ['MIT','BSD-3-Clause','Apache-2.0','MPL-2.0','EPL-2.0','EUPL-1.2',
 'LGPL-2.1-only','LGPL-3.0-only','GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only','Proprietary']

def lic_outbound_set(licid):
    kind, s, _ = SPEC[licid]
    if kind == 'any': return set(UNIVERSE) - s
    if kind == 'set': return set(s)
    return None  # neverMerge: unconstraining for combine

def verdict(licid, outbound):
    kind, s, cond = SPEC[licid]
    if cond == 'LGPL2-CAUTION' and re.match(r'^LGPL-2', outbound): return 'conditional'
    if kind == 'never':
        if cond == 'NC' and outbound not in GNU: return 'conditional'
        if cond == 'SA-COND' and outbound not in GNU: return 'conditional'
        return 'blocked'
    inset = (outbound not in s) if kind == 'any' else (outbound in s)
    if inset:
        if cond == 'COND-GNU' and outbound in GNU: return 'conditional'
        if cond == 'LIBRARY' and outbound not in GNU: return 'conditional'
        return 'ok'
    if cond == 'LIBRARY' and outbound not in GNU: return 'conditional'
    if cond == 'COND-GNU' and outbound in GNU: return 'conditional'
    return 'blocked'

# --- mini SPDX-expression evaluator (subset: single licenses and simple OR/AND) ---
ALIASES = {'apache 2':'Apache-2.0','apache':'Apache-2.0','apache 2.0':'Apache-2.0','apache license 2.0':'Apache-2.0',
 'gplv3':'GPL-3.0-only','gpl-3.0':'GPL-3.0-only','gplv2':'GPL-2.0-only','gpl-2.0':'GPL-2.0-only',
 'gpl-2.0+':'GPL-2.0-or-later','gplv2+':'GPL-2.0-or-later','gplv3+':'GPL-3.0-or-later','gpl-3.0+':'GPL-3.0-or-later',
 'mit license':'MIT','expat':'MIT','bsd':'BSD-3-Clause','lgpl-2.1':'LGPL-2.1-only','agpl':'AGPL-3.0-only'}
def norm(raw):
    raw = raw.strip()
    low = re.sub(r'\s+',' ',raw.lower()).strip()
    if low in ALIASES: return ALIASES[low]   # aliases first: deprecated SPDX ids map to modern equivalents
    for k in spdx:
        if k.lower() == raw.lower(): return k
    return raw  # unknown

def eval_expr(expr, outbound):
    """Returns 'ok'|'conditional'|'blocked'|'unknown' for simple expressions.
    Whole-string alias resolution first (multi-word names), then parens, OR,
    AND, trailing +, WITH <exception>. Case-insensitive ops."""
    whole = norm(expr)
    if whole in SPEC: return verdict(whole, outbound)
    toks = re.findall(r'\(|\)|\+|[A-Za-z0-9.:_-]+', expr)
    pos = [0]
    def peek(): return toks[pos[0]] if pos[0] < len(toks) else None
    def word():
        t = peek(); return t.upper() if t else None
    def parse_or():
        v = parse_and()
        vs = [v]
        while word() == 'OR':
            pos[0] += 1; vs.append(parse_and())
        if len(vs) == 1: return v
        rank = {'ok':0,'conditional':1,'unknown':1,'blocked':2}
        return sorted(vs, key=lambda x: rank[x])[0]
    def parse_and():
        v = parse_unary(); vs = [v]
        while word() == 'AND':
            pos[0] += 1; vs.append(parse_unary())
        if len(vs) == 1: return v
        if 'blocked' in vs: return 'blocked'
        if 'conditional' in vs: return 'conditional'
        if 'unknown' in vs: return 'unknown'
        return 'ok'
    def parse_unary():
        t = peek()
        if t == '(':
            pos[0] += 1; v = parse_or()
            assert peek() == ')'; pos[0] += 1
            return v
        raw = t; pos[0] += 1
        plus = False
        if peek() == '+': plus = True; pos[0] += 1
        if word() == 'WITH':
            pos[0] += 1; pos[0] += 1  # skip exception id
        lid = norm(raw)
        if plus:
            lid = {'GPL-2.0-only':'GPL-2.0-or-later','GPL-3.0-only':'GPL-3.0-or-later',
                   'LGPL-2.1-only':'LGPL-2.1-or-later','LGPL-3.0-only':'LGPL-3.0-or-later',
                   'AGPL-3.0-only':'AGPL-3.0-or-later'}.get(lid, lid)
        if lid not in SPEC: return 'unknown'
        return verdict(lid, outbound)
    return parse_or()

def parse_line_list(text):
    comps = []
    for line in text.splitlines():
        s = line.strip()
        if not s or s.startswith('#'): continue
        m = re.search(r'\s+(?:[-\u2013\u2014]|@)\s+|\t|:\s+', s)
        if m: comps.append((s[:m.start()].strip(), s[m.end():].strip()))
        else: comps.append((s, s))
    return comps

def eval_set(expr):
    """Feasible whole-work outbound set for an expression; None = unconstraining."""
    e = expr.strip()
    whole = norm(e)
    if whole in SPEC: return lic_outbound_set(whole)
    toks = re.findall(r'\(|\)|\+|[A-Za-z0-9.:_-]+', e)
    pos = [0]
    def peek(): return toks[pos[0]] if pos[0] < len(toks) else None
    def word():
        t = peek(); return t.upper() if t else None
    def p_or():
        v = p_and(); vs = [v]
        while word() == 'OR':
            pos[0] += 1; vs.append(p_and())
        if len(vs) == 1: return v
        u = set()
        for s in vs:
            if s: u |= s
        return u
    def p_and():
        v = p_unary(); vs = [v]
        while word() == 'AND':
            pos[0] += 1; vs.append(p_unary())
        if len(vs) == 1: return v
        acc = set(UNIVERSE)
        for s in vs:
            if s is not None: acc &= s
        return acc
    def p_unary():
        t = peek()
        if t == '(':
            pos[0] += 1; v = p_or(); assert peek() == ')'; pos[0] += 1
            return v
        raw = t; pos[0] += 1
        plus = False
        if peek() == '+': plus = True; pos[0] += 1
        if word() == 'WITH': pos[0] += 2
        lid = norm(raw)
        if plus:
            lid = {'GPL-2.0-only':'GPL-2.0-or-later','GPL-3.0-only':'GPL-3.0-or-later',
                   'LGPL-2.1-only':'LGPL-2.1-or-later','LGPL-3.0-only':'LGPL-3.0-or-later',
                   'AGPL-3.0-only':'AGPL-3.0-or-later'}.get(lid, lid)
        return lic_outbound_set(lid) if lid in SPEC else None
    return p_or()

def parse_input(text):
    text = text.strip()
    if text.startswith('{') or text.startswith('['):
        obj = json.loads(text)
        comps = []
        if isinstance(obj, list):
            for e in obj:
                lic = e.get('license') or e.get('licenses') or 'UNLICENSED'
                if isinstance(lic, list): lic = ' AND '.join(lic)
                comps.append((e.get('name','?'), lic))
        elif 'name' in obj and ('license' in obj or 'dependencies' in obj or 'devDependencies' in obj):
            comps.append((obj['name']+' (this package)', obj.get('license') or 'UNLICENSED'))
        else:
            vals = list(obj)
            if vals and all(isinstance(obj[k], str) for k in vals):
                comps = [(k, obj[k]) for k in vals]
            else:
                for k in vals:
                    v = obj[k]
                    if isinstance(v, dict) and (v.get('licenses') or v.get('license')):
                        lic = v.get('licenses') or v.get('license')
                        if isinstance(lic, list): lic = ' AND '.join(lic)
                        comps.append((k, lic))
        return comps
    return parse_line_list(text)

# --- run the cases ---
cases = json.load(open(f'{BASE}/cases.json'))
expected = []
failures = []
for c in cases:
    comps = parse_input(c['input'])
    exp = {'name': c['name']}
    unlic = any(e.upper() in ('UNLICENSED','NONE','UNKNOWN','PROPRIETARY','CLOSED') for _, e in comps)
    if c.get('outbound'):
        per = {}
        for name, expr in comps:
            if expr.upper() == 'UNLICENSED': per[name] = 'blocked'; continue
            per[name] = eval_expr(expr, c['outbound'])
        vals = set(per.values())
        overall = 'blocked' if 'blocked' in vals else ('conditional' if vals & {'conditional','unknown'} else 'ok')
        exp['per'] = per; exp['overall'] = overall
    # feasible set is computed for every case (combine view); UNLICENSED unconstrains
    sets = []
    for _, expr in comps:
        if expr.upper() in ('UNLICENSED','NONE','UNKNOWN','PROPRIETARY','CLOSED'):
            sets.append(None); continue
        sets.append(eval_set(expr))
    feas = set(UNIVERSE)
    for s in sets:
        if s is not None: feas &= s
    exp['feasible'] = sorted(feas)
    if not feas:
        pairs = []
        for i in range(len(comps)):
            for j in range(i+1, len(comps)):
                si, sj = sets[i], sets[j]
                if si is not None and sj is not None and not (si & sj):
                    pairs.append([comps[i][0], comps[j][0]])
        exp['conflict'] = pairs
    if unlic: exp['unlicensed'] = True
    expected.append(exp)

    # compare against case expectations (oracle self-check of the corpus)
    e = c['expect']
    def fail(msg): failures.append(f"{c['name']}: {msg}")
    if e.get('overall') and exp.get('overall') != e['overall']:
        fail(f"overall oracle={exp.get('overall')} corpus={e['overall']}")
    for k, v in e.get('per', {}).items():
        kk = k+' (this package)' if k+' (this package)' in exp.get('per',{}) else k
        if exp.get('per',{}).get(kk) != v:
            fail(f"per[{kk}] oracle={exp.get('per',{}).get(kk)} corpus={v}")
    if e.get('feasibleEmpty') and exp.get('feasible') != []: fail(f"feasible not empty: {exp.get('feasible')}")
    for x in e.get('feasibleContains', []):
        if x not in exp.get('feasible', []): fail(f"feasible missing {x}: {exp.get('feasible')}")
    for x in e.get('feasibleExcludes', []):
        if x in exp.get('feasible', []): fail(f"feasible should exclude {x}")
    if e.get('conflict') and exp.get('conflict') != e['conflict']:
        fail(f"conflict oracle={exp.get('conflict')} corpus={e['conflict']}")
    if e.get('unlicensed') and not exp.get('unlicensed'): fail('expected unlicensed flag')

json.dump(expected, open(f'{BASE}/expected.json','w'), indent=1)

# --- dataset cross-check against SPDX ---
eng = open(f'{BASE}/../engine.js').read()
m = re.search(r'var LICENSES = (\[.*?\]);\n', eng, re.S)
data = json.loads(m.group(1))
derr = []
for l in data:
    s = spdx.get(l['id'])
    if not s: derr.append(f"{l['id']} not in SPDX list"); continue
    if l['name'] != s['name']: derr.append(f"{l['id']} name: engine={l['name']!r} spdx={s['name']!r}")
    if l['osi'] != bool(s.get('isOsiApproved')): derr.append(f"{l['id']} osi mismatch")
    if l['fsf'] != bool(s.get('isFsfLibre')): derr.append(f"{l['id']} fsf mismatch: engine={l['fsf']} spdx={s.get('isFsfLibre')}")
    if l['dep'] != bool(s.get('isDeprecatedLicenseId')): derr.append(f"{l['id']} deprecated mismatch")
    if l['id'] not in SPEC and l['cat'] != 'unknown': derr.append(f"{l['id']} missing from oracle SPEC")
for i in SPEC:
    if i not in {l['id'] for l in data}: derr.append(f"oracle SPEC has {i} but engine dataset does not")

print(f"{len(cases)} cases -> expected.json")
if failures:
    print('CORPUS/ORACLE MISMATCHES:'); [print(' -', f) for f in failures]; sys.exit(1)
if derr:
    print('DATASET MISMATCHES:'); [print(' -', d) for d in derr]; sys.exit(1)
print(f"dataset: {len(data)} ids match SPDX v3.29.0 exactly (name, OSI, FSF-libre, deprecated)")
print('oracle OK')
