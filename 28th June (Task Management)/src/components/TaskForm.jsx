import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ onAdd, editTask, onUpdate }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Pending'
  });

  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    if (task.id) {
      onUpdate(task);
    } else {
      onAdd({ ...task, id: uuidv4() });
    }

    setTask({ title: '', description: '', priority: 'Low', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{task.id ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
