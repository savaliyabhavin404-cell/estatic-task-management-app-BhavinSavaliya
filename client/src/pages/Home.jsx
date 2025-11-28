import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import api from '../api';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    };

    const handleTaskDeleted = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <div className="home-container">
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList
                tasks={tasks}
                onTaskUpdated={handleTaskUpdated}
                onTaskDeleted={handleTaskDeleted}
            />
        </div>
    );
};

export default Home;
