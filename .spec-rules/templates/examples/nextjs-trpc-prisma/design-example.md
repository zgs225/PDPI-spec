# 🏗️ User Management Deep Design Spec (Next.js/tRPC/Prisma Example)

> **Status**: Draft
> **Complexity**: Medium
> **Design Type**: Single Module

## 0. 📋 Context & Requirements Reference
> **PREWORK**: `specs/user-management/PREWORK.md`
> **REQUIREMENTS**: `specs/user-management/requirements.md`

### 0.1 User Story Coverage
| User Story | Design Section | Component/API | Status |
|------------|----------------|---------------|--------|
| US-001 | Section 4.1 | `createUser` procedure | ✅ Covered |
| US-002 | Section 5.1 | `UserService.update()` | ✅ Covered |

### 0.2 Key Constraints from PREWORK
- Must use existing `Dialog` component from `src/components/ui/dialog.tsx`
- Auth pattern: `ctx.session.user.id` from NextAuth
- State management: Zustand for local state, React Query for server state

## 3. 💾 Data Model

```prisma
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([email])
}

enum Role {
  USER
  ADMIN
}
```

## 9. 📁 File Manifest

### 9.1 Files to Create
| File Path | Type | Purpose | Dependencies |
|-----------|------|---------|--------------|
| `src/features/user/UserService.ts` | Service | Core business logic | `prisma` |
| `src/server/api/routers/user.ts` | Router | tRPC endpoints | `UserService` |
| `src/features/user/components/UserCard.tsx` | Component | UI display | React Query |

### 9.2 Files to Modify
| File Path | Change Type | Description |
|-----------|-------------|-------------|
| `prisma/schema.prisma` | Add Model | Add `User` model |
| `src/server/api/root.ts` | Add Import | Register `userRouter` |

### 9.3 Concrete Type Definitions

```typescript
// src/features/user/types.ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  role: z.enum(["USER", "ADMIN"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserInputSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
});

export type CreateUserInput = z.infer<typeof CreateUserInputSchema>;

export const UpdateUserInputSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1).optional(),
  role: z.enum(["USER", "ADMIN"]).optional(),
});

export type UpdateUserInput = z.infer<typeof UpdateUserInputSchema>;
```

### 9.4 API Signatures

```typescript
// src/features/user/UserService.ts
import { prisma } from "@/server/db";
import type { CreateUserInput, UpdateUserInput, User } from "./types";

export class UserService {
  async create(input: CreateUserInput): Promise<User> {
    return prisma.user.create({ data: input });
  }

  async update(input: UpdateUserInput): Promise<User> {
    const { id, ...data } = input;
    return prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }

  async getById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async list(): Promise<User[]> {
    return prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  }
}

// src/server/api/routers/user.ts
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { CreateUserInputSchema, UpdateUserInputSchema } from "@/features/user/types";
import { UserService } from "@/features/user/UserService";

const userService = new UserService();

export const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateUserInputSchema)
    .mutation(({ input }) => userService.create(input)),
    
  update: protectedProcedure
    .input(UpdateUserInputSchema)
    .mutation(({ input }) => userService.update(input)),
    
  delete: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(({ input }) => userService.delete(input.id)),
    
  getById: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(({ input }) => userService.getById(input.id)),
    
  list: protectedProcedure
    .query(() => userService.list()),
});
```
