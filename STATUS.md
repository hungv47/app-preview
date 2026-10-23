# App Preview status

Evidence reviewed: 2026-10-23, source baseline `29d9cb4`.
No BB runtime, marketplace reinstall, lint/typecheck, or package tests
were rerun in this documentation/source review.

## Shipped / recorded release

- [CHANGELOG.md](CHANGELOG.md) records public `v0.2.9` on 2026-09-10;
  the local tag exists at `daea8cb` and [app/package.json](app/package.json)
  declares `0.2.9`.
- That release records argv-based launches, scoped package support,
  detected-recipe-only agent starts, and plugin-token confirmations for
  agent share/unshare/kill. Manual browser mode, lifecycle controls,
  Ports, and BB Connect sharing are present in source.

## Integrated source / verification pending

- The test-prune audit is integrated through `9ee0b90` (2026-09-27), an
  ancestor of this baseline. The historical 2026-09-25 record reported
  12 files / 111 passing tests after restoring unique failure cases;
  that result has not been rerun here.
- No separate active implementation branch is established by this review.

## Blockers and next steps

1. Recheck [marketplace PR #194](https://github.com/get-bb/marketplace/pull/194)
   and reinstall the intended `app` subdirectory entry before treating
   marketplace installation as verified. Its present review/reinstall
   outcome is not established by the old handoff.
2. Reconcile distribution locators before the next release:
   [app/package.json](app/package.json) and [app/README.md](app/README.md)
   still name the legacy repository, while canonical source is
   `hungv47/app-preview`. Verify tag/subdirectory installation first.
3. Existing TypeScript/oxlint debt remains recorded and unmeasured in this
   pass. Run the configured checks for executable changes; keep cleanup
   scoped to a demonstrated problem.

## Planned / not built

Process logs, watch mode, `ports ps`, and orphan cleanup remain deferred
possibilities, not completed features or an approved expansion of the
current scope. Keep one preview per worktree and preserve confirmation,
Docker, and system-app boundaries. Research and captures resolve through
[BRAIN.md](BRAIN.md).
