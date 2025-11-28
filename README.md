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

## ScreenShots
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/6dc0de69-d3d6-4bc1-a08c-1086d18f9c5c" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/92881e07-bee9-44a7-8f00-b95abc0b875e" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/8eb7a51a-39b2-45e5-bdb6-c1f9531ede5e" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/1ba610f4-3293-4857-8773-d27eebb72af0" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/f8536aa9-6de3-4807-843d-e1ec6fbc6bd9" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/530a3bac-7391-4466-8347-685ea5de9c35" />





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
