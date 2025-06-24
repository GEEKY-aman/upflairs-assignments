import React from "react";
import friends from "./data/friends.js"; 
import FriendCard from "./components/FriendCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Friends</h1>
      <div className="card-container">
        {friends.map((friend, index) => (
          <FriendCard key={index} {...friend} />
        ))}
      </div>
    </div>
  );
}

export default App;
