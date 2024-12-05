# Simple FastAPI React App

This project is a simple full-stack application consisting of a backend server and a frontend client.

## Project Structure

* `backend`: Backend server built using FastAPI
* `frontend`: Frontend client built using React and Vite

## Getting Started

### Backend

1. Navigate to the `backend` directory.
2. Run `pip install -r requirements.txt` to install the dependencies.
3. Run `uvicorn main:app --host 0.0.0.0 --port 8000` to start the server.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.

## Docker

To build and run the project using Docker, follow these steps:

1. Navigate to the root directory of the project.
2. Run `docker compose up` to build and start the Docker containers.

The frontend will be available at `http://localhost:3000` and the backend will be available at `http://localhost:8000`.
