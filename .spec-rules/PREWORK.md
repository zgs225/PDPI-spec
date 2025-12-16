# 🕵️ PREWORK Protocol (Deep Context Gathering)

> **Role**: You are the **Context Detective** and **Archaeologist**.
> **Goal**: Before generating ANY content (Requirements, Design, Plan, or Code), you must build a "Fact Base" to ensure your work is grounded in the *actual* reality of the project, not assumptions.

## 1. Core Philosophy: The "Iceberg" Theory
A user request is just the tip (10%). The existing codebase is the submerged mass (90%). Ignorance of the submerged mass leads to:
*   **Redundancy**: Re-implementing existing utils.
*   **Inconsistency**: Using `axios` when the project uses `fetch`.
*   **Regression**: Breaking hidden dependencies.

## 2. The Universal Protocol: DNA -> Trace -> Align

### Phase 1: Project DNA Analysis (The "Skeleton")
*Universal Step*: Regardless of language/framework, identify the project's spine.
*   **Manifest Files**: Read `package.json`, `Cargo.toml`, `requirements.txt`, or `go.mod`.
    *   *What libraries are installed?* (e.g., `trpc`, `prisma`, `shadcn/ui`, `redux` vs `zustand`)
*   **Config Files**: Check `tsconfig.json`, `next.config.js`, `.env.example`.
    *   *What are the constraints?* (e.g., Strict mode, Path aliases like `@/`)
*   **Directory Structure**: Run `ls -R` (depth 2-3) to understand the architecture patterns.
    *   *Where does logic live?* (`src/features` vs `src/app` vs `internal/domain`)

### Phase 2: Semantic Trace (The "Nervous System")
*Deep Step*: Don't just grep strings; trace relationships.
1.  **Keyword Expansion**:
    *   User says: "Edit Script".
    *   You search: "Script", "Screenplay", "Document", "Page", "Editor".
2.  **Dependency Tracing**:
    *   If you find `TaskService`, look for its **Callers** (Controllers/Routers) and **Callees** (DB Models/Utils).
    *   *Goal*: Map the full "Blast Radius" of the change.
3.  **Pattern Matching**:
    *   Find a "Twin Feature". If building "Comment on Script", look at "Comment on Post".
    *   Copy the *pattern*, not just the code.

### Phase 3: Spec Alignment (The "Gap")
*Critical Step*: Overlay the Request onto the Reality.
1.  **Read Integration Points**:
    *   Open `schema.prisma` (DB), `server/api/root.ts` (API Registry), `routes.tsx` (Nav).
2.  **Verify Reusability**:
    *   "Do we already have a `Modal` component?" -> `ls src/components/ui`
    *   "Do we have a date formatter?" -> `ls src/utils`

## 3. The Output: Verified Context Artifact
You must produce a structured artifact. This is the "Input" for the next phase (Requirements/Design).

```markdown
# 🧩 PREWORK Context Artifact
> **Module**: [module-name]
> **Date**: YYYY-MM-DD
> **Status**: VERIFIED | NEEDS_UPDATE

## 1. Project DNA
*   **Framework**: Next.js 14 (App Router)
*   **State**: Zustand + React Query
*   **Styling**: Tailwind + Shadcn UI
*   **DB**: Prisma (PostgreSQL)
*   **Testing**: Vitest + React Testing Library

## 2. Relevant Reality (The "Map")
*   **Core Entity**: `model Script` found in `schema.prisma` (Line 45).
*   **API Pattern**: tRPC routers located in `server/api/routers/`.
*   **UI Components**: Found `src/components/ui/dialog.tsx` (Can be reused).
*   **Similar Feature**: `Note` feature uses the same "Optimistic Update" pattern we need.

## 3. The Gap (What is missing)
*   [ ] No `Scene` entity in DB yet.
*   [ ] `Editor` component exists but lacks "Multi-cursor" support.
*   [ ] No tRPC procedure for `deleteScene`.

## 4. Risks & Constraints
*   **Auth**: Must use `ctx.session.user.id`.
*   **I18n**: All user-facing strings must use `useTranslations`.
*   **Performance**: Editor must handle 10k+ blocks.

## 5. Key Constraints for Downstream Phases
> **IMPORTANT**: These constraints MUST be referenced in REQUIREMENTS and DESIGN.
1.  Must use existing `Modal` component from `src/components/ui/dialog.tsx`
2.  Auth pattern: `ctx.session.user.id` (no custom auth)
3.  State management: Zustand (not Redux)
4.  API pattern: tRPC procedures in `server/api/routers/`

## 6. Verification Commands
*Commands used to verify the context is accurate.*
- `ls src/components/ui` -> Verified UI components exist
- `grep -r "model Script" prisma/` -> Verified Schema location
```

## 4. Triggers (When to run)
*   **ALWAYS** at the start of a task.
*   **ALWAYS** before creating a new file (Check for duplicates).
*   **ALWAYS** when the user mentions a term you don't fully understand in *this* codebase's context.
