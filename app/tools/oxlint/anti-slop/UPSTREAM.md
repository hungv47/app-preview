# anti-slop provenance

Updated: 2026-10-03

Source: the `install-anti-slop` skill bundle at `assets/anti-slop/`.
That bundle has no recoverable git commit. The baseline before this copy is unknown.
Do not treat this file as proof of an upstream revision.

Adopted: the whole generic plugin snapshot, including `shared/scope.ts`,
`no-array-filter-map`, `no-reduce-accumulator-copy`, `require-readable-spacing`,
and `vendor/eslint-stylistic/`. The previous tree matched that snapshot except
`resolveVariable` was inlined in three files. Those files now import
`shared/scope.ts`.

Effect rules are present and not registered. This package has no direct `effect`
dependency.

Enabled in `oxlint.config.ts` at error: every generic rule in this snapshot,
plus `oxc/no-accumulating-spread`. Application lint findings were left in place.
