# Homework Task Management System

## Description

The Homework Management System is a web application for managing homework assignments. It allows users to add, edit, complete, filter, and delete tasks with deadlines. The project demonstrates the use of the MVC architecture with Node.js, server-side rendering using EJS, and MongoDB for persistent storage.

---

## Features

- Add new homework tasks with title, description, and deadline (date & time)
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Overdue tasks are highlighted in the interface
- Sort/filter tasks by deadline or by completion status\*\* ("All tasks", "Only active", "Only completed")
- Simple and clear web interface (minimum styling for readability)

---

## Stack & External Libraries

- **Node.js** — server-side JavaScript
- **Express** — web framework
- **MongoDB** — database (native `mongodb` driver)
- **EJS** — templates/views (SSR)
- **dotenv** — for environment variables
- **body-parser** — for form data
- **method-override** — for supporting PUT/DELETE via POST
- **nodemon** (dev only) — auto-reload during development

---

## External Libraries Used

- [express](https://expressjs.com/) — Web framework for Node.js
- [ejs](https://ejs.co/) — Template engine for server-side rendering
- [mongodb](https://www.npmjs.com/package/mongodb) — Official MongoDB driver
- [dotenv](https://www.npmjs.com/package/dotenv) — For environment variable management
- [method-override](https://www.npmjs.com/package/method-override) — Middleware for supporting PUT/DELETE in forms

## Project Structure

```bash
homework-mvc/
│
├── config/
│   └── db.js             # MongoDB connection
│
├── controllers/
│   └── taskController.js # Task business logic
│
├── models/
│   └── Task.js           # Task DAO (database access functions)
│
├── routes/
│   └── taskRoutes.js     # All app routes
│
├── views/
│   ├── layout.ejs        # Main layout
│   ├── index.ejs         # Task list (main page)
│   ├── add.ejs           # Add task form
│   └── edit.ejs          # Edit task form
│
├── public/
│   └── style.css         # All CSS styles
│
├── .env                  # Environment variables (MongoDB URI etc.)
├── .gitignore
├── app.js                # Main server file
├── package.json
└── README.md
```

## How to Run

1. **Clone the repository**

```bash
git clone https://github.com/tinomu85/System-zarzadzania-zadaniami-domowymi

```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a .env file in the root directory:

```bash
PORT=3000
MONGO_URI=mongodb+srv://admin:uc18A9f9PSQmq30x@dev.od2l1dd.mongodb.net/?retryWrites=true&w=majority&appName=dev
```

4. **Start the server**

```bash
node app.js
```

For development with auto-reload:

```bash
nodemon app.js
```

5. **Open in browser:**
http://localhost:3000

---

## Functional Requirements

- **Add a task:** with title, description, and deadline.
- **Edit a task:** update title, description, deadline.
- **Mark as done:** toggle task as completed.
- **Delete a task:** remove from database.
- **Highlight overdue tasks:** any task whose deadline is in the past and not completed is visually marked.
- **Sort/filter tasks:**
  - By deadline (default: closest at the top)
  - By status: "Only active" (not done), "Only completed" (done), "All tasks" (default).

---

## About MVC Implementation

- **Model:** models/Task.js (DAO for MongoDB collection)
- **View:** all .ejs templates in /views/
- **Controller:** controllers/taskController.js
- **Router:** routes/taskRoutes.js
- **Database connection:** config/db.js
- **Static assets:** /public/style.css

---
