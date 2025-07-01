import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

function TaskList({ tasks, onUpdate, onDelete }) {
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="task-list">
      {editTask && (
        <TaskForm
          editTask={editTask}
          onUpdate={(updated) => {
            onUpdate(updated);
            setEditTask(null);
          }}
        />
      )}
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={() => setEditTask(task)}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
