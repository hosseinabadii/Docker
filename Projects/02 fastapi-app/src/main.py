from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from loguru import logger
from sqlmodel import select

from db_setup import SessionDep, init_db
from models import User, UserCreate, UserRead


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Running lifespan before the application startup!")
    init_db()
    yield
    logger.info("Running lifespan after the application shutdown!")


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def root():
    return {"message": "Hello World!"}


@app.get("/users", response_model=list[UserRead])
async def get_users(session: SessionDep):
    return session.exec(select(User)).all()


@app.post("/users", response_model=UserRead)
async def create_user(user_create: UserCreate, session: SessionDep):
    db_user = User(**user_create.model_dump())
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


@app.get("/users/{user_id}", response_model=UserRead)
async def get_user(user_id: int, session: SessionDep):
    user = session.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.delete("/users/{user_id}", response_model=UserRead)
async def delete_user(user_id: int, session: SessionDep):
    user = session.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    session.delete(user)
    session.commit()
    return user
