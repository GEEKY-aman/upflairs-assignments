import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './Navbar';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3001/tasks');
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className="task-section">
      <h3>Tasks</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </section>
  );
}
