import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import ViewTasks from "./pages/ViewTasks";
import EditTask from "./pages/EditTask";

export default function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/tasks" style={linkStyle}>View Tasks</NavLink>
        <NavLink to="/addtask" style={linkStyle}>Add Task</NavLink>
        <NavLink to="/edit" style={linkStyle}>Edit Task</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<ViewTasks />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/edit" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

const navStyle = {
  display: "flex",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#f0f0f0",
};

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "blue" : "black",
  fontWeight: isActive ? "bold" : "normal",
});
