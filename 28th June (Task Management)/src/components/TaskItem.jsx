import React from 'react';

function TaskItem({ task, onEdit, onDelete, onUpdate }) {
  const changeStatus = (status) => {
    onUpdate({ ...task, status });
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <select value={task.status} onChange={(e) => changeStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}

export default TaskItem;
