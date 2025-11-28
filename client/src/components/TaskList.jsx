import React, { useState } from 'react';
import api from '../api';

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDesc, setEditDesc] = useState('');

    const handleToggleComplete = async (task) => {
        try {
            const response = await api.put(`/${task.id}`, {
                completed: !task.completed,
            });
            onTaskUpdated(response.data);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`);
            onTaskDeleted(id);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const startEditing = (task) => {
        setEditingId(task.id);
        setEditTitle(task.title);
        setEditDesc(task.description);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditTitle('');
        setEditDesc('');
    };

    const saveEdit = async (id) => {
        try {
            const response = await api.put(`/${id}`, {
                title: editTitle,
                description: editDesc,
            });
            onTaskUpdated(response.data);
            setEditingId(null);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    {editingId === task.id ? (
                        <div className="edit-form">
                            <input
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <input
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
                            />
                            <button onClick={() => saveEdit(task.id)}>Save</button>
                            <button onClick={cancelEditing}>Cancel</button>
                        </div>
                    ) : (
                        <div className="task-content">
                            <div>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                            </div>
                            <div className="task-actions">
                                <button onClick={() => handleToggleComplete(task)}>
                                    {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
                                </button>
                                <button onClick={() => startEditing(task)}>Edit</button>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
