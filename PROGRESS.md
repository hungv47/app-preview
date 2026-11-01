# Progress

Updated: 2026-10-23 · Stage: live · Health: At risk

Last recorded public release: v0.2.9 on 2026-09-10. Marketplace reinstall and
distribution locators remain unverified. No active implementation branch was
established by the 2026-10-23 review; runtime and package checks were not rerun.

Next action: Recheck marketplace PR #194 and reinstall the intended app subdirectory entry. Responsible owner: Unknown.

## Current state

| State | Item | Evidence | Date |
| --- | --- | --- | --- |
| Built, not shipped | Integrated test-prune audit; no later delivery established | Commit `9ee0b90`; recheck with the configured package checks before executable changes | 2026-09-27 |
| Next | Verify marketplace installation | [Marketplace PR #194](https://github.com/get-bb/marketplace/pull/194); review and reinstall outcome unknown | 2026-10-23 |
| Next | Reconcile legacy distribution locators before the next release | [app/package.json](app/package.json), [app/README.md](app/README.md) still name the legacy repository | 2026-10-23 |

## Gates

- Verify tag/subdirectory installation before treating marketplace installation or the distribution locators as correct.
- Run configured tests, lint, and typecheck for executable changes. Existing TypeScript/oxlint debt is recorded but unmeasured; scope cleanup to a demonstrated problem.
- Keep one preview per worktree. Preserve plugin-issued confirmation, Docker, and system-app boundaries in [VISION.md](VISION.md).

## Later

- Process logs, watch mode, `ports ps`, and orphan cleanup are deferred possibilities, not built features or an approved scope expansion. Research and captures resolve through [BRAIN.md](BRAIN.md).

## 2026-11-01

- Migrated the project records to the PROGRESS format. The old STATUS.md and
  ROADMAP.md are in commit `7ed0b76`. Product and provider state were not reverified.

## 2026-10-23

- Established project records in [PR #3](https://github.com/hungv47/app-preview/pull/3), using source baseline `29d9cb4`.
  No BB runtime, marketplace reinstall, lint/typecheck, or package tests were rerun.
- Recorded manual browser mode, lifecycle controls, Ports, and BB Connect sharing
  in source. This source review did not establish a new delivery.

## 2026-09-27

- Integrated the test-prune audit through `9ee0b90`, an ancestor of the reviewed baseline.
  The 2026-09-25 record reported 12 files / 111 passing tests after restoring unique failure cases; this result was not rerun.

## 2026-09-10

- Shipped public v0.2.9, as recorded in [CHANGELOG.md](CHANGELOG.md).
  Local tag `v0.2.9` points to `daea8cb`; [app/package.json](app/package.json) declares `0.2.9`.
- Recorded argv-based launches, scoped package support, detected-recipe-only
  agent starts, and plugin-token confirmations for agent share/unshare/kill.
