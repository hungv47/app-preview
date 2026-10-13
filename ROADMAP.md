# app-preview roadmap

## Current handoff

Record consolidation: 13 October 2026. Delivery dates below retain the source record's dates. This migration does not verify a new release.

State: Blocked.

The 3 October record reports tag v0.2.9 and marketplace review #194. A marketplace reinstall is the next external check.

Next action: Recheck marketplace review and the recorded test-prune branch. Use app/README.md for local plugin installation.

## Now

Marketplace PR [get-bb/marketplace#194](https://github.com/get-bb/marketplace/pull/194)
lists `^0.2.9` with `subdir` `app` (`38eb2aa` on `hungv47/marketplace`).
Wait for Sawyer to reinstall that entry.

## Later

- Port Whisperer leftovers: process logs, watch, `ports ps`, orphan clean.
- tsc and oxlint debt Hung deferred at ship. Do not mass-clean unless asked.

## Earlier implementation evidence

The exact dated handoff and its verification details remain in [Git history](https://github.com/hungv47/app-preview/blob/586e2a25801af0d72a0bc358a2dd31a48880c1db/PROGRESS.md). Recheck recorded branch work before promoting it to active or shipped.
