import React from "react";
import "./FriendCard.css";

function FriendCard({ name, image, hobby, quote, contact }) {
  return (
    <div className="friend-card">
      <img src={image} alt={name} className="friend-image" />
      <h2>{name}</h2>
      <p><strong>Hobby:</strong> {hobby}</p>
      <p><em>"{quote}"</em></p>
      <p><strong>Contact:</strong> {contact}</p>
    </div>
  );
}

export default FriendCard;
