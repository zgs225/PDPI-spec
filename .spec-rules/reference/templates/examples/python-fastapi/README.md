# Python + FastAPI + SQLAlchemy Example

This folder contains technology-specific examples for the SDD protocol when using:
- **Framework**: FastAPI
- **Database**: SQLAlchemy + PostgreSQL
- **Validation**: Pydantic
- **Package Manager**: pip / poetry
- **Testing**: pytest

## Command Reference

| Placeholder | This Stack |
|-------------|------------|
| `[package manager]` | `pip` or `poetry` |
| `[test command]` | `pytest` |
| `[lint command]` | `ruff check .` or `flake8` |
| `[type check command]` | `mypy .` |
| `[build command]` | `python -m build` |
| `[dev server command]` | `uvicorn main:app --reload` |
| `[db migration command]` | `alembic upgrade head` |
| `[db rollback command]` | `alembic downgrade -1` |
| `[schema validation command]` | `alembic check` |
| `[language]` | `python` |
| `[ext]` | `.py` |

## File Path Conventions

| Type | Pattern |
|------|---------|
| Service | `app/services/[feature]_service.py` |
| Router | `app/routers/[feature].py` |
| Models | `app/models/[feature].py` |
| Schemas | `app/schemas/[feature].py` |
| Tests | `tests/test_[feature].py` |
| Migrations | `alembic/versions/[timestamp]_[name].py` |

## Example Type Definitions

```python
# app/schemas/user.py
from pydantic import BaseModel, EmailStr
from datetime import datetime
from enum import Enum
from typing import Optional

class Role(str, Enum):
    USER = "USER"
    ADMIN = "ADMIN"

class UserBase(BaseModel):
    email: EmailStr
    name: Optional[str] = None

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[Role] = None

class User(UserBase):
    id: str
    role: Role
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
```

## Example Service

```python
# app/services/user_service.py
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate

class UserService:
    def __init__(self, db: Session):
        self.db = db

    def create(self, user: UserCreate) -> User:
        db_user = User(**user.model_dump())
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user

    def get_by_id(self, user_id: str) -> User | None:
        return self.db.query(User).filter(User.id == user_id).first()

    def update(self, user_id: str, user: UserUpdate) -> User:
        db_user = self.get_by_id(user_id)
        for key, value in user.model_dump(exclude_unset=True).items():
            setattr(db_user, key, value)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user

    def delete(self, user_id: str) -> None:
        db_user = self.get_by_id(user_id)
        self.db.delete(db_user)
        self.db.commit()
```

## Example Router

```python
# app/routers/user.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.user_service import UserService
from app.schemas.user import User, UserCreate, UserUpdate

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    service = UserService(db)
    return service.create(user)

@router.get("/{user_id}", response_model=User)
def get_user(user_id: str, db: Session = Depends(get_db)):
    service = UserService(db)
    user = service.get_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=User)
def update_user(user_id: str, user: UserUpdate, db: Session = Depends(get_db)):
    service = UserService(db)
    return service.update(user_id, user)

@router.delete("/{user_id}")
def delete_user(user_id: str, db: Session = Depends(get_db)):
    service = UserService(db)
    service.delete(user_id)
    return {"message": "User deleted"}
```
