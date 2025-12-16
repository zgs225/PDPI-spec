# Next.js + tRPC + Prisma Example

This folder contains technology-specific examples for the SDD protocol when using:
- **Framework**: Next.js 14 (App Router)
- **API**: tRPC
- **Database**: Prisma (PostgreSQL)
- **State**: Zustand / React Query
- **Styling**: Tailwind CSS + Shadcn UI
- **Package Manager**: pnpm

## Files

| File | Description |
|------|-------------|
| `requirements-example.md` | Example requirements document |
| `design-example.md` | Example design document with TypeScript types |
| `plan-example.md` | Example implementation plan with pnpm/prisma commands |

## Command Reference

| Placeholder | This Stack |
|-------------|------------|
| `[package manager]` | `pnpm` |
| `[test command]` | `pnpm test` or `pnpm vitest` |
| `[lint command]` | `pnpm lint` |
| `[type check command]` | `pnpm typecheck` or `tsc --noEmit` |
| `[build command]` | `pnpm build` |
| `[dev server command]` | `pnpm dev` |
| `[db migration command]` | `npx prisma migrate dev --name [name]` |
| `[db rollback command]` | `npx prisma migrate reset` |
| `[schema validation command]` | `npx prisma validate` |
| `[language]` | `typescript` |
| `[ext]` | `.ts` or `.tsx` |

## File Path Conventions

| Type | Pattern |
|------|---------|
| Service | `src/features/[feature]/[Feature]Service.ts` |
| Router | `src/server/api/routers/[feature].ts` |
| Component | `src/features/[feature]/components/[Component].tsx` |
| Types | `src/features/[feature]/types.ts` |
| Tests | `src/features/[feature]/__tests__/[file].test.ts` |
| Schema | `prisma/schema.prisma` |
