import React, { useState } from "react";
import TodoItem from "./Todo_item";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build Todo App" },
  ]);

  // Handler to delete a todo by id
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handler to add a new todo item
  const handleAdd = (title) => {
    // Create a new todo item; a better approach for ID generation may be needed for larger apps
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos</h2>
      {/* Render AddTodo component with the onAdd prop */}
      <AddTodo onAdd={handleAdd} />
      {todos.length === 0 ? (
        <p>No tasks for now!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;
