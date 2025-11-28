# Task Manager Application

A simple, full-stack task management application built with **React** (Frontend) and **Node.js/Express** (Backend).

## Features

- **Create Tasks**: Add new tasks with a title and description.
- **Read Tasks**: View a list of all tasks.
- **Update Tasks**: Edit task details or mark them as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Responsive UI**: Modern, vibrant Light Theme with glassmorphism effects.
- **Authentication**: Simple mock login/logout functionality.

## Tech Stack

- **Frontend**: React, Vite, CSS (Modules/Variables)
- **Backend**: Node.js, Express
- **Storage**: In-memory array (Data resets on server restart)

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

## Installation & Running

### 1. Backend Setup

Open a terminal and navigate to the `server` directory:

```bash
cd server
npm install
npm start
```

The server will start on `http://localhost:5000`.

### 2. Frontend Setup

Open a **new** terminal and navigate to the `client` directory:

```bash
cd client
npm install
npm run dev
```

The frontend will start (usually on `http://localhost:5173`). Open this URL in your browser.

## API Endpoints

- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a specific task
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update a task
- `DELETE /tasks/:id`: Delete a task

## Usage

1.  **Login**: Enter any username and password to log in.
2.  **Home**: You will be redirected to the dashboard.
3.  **Add Task**: Use the form at the top to add a task.
4.  **Edit/Delete**: Use the buttons on each task card.
5.  **Complete**: Click "Mark Completed" to toggle status.
