# Backend Developer Intern Assignment

## Project Overview

This project implements a **scalable REST API with authentication and role-based access control** along with a simple frontend interface to interact with the APIs.

The system allows users to register, login using JWT authentication, and perform CRUD operations on tasks through a protected API.

---

# Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt password hashing

### Frontend

* HTML
* Vanilla JavaScript
* Fetch API

---

# Features

## Authentication

* User Registration
* Secure Login using JWT
* Password hashing with bcrypt

## Role-Based Access

* User roles supported:

  * user
  * admin

## Task Management

CRUD APIs for tasks:

* Create Task
* View Tasks
* Update Task
* Delete Task

Each task is linked to the authenticated user.

---

# API Versioning

All APIs follow versioning:

/api/v1/

Example:

POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks

---

# API Endpoints

## Authentication

### Register User

POST /api/v1/auth/register

Request Body
{
"name": "John",
"email": "[john@example.com](mailto:john@example.com)",
"password": "123456"
}

---

### Login User

POST /api/v1/auth/login

Response
{
"token": "JWT_TOKEN"
}

---

## Tasks

### Create Task

POST /api/v1/tasks

Headers
Authorization: Bearer TOKEN

---

### Get Tasks

GET /api/v1/tasks

---

### Update Task

PUT /api/v1/tasks/:id

---

### Delete Task

DELETE /api/v1/tasks/:id

---

# Project Structure

assignment-project/

backend/

* config/
* models/
* routes/
* middleware/
* server.js

frontend/

* index.html
* app.js

README.md

---

# Running the Project

## 1. Clone Repository

git clone <your_repo_link>

---

## 2. Run Backend

cd backend

npm install

node server.js

Server will run on:

http://localhost:5000

---

## 3. Run Frontend

Open:

frontend/index.html

in your browser.

---

# Database

MongoDB is used as the primary database.

Default connection:

mongodb://127.0.0.1:27017/internTask

---

# Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected API routes
* Role-based access middleware
* Input validation

---

# Scalability Considerations

To support large-scale applications, the system can be improved with:

1. Microservices architecture separating authentication and task services
2. Redis caching for frequently accessed data
3. Load balancing using Nginx
4. Containerization with Docker
5. Horizontal scaling using Kubernetes
6. API Gateway for centralized routing and security

---

# Future Improvements

* Swagger API documentation
* Refresh token authentication
* Pagination for task APIs
* Docker deployment
* Redis caching
* Rate limiting

---

# Author

Erika Binu
Backend Developer Intern Assignment

Github:https://github.com/Erika890-cmyk
