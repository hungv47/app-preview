# App Preview vision

App Preview helps BB users and their coding agents run a startable app
from the current thread's worktree and inspect it locally or on a remote
browser/phone. Success means one preview process per worktree, a detected
launch recipe, and browser controls that follow the user's open mode.

## Scope

Detect apps, choose among monorepo candidates, and start/stop/restart in
a thread terminal. Manual browser mode is the default; agent mode opens
when ready and closes on Stop. Ports inventories listeners on the BB
server machine. Share exposes a port through BB Connect; remote clients
use the share URL. Node previews bind `127.0.0.1` for Connect forwarding.

Start may install dependencies and run repository scripts. Agents start
detected recipes; share/unshare/kill require plugin-issued confirmation.
Share and kill refuse Docker-published ports and system apps.

## Non-goals

A general process manager, log viewer, watcher, arbitrary agent shell
runner, and automatic orphan cleanup are outside the current product.
Possible process-tool extensions remain deferred in [STATUS.md](STATUS.md).
Source is maintained in [hungv47/app-preview](https://github.com/hungv47/app-preview);
the historical subtree publisher is not the source of truth.
