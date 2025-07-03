import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, initialData = {} }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (initialData) setTask(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={task.title} onChange={handleChange} required />
      <label>Description</label>
      <textarea name="description" value={task.description} onChange={handleChange} />
      <label>Due Date</label>
      <input name="date" type="date" value={task.date} onChange={handleChange} />
      <button type="submit">{initialData.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
}
