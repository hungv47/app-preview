# App Preview


## Read first

Before any work in this repo, read:

1. `INDEX.md` — map of this tree
2. `VISION.md`, `ROADMAP.md`, `PROGRESS.md`, `CHANGELOG.md`

For area context, open the [Forsvn Linear document](https://linear.app/hungv47/document/forsvn-start-here-cabfade69716) and its relevant section. Product status and code live here.

Then continue with the rest of this file.

Hung's BB plugin for starting a worktree app and opening it in BB's in-app browser.
Canonical source is this repository: `hungv47/app-preview`.
Locate the `app-preview` checkout by repository name; its parent folder may change.

## Commands

From `app/`:

```bash
npm install
npm test
bb plugin install .
bb plugin reload app-preview
```

Path-install from `app/`. After edits, `bb plugin reload app-preview`.

## Layout

- Horsemen and this file at the product root
- `app/` is the plugin package

## Source and publish

Edit and tag this origin. Do not run `scripts/publish-mirror.sh` from this clone;
that wrapper expects OS `tools/publish-public-mirror.sh`.
Marketplace listing is `hungv47/marketplace` branch `submit-app-preview`
([get-bb/marketplace#194](https://github.com/get-bb/marketplace/pull/194)).
