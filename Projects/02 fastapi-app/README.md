# FastAPI User Management Application

This project is a **FastAPI-based web application** for managing users. It includes a simple SQLite database for data storage and supports user CRUD (Create, Read, Update, Delete) operations. The application is containerized with Docker for easy deployment and comes with a `docker-compose.yml` setup for streamlined local development.


## Technologies Used

- **FastAPI**: Backend framework for Python.
- **SQLModel**: ORM and database interaction.
- **SQLite**: Lightweight database for development.
- **Loguru**: Logging library.
- **Docker**: Containerization.
- **Uvicorn**: ASGI server.


## Features

- **FastAPI** framework for a high-performance backend.
- SQLite database integration using `SQLModel`.
- Endpoints to:
  - List all users
  - Retrieve a specific user by ID
  - Create a new user
  - Delete a user by ID
- Lightweight, Dockerized setup for quick deployment.


## Getting Started

### Prerequisites

- Install **Docker** on your system.
- Alternatively, if running without Docker, ensure **Python 3.11+** is installed.

### Running Locally with Docker

1. Navigate to the root directory of the project.

2. Build and start the containers:
   ```bash
   docker compose up --build
   ```

3. Access the application at [http://localhost:8000](http://localhost:8000).

4. Open the interactive API documentation at [http://localhost:8000/docs](http://localhost:8000/docs).

### Running Locally Without Docker

1. Navigate to the root directory of the project.

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Use venv\Scripts\activate on Windows
   pip install -r requirements.txt
   ```

3. Add the `src` directory to the `PYTHONPATH` environment variable:

   - **On Linux/macOS**:
     ```bash
     export PYTHONPATH=$PYTHONPATH:$(pwd)/src
     ```

   - **On Windows (Command Prompt)**:
     ```cmd
     set PYTHONPATH=%PYTHONPATH%;%cd%\src
     ```

   - **On Windows (PowerShell)**:
     ```powershell
     $env:PYTHONPATH="$env:PYTHONPATH;$PWD\src"
     ```

4. Run the application:
   ```bash
   uvicorn src.main:app --reload
   ```

5. Access the application at [http://localhost:8000](http://localhost:8000).


## API Endpoints

| Method | Endpoint          | Description                     |
|--------|-------------------|---------------------------------|
| GET    | `/`               | Root endpoint (Hello World)    |
| GET    | `/users`          | Fetch all users                |
| POST   | `/users`          | Create a new user              |
| GET    | `/users/{user_id}`| Fetch a user by ID             |
| DELETE | `/users/{user_id}`| Delete a user by ID            |


## Notes

- The SQLite database is located in the `db_instance/` directory.
- When deploying in production, ensure proper persistent volume configurations for the database to avoid data loss.
