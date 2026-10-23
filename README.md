# App Preview

BB plugin for starting worktree apps and listing, sharing, or stopping listeners.

- [VISION.md](VISION.md): users, outcomes, capabilities, and boundaries.
- [BRAIN.md](BRAIN.md): external knowledge key and authorized Drive access.
- [STRUCTURE.md](STRUCTURE.md): plugin architecture and repository map.
- [STATUS.md](STATUS.md): dated source/release state and remaining checks.

## Install from this checkout

Requires BB 0.41+ and plugin SDK 0.4.34+.

```bash
cd app
npm ci
bb plugin install .
```

Open Preview in the thread side panel or run `bb preview detect`.
Start may install dependencies and run repository scripts; Share exposes
a port through BB Connect, and Kill sends a process signal. Review the
[full behavior and settings](app/README.md) before using those actions.

Development checks from `app/`: `npm test`, `npm run lint`, and
`npm run typecheck`. [CHANGELOG.md](CHANGELOG.md) records release history;
[STATUS.md](STATUS.md) records the legacy distribution-locator mismatch.
