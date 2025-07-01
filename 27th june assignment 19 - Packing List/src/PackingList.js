import React, { useState } from "react";

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Toothbrush", isPacked: false },
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() === "") return;
    const newItemObj = {
      id: Date.now(),
      name: newItem,
      isPacked: false,
    };
    setItems([...items, newItemObj]);
    setNewItem("");
  };

  const togglePacked = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="packing-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <span
              className={`item-text ${item.isPacked ? "packed" : ""}`}
              onClick={() => togglePacked(item.id)}
            >
              {item.isPacked ? "✔️" : "☐"} {item.name}
            </span>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
