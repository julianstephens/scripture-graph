# scripture-graph

A local-first Scripture exploration interface centered on weighted cross-reference
neighborhoods.

## Stack

- React 19
- Vite 8
- React Compiler
- React Router with `createBrowserRouter`
- Chakra UI 3
- TypeScript
- pnpm
- Oxlint
- Prettier

The frontend conventions intentionally follow
[`julianstephens/seminar-manager`](https://github.com/julianstephens/seminar-manager)
without carrying over its monorepo or backend-specific structure.

## Development

```sh
pnpm install
pnpm dev
```

Quality checks:

```sh
pnpm typecheck
pnpm lint
pnpm format
pnpm build
```

## Initial product boundary

The first functional slice should stay small:

1. Jump to a verse.
2. Load its strongest weighted cross-references.
3. Render the selected verse as the center of a local graph.
4. Click a neighbor to recenter.
5. Filter connections by relevance.

Bible text and cross-reference data will come from
[`scrollmapper/bible_databases`](https://github.com/scrollmapper/bible_databases).
