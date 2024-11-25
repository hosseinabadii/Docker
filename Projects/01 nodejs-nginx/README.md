# Node.js App with Nginx Reverse Proxy

This repository contains a simple project using Node.js as a backend server and Nginx as a reverse proxy. The application serves a static HTML file and images, while Nginx handles HTTPS termination and forwards traffic to multiple Node.js backend services.

This project is based on this [youtube course](https://www.youtube.com/watch?v=q8OleYuqntY).

## Project Structure

- **Node.js application**: A lightweight server that serves an HTML file and static assets.
- **Nginx reverse proxy**: Handles client connections, SSL termination, and load balances traffic between multiple Node.js instances.

### Folder Structure

```
├── docker-compose.yaml  # Docker Compose file to manage services
├── my-app/              # Directory for Node.js application
│   ├── Dockerfile       # Dockerfile for the Node.js application
│   ├── server.js        # Node.js server file
│   ├── package.json     # Node.js dependencies and metadata
│   ├── index.html       # HTML file served by the Node.js server
│   └── images/          # Directory for static image assets
├── nginx/               # Directory for Nginx reverse proxy
    ├── Dockerfile       # Dockerfile for Nginx
    ├── nginx.conf       # Nginx configuration file
    └── nginx-certs/     # Directory containing SSL certificates for Nginx
```


## Prerequisites

- Docker installed on your machine.

## How to Run the Project

### Step 1: Build and Start All Services

Use Docker Compose to build and start the services:
```bash
docker compose up --build
```

This will:
1. Build and start three instances of the Node.js application (`app1`, `app2`, and `app3`).
2. Build and start the Nginx reverse proxy (`nginx-server`).

## Project Architecture

### Node.js Application
The Node.js application:
- Serves a static `index.html` file.
- Exposes `/images` to serve static image files.
- Logs which application instance handled the request.
- Uses the `APP_NAME` environment variable to identify the application instance.

### Nginx Reverse Proxy
The Nginx server:
- Listens on ports `80` (HTTP) and `443` (HTTPS).
- Distributes incoming requests across `app1`, `app2`, and `app3` using a round-robin load balancing strategy.
- SSL termination is enabled via the `nginx-certs/` directory.

## How to Test

1. Open your browser and navigate to `http://localhost` or `https://localhost`.
2. The Nginx proxy will forward requests to one of the three backend Node.js instances (`app1`, `app2`, or `app3`).
3. Observe the application logs to see which instance served the request.

## Stopping Services
To stop all running services:
```bash
docker compose down
```