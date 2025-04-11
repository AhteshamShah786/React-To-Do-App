import React from "react";

const Todo_item = ({ todo, onDelete }) => {
  return (
    <div
      style={{
        margin: "10px 0",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{todo.title}</span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo_item;
