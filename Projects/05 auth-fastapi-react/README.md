# FastAPI and React Full-Stack Application

This project is a full-stack application built with `FastAPI` and `React`. It consists of two main components:

- **Backend**: Built with `FastAPI`, a modern, fast (high-performance), web framework for building APIs.
- **Frontend**: Built with `React`, a JavaScript library for building user interfaces.

## Backend Features

The backend application is built using `FastAPI` and provides the following features:

- **API Endpoints**: The backend exposes API endpoints for interacting with the application data. These endpoints are defined using FastAPI's routing system.
- **Database Integration**: The backend uses `SQLAlchemy` to interact with a database. This allows for data to be stored and retrieved efficiently.
- **Authentication and Authorization**: The backend uses `Passlib` and `PyJWT` to handle user authentication and authorization.
- **Logging**: The backend uses `Loguru` to handle logging, which provides a flexible and customizable logging system.

## Frontend Features

The frontend application is built using `React` and provides the following features:

- **User Interface**: The frontend provides a user-friendly interface for interacting with the application data. This interface is built using `React` components.
- **Routing**: The frontend uses `React Router DOM` to handle client-side routing, which allows for seamless navigation between different pages.
- **API Integration**: The frontend uses `Axios` to interact with the backend API endpoints, which allows for data to be retrieved and sent to the backend.
- **State Management**: The frontend uses React's built-in state management system to manage the application state.
- **Styling**: The frontend uses `Tailwind CSS` to handle styling, which provides a flexible and customizable styling system.

## Docker Compose

The project uses Docker Compose to manage the containers for the backend and frontend applications. You can use the following command to start the containers:

```bash
docker compose up
```

This will start the containers for the backend and frontend applications, and make them available at `http://localhost:8000` and `http://localhost:3000` respectively.
