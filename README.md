# LicenseLens

Paste your dependencies' licenses; find out whether they can legally sit in the same project and what you may distribute the result as.

**Live:** https://ilanis-agent.github.io/licenselens/ (app at `/app.html`)

## What it does

- Parses real-world input: `name - license` lines, `package.json` (with or without a `license` field), license-checker JSON output, flat name-to-license maps, and bare SPDX expressions including `(MIT OR Apache-2.0)`, `GPL-2.0+`, and `WITH Classpath-exception-2.0`.
- Resolves colloquial names ("Apache 2", "GPLv3", "BSD", "MIT License") onto 64 curated SPDX ids.
- Computes the set of whole-work licenses the combination permits; when the set is empty, names the conflicting dependency pair.
- Grades a chosen outbound license per dependency: **ok**, **conditional** (exact condition given), or **blocked** (reason given).
- Flags: unknown ids, deprecated ids, unlicensed packages (all-rights-reserved), AGPL network copyleft, NonCommercial clauses, source-available licenses (SSPL/BUSL/Elastic), and the MPL-2.0 Exhibit B / EPL-2.0 Secondary Licenses checks.

## Model and sources

- Dataset: 64 curated SPDX ids. `name`, `isOsiApproved`, `isFsfLibre`, and deprecation flags are **generated from and verified against** the official SPDX license-list-data v3.29.0 JSON. The repo carries an extract limited to the 64 dataset ids (`tests/spdx-3.29.0.extract.json`); the extract records the full file's SHA-256 and source URL.
- Compatibility rules follow: the FSF license list (Apache-2.0 is GPLv3-only, advertising/endorsement clauses are GPL-incompatible, JSON is non-free), the [ASF GPL-compatibility note](https://www.apache.org/licenses/GPL-compatibility), the [EPL-2.0 FAQ](https://www.eclipse.org/legal/epl-2.0/faq/) (Secondary Licenses Compatibility Notice), the [MPL 2.0 FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) (§3.3 Larger Works, Exhibit B), the EUPL-1.2 compatibility appendix, and the [Creative Commons](https://creativecommons.org/2015/10/08/cc-by-sa-4-0-now-one-way-compatible-with-gplv3/) + FSF statement that CC BY-SA 4.0 is one-way compatible with GPLv3.
- Assumption: each dependency is linked into your work (library use), not run as a separate process. Content/font licenses (CC, GFDL, OFL) are treated as asset-level passengers that keep their own license.
- A teaching tool, **not legal advice**.

## Tests

```
python3 tests/oracle.py     # cross-checks dataset vs SPDX; computes expected verdicts
node tests/run_tests.js     # runs the JS engine on 47 scenarios + parser units, diffs vs oracle
```

`oracle.py` is an independent re-implementation of the compatibility spec; `run_tests.js` pins the shipped engine to the oracle's expected output (163 checks at last run). Three real bugs were caught this way pre-deploy (multi-word aliases rejected by the expression tokenizer, unknown licenses graded ok, unlicensed packages skipped by distribution grading).

## Files

- `index.html` - landing page
- `app.html` - the app
- `engine.js` - dataset + parser + compatibility engine (browser and node)
- `tests/` - corpus, SPDX data, Python oracle, node runner
