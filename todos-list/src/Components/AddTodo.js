import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent adding empty todos

    onAdd(title.trim());
    setTitle(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex" }}>
      <input
        type="text"
        placeholder="Enter a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          flexGrow: 1,
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
