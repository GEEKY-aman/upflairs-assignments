import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewTasks() {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from JSON Server
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found. Add some!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>
                  <Link to={`/edit/${task.id}`}>Edit</Link> |{" "}
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );

  async function deleteTask(id) {
    if (window.confirm("Delete this task?")) {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      fetchTasks(); // Refresh list
    }
  }
}
