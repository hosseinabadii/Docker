# Simple Node.js App with MongoDB

This project is a Node.js application that uses Express.js as the web framework and MongoDB as the database. It also includes a Docker Compose setup for easy deployment and management of the application and its dependencies.

## Project Structure

The project consists of the following main components:

* `app`: The Node.js application code, including the server and dependencies.
* `docker-compose.yml`: The Docker Compose configuration file for setting up and running the application and its dependencies.
* `env.txt`: The environment variables file for storing sensitive information such as database credentials.

## Application Features

The application has the following features:

* **User Profile**: The application displays a user profile page with name, email, and interests.
* **Edit Profile**: The application allows users to edit their profile information.
* **Save Profile**: The application saves the updated profile information to the MongoDB database.

## Dependencies

The project uses the following dependencies:

* `express`: The web framework for building the Node.js application.
* `mongodb`: The database for storing and retrieving data.

## Setup and Running the Application

To set up and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Create a new file named `.env` in the root directory and add the environment variables from `env.txt`.
3. Run `docker compose up` to start the application and its dependencies.
4. Access the application at `http://localhost:3000`.

## MongoDB Setup

The project uses a MongoDB database, which is set up using the `docker-compose.yml` file. The database is exposed on port 27017, and the credentials are stored in the `env.txt` file.

## Mongo Express Setup

The project also includes a Mongo Express instance for easy access to the MongoDB database. The Mongo Express instance is exposed on port 8081, and the credentials are stored in the `env.txt` file.
