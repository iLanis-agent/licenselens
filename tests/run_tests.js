/* LicenseLens node test runner: JS engine vs oracle-computed expected.json */
'use strict';
const fs = require('fs');
const path = require('path');
const LL = require(path.join(__dirname, '..', 'engine.js'));

const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
const expected = JSON.parse(fs.readFileSync(path.join(__dirname, 'expected.json'), 'utf8'));
const expByName = {}; expected.forEach(e => expByName[e.name] = e);

let checks = 0, fails = [];
function eq(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
function chk(cond, msg) { checks++; if (!cond) fails.push(msg); }

for (const c of cases) {
  const exp = expByName[c.name];
  const parsed = LL.parseDeps(c.input);
  const withAst = parsed.components.filter(x => x.ast);
  const comb = LL.combine(withAst);

  if (exp.feasible) {
    chk(eq([...comb.feasible].sort(), exp.feasible),
      `${c.name}: feasible js=${JSON.stringify([...comb.feasible].sort())} oracle=${JSON.stringify(exp.feasible)}`);
  }
  if (exp.conflict) {
    chk(eq(comb.conflicts.map(p => [...p].sort()), exp.conflict.map(p => [...p].sort())),
      `${c.name}: conflicts js=${JSON.stringify(comb.conflicts)} oracle=${JSON.stringify(exp.conflict)}`);
  }
  if (exp.unlicensed) {
    chk(parsed.components.some(x => x.unlicensed), `${c.name}: expected an unlicensed component`);
    chk(parsed.warnings.length > 0, `${c.name}: expected a no-license warning`);
  }
  if (exp.overall) {
    const dist = LL.distribute(parsed.components, c.outbound);
    chk(dist.overall === exp.overall, `${c.name}: overall js=${dist.overall} oracle=${exp.overall}`);
    for (const [k, v] of Object.entries(exp.per || {})) {
      const r = dist.results.find(r => r.name === k);
      chk(r && r.verdict === v, `${c.name}: per[${k}] js=${r && r.verdict} oracle=${v}`);
    }
  }
  // unknown-license handling
  if (c.expect.per && Object.values(c.expect.per).includes('unknown')) {
    chk(parsed.warnings.some(w => /not a known SPDX id/.test(w)), `${c.name}: expected unknown-id warning`);
  }
}

// parser unit checks
const p1 = LL.parseExpr('(MIT OR Apache-2.0) AND BSD-3-Clause');
chk(p1.type === 'and' && p1.kids[0].type === 'or' && p1.kids.length === 2, 'parser: parens/or/and shape');
const p2 = LL.parseExpr('GPL-2.0+');
chk(p2.id === 'GPL-2.0-or-later' && p2.plus === true, 'parser: + operator upgrades to or-later');
const p3 = LL.parseExpr('Apache-2.0 WITH LLVM-exception');
chk(p3.exception === 'LLVM-exception' && p3.id === 'Apache-2.0', 'parser: WITH exception captured');
const p4 = LL.parseExpr('mit or apache-2.0');
chk(p4.type === 'or' && p4.kids[0].id === 'MIT' && p4.kids[1].id === 'Apache-2.0', 'parser: case-insensitive ops + id normalization');
chk(LL.parseDeps('web - Apache 2').components[0].ast.id === 'Apache-2.0', 'whole-string multi-word alias resolves');
chk(LL.astToString(LL.parseExpr('(MIT OR Apache-2.0)')) === '(MIT OR Apache-2.0)', 'astToString roundtrip');

// dataset sanity
chk(LL.LICENSES.length === 64, 'dataset has 64 entries');
chk(LL.LICENSES.every(l => l.name && l.cat && l.osi !== undefined), 'dataset entries well-formed');

console.log(`${checks} checks, ${fails.length} failures`);
if (fails.length) { fails.forEach(f => console.log('FAIL', f)); process.exit(1); }
console.log('ALL PASS');
