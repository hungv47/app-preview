# app-preview structure

This Git root owns the files tracked in [hungv47/app-preview](https://github.com/hungv47/app-preview). The repository is public. Keep private planning and external folder identities in the authorized Drive lookup.

VISION.md records purpose. ROADMAP.md owns priorities, active work, blockers, and the live handoff. CHANGELOG.md records verified delivery. STRUCTURE.md maps ownership and working commands. DRIVE.md locates external materials.

## Architecture and ownership

app/ owns the BB plugin, app recipe detection, thread-terminal lifecycle, port inspection, and preview controls. scripts/ contains maintenance helpers. The plugin has no authority to bypass share or kill confirmation.

## Source map

| Path | Purpose |
|---|---|
| `app/` | Application source |
| `CHANGELOG.md` | What has shipped |
| `ROADMAP.md` | What will ship |
| `scripts/` | Tooling |
| `VISION.md` | Why this exists |

## Working commands

- From `app`, run `bun install` before package work. Available commands: `bun run test`, `bun run lint`, `bun run typecheck`.

Use [app/README.md](app/README.md) for setup details and project-specific validation. This record migration does not re-run application release or deployment gates.

## Record history

Useful current work moved to ROADMAP.md where this is a product. Location and repository facts moved here. Earlier exact records remain in Git history:

- [PROGRESS.md at 586e2a2](https://github.com/hungv47/app-preview/blob/586e2a25801af0d72a0bc358a2dd31a48880c1db/PROGRESS.md)
- [INDEX.md at 586e2a2](https://github.com/hungv47/app-preview/blob/586e2a25801af0d72a0bc358a2dd31a48880c1db/INDEX.md)

## External materials and recall

Use DRIVE.md for original media, sendables, and verification evidence. Keep deployable assets needed by a build in Git with their source and license. Mem0 is optional recall through the correct Executor v2 account. Store a scope, project key, source pointer, and truth date; open the current source before using a recalled claim. Do not upload credentials, private identity, medical, finance, or employer-confidential source bodies.
