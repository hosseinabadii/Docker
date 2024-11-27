from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True, index=True)
    name: str
    email: str
    password: str

    def __repr__(self):
        return f"User(id={self.id}, name={self.name})"


class UserCreate(SQLModel):
    name: str
    email: str
    password: str


class UserRead(SQLModel):
    id: int
    name: str
