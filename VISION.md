# Vision

Owner: Hung · Confirmed: 2026-10-23 (accepted in PR #3; restructured 2026-11-01)

App Preview helps BB users and their coding agents run a startable app
from the current thread's worktree and inspect it locally or on a remote
browser/phone.

## Why it exists

Run and inspect the app from the current thread's worktree.

## Who it is for

BB users and their coding agents.

## The outcome that matters most

One preview process per worktree, a detected launch recipe, and browser
controls that follow the user's open mode.

## What done looks like

Detect apps, choose among monorepo candidates, and start/stop/restart in
a thread terminal. Ports inventories listeners on the BB server machine.
Share exposes a port through BB Connect; remote clients use the share URL.

## Principles

- Manual browser mode is the default; agent mode opens when ready and closes
  on Stop.
- Node previews bind `127.0.0.1` for Connect forwarding.
- Start may install dependencies and run repository scripts. Agents start
  detected recipes; share/unshare/kill require plugin-issued confirmation.
- Share and kill refuse Docker-published ports and system apps.

## Out of scope

- A general process manager, log viewer, watcher, arbitrary agent shell
  runner, and automatic orphan cleanup are outside the current product.
  Possible process-tool extensions remain deferred in [PROGRESS.md](PROGRESS.md).

## Direction changes

- 2026-10-23: Established the four authoritative project records
  ([PR #3](https://github.com/hungv47/app-preview/pull/3)).
