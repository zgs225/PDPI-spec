# Express + Mongoose + TypeScript Example

This folder contains technology-specific examples for the SDD protocol when using:
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Language**: TypeScript
- **Validation**: Zod or Joi
- **Package Manager**: npm / yarn
- **Testing**: Jest

## Command Reference

| Placeholder | This Stack |
|-------------|------------|
| `[package manager]` | `npm` or `yarn` |
| `[test command]` | `npm test` or `jest` |
| `[lint command]` | `npm run lint` or `eslint .` |
| `[type check command]` | `tsc --noEmit` |
| `[build command]` | `npm run build` |
| `[dev server command]` | `npm run dev` or `nodemon` |
| `[db migration command]` | N/A (Mongoose is schema-less) |
| `[db rollback command]` | N/A |
| `[schema validation command]` | `tsc --noEmit` |
| `[language]` | `typescript` |
| `[ext]` | `.ts` |

## File Path Conventions

| Type | Pattern |
|------|---------|
| Service | `src/services/[feature].service.ts` |
| Controller | `src/controllers/[feature].controller.ts` |
| Router | `src/routes/[feature].routes.ts` |
| Model | `src/models/[feature].model.ts` |
| Types | `src/types/[feature].types.ts` |
| Tests | `src/__tests__/[feature].test.ts` |

## Example Model

```typescript
// src/models/user.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name?: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1 });

export const User = mongoose.model<IUser>('User', UserSchema);
```

## Example Types

```typescript
// src/types/user.types.ts
import { z } from 'zod';

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = z.object({
  name: z.string().min(1).optional(),
  role: z.enum(['USER', 'ADMIN']).optional(),
});

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
```

## Example Service

```typescript
// src/services/user.service.ts
import { User, IUser } from '../models/user.model';
import { CreateUserInput, UpdateUserInput } from '../types/user.types';

export class UserService {
  async create(input: CreateUserInput): Promise<IUser> {
    const user = new User(input);
    return user.save();
  }

  async getById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  async update(id: string, input: UpdateUserInput): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, input, { new: true });
  }

  async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  }

  async list(): Promise<IUser[]> {
    return User.find().sort({ createdAt: -1 });
  }
}
```

## Example Controller

```typescript
// src/controllers/user.controller.ts
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserSchema, UpdateUserSchema } from '../types/user.types';

const userService = new UserService();

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = CreateUserSchema.parse(req.body);
    const user = await userService.create(input);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = UpdateUserSchema.parse(req.body);
    const user = await userService.update(req.params.id, input);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
```

## Example Routes

```typescript
// src/routes/user.routes.ts
import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createUser);
router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

export default router;
```
