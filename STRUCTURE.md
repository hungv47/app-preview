# Structure

This public repository owns the BB plugin in `app/`. The package retains
its historical `bb-plugin-app-preview` name. Canonical source is
[hungv47/app-preview](https://github.com/hungv47/app-preview);
the historical subtree publisher is not the source of truth.

## At a glance

```text
app/                      Plugin source, bundled agent skill, tests, assets, licenses
scripts/                  Historical subtree export helper
```

## Code

The BB server entry registers preview tools/RPC and delegates to the
lifecycle service. Detection turns supported application files into
working-directory/argv recipes. Readiness parsing identifies the usable
URL. SQLite holds plugin state. The React panels use the same service
for preview and port actions, with confirmation and classification guards.

| Path | Responsibility |
| --- | --- |
| `app/server.ts` | BB server/tool registration |
| `app/service.ts` | Preview lifecycle coordination |
| `app/detect.ts` | Framework and start-recipe detection |
| `app/paths.ts` | Worktree and path handling |
| `app/ready.ts` | Ready-URL recognition |
| `app/store.ts` | Plugin state persistence |
| `app/app.tsx` | Preview panel |
| `app/ports-panel.tsx` | Listener inventory/actions UI |
| `app/ports-scan.ts` | Platform listener scanning |
| `app/ports-classify.ts` | Process classification and guards |
| `app/ports-actions.ts` | Port action coordination |
| `app/share-port.ts` | BB Connect exposure |
| `app/confirm.ts` | Plugin-issued confirmation tokens |
| `app/browser-tabs.ts` | Browser tab lifecycle |
| `app/skills/app-preview/` | Bundled agent workflow |
| `scripts/publish-mirror.sh` | Historical export helper |

Tests live alongside these modules as `*.test.ts`. Lifecycle integration
is in [app/server.test.ts](app/server.test.ts).
From `app/`, configured checks are `npm test`, `npm run lint`, and
`npm run typecheck`. [README.md](README.md) owns local installation steps.

## Read before changing

- Read [app/README.md](app/README.md) before changing plugin behavior,
  installation, CLI, or settings.
- Read [app/package.json](app/package.json) for entry points, SDK requirements,
  and configured checks before executable changes.
- Read [app/skills/app-preview/SKILL.md](app/skills/app-preview/SKILL.md) before
  changing agent actions or the bundled workflow.

Where new work goes:

| To add | Put it in |
| --- | --- |
| Framework or launch-recipe detection | `app/detect.ts` |
| Lifecycle coordination | `app/service.ts` |
| Preview controls | `app/app.tsx` |
| Listener controls | `app/ports-panel.tsx` and the corresponding port modules above |
| Agent workflow instructions | `app/skills/app-preview/SKILL.md` |

## Knowledge

| Location | Contents |
| --- | --- |
| drive: project key forsvn/app-preview, resolved in the owner's private registry | `OPEN THIS.md` maps sources, resources, evidence, and archive |
| Plugin SQLite database | Runtime state, not project knowledge storage |

New knowledge follows the save rules in [BRAIN.md](BRAIN.md).

## Other documents

- [VISION.md](VISION.md): direction. [PROGRESS.md](PROGRESS.md): state and deferred work.
- [README.md](README.md): setup entry. [CHANGELOG.md](CHANGELOG.md): recorded releases.
- [app/README.md](app/README.md): installation, behavior, CLI, and settings.
- [app/THIRD_PARTY.md](app/THIRD_PARTY.md): Port Whisperer attribution.
- `AGENTS.md` and `CLAUDE.md`: agent entrypoints.
