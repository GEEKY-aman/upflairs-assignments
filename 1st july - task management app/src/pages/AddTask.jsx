import React, { useState } from "react";

export default function AddTask() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      alert(`✅ Task Added: ${task}`);
      setTask("");
    } else {
      alert("⚠️ Please enter a task before submitting.");
    }
  };

  return (
    <div style={containerStyle}>
      <h2>➕ Add a New Task</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Task</button>
      </form>
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  textAlign: "center",
};

const formStyle = {
  marginTop: "20px",
};

const inputStyle = {
  padding: "10px",
  width: "250px",
  marginRight: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
