import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`http://localhost:3001/tasks/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/tasks/${id}`, task);
    navigate("/");
  };

  return (
    <main>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={task.title}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <label>Due Date</label>
        <input
          name="date"
          type="date"
          value={task.date}
          onChange={handleChange}
        />
        <button type="submit">Update Task</button>
      </form>
    </main>
  );
}
