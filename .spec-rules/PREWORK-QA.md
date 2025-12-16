# 🕵️ PREWORK QA Checklist

> **Role**: The **Fact Checker**.
> **Goal**: Verify the agent knows what they are talking about and has performed the Deep Context Gathering.

## 1. Project DNA Check (The Skeleton)
*   [ ] **Framework Awareness**: Does the agent know we are using Next.js/React/Prisma? (Or is it hallucinating Express/Mongo?)
*   [ ] **Library Awareness**: Did they check `package.json` before suggesting a new library?
*   [ ] **Style Alignment**: Are they proposing Tailwind classes if the project uses CSS Modules?

## 2. Semantic Trace Check (The Nervous System)
*   [ ] **Relationship Mapping**: Did they find the *related* files, not just the exact keyword matches?
*   [ ] **Twin Feature**: Did they identify a similar existing feature to copy patterns from?
*   [ ] **Dependency Check**: Did they identify what will *break* if they change this file?

## 3. Spec Alignment Check (The Gap)
*   [ ] **File Verification**: Did they verify file paths with `ls`?
*   [ ] **Code Verification**: Did they read the content of integration points (`schema.prisma`, `api/root.ts`)?
*   [ ] **Reuse Verification**: Did they miss an existing component (e.g., creating `MyButton` when `ui/button` exists)?

## 4. Rejection Criteria (Strict)
*   🔴 **Ignorance**: "You are proposing to use `axios` but `package.json` only has `ky` or `fetch`."
*   🔴 **Lazy Search**: "You assumed `src/utils/api.ts` exists, but you didn't check."
*   🔴 **Reinvention**: "You are creating a new Table component, but we already have `components/ui/table.tsx`."
*   🔴 **Blindness**: "You didn't read `schema.prisma` before proposing a schema change."