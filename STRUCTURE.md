# App Preview structure

This public repository owns the BB plugin in `app/`. The package retains
its historical `bb-plugin-app-preview` name; canonical source is
[hungv47/app-preview](https://github.com/hungv47/app-preview).

## Code architecture

The BB server entry registers preview tools/RPC and delegates to the
lifecycle service. Detection turns supported application files into
working-directory/argv recipes; readiness parsing identifies the usable
URL. SQLite holds plugin state. The React panels use that same service
for preview and port actions, with confirmation and classification guards.

```text
app/server.ts             BB server/tool registration
app/service.ts            Preview lifecycle coordination
app/detect.ts             Framework and start-recipe detection
app/paths.ts              Worktree and path handling
app/ready.ts              Ready-URL recognition
app/store.ts              Plugin state persistence
app/app.tsx               Preview panel
app/ports-panel.tsx       Listener inventory/actions UI
app/ports-scan.ts         Platform listener scanning
app/ports-classify.ts     Process classification and guards
app/ports-actions.ts      Port action coordination
app/share-port.ts         BB Connect exposure
app/confirm.ts            Plugin-issued confirmation tokens
app/browser-tabs.ts       Browser tab lifecycle
app/skills/app-preview/   Bundled agent workflow
app/README.md             Installation, behavior, CLI, and settings
app/THIRD_PARTY.md        Port Whisperer attribution
scripts/publish-mirror.sh  Historical export helper
```

Tests live alongside these modules as `*.test.ts`, including lifecycle
integration in [app/server.test.ts](app/server.test.ts).
[README.md](README.md) has local installation and checks.

## External knowledge architecture

[BRAIN.md](BRAIN.md) resolves `forsvn/app-preview` to Google Drive and
its `OPEN THIS.md` navigation map. BB/SDK references, demonstration
originals, private planning, and captures live there; plugin code,
required runtime assets, licenses, and the bundled agent skill stay in
Git. SQLite is runtime plugin state, not project knowledge storage.
[STATUS.md](STATUS.md) owns the live lifecycle and deferred work.
