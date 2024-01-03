import useTodos from "../hooks/useTodos";
import { useState } from "react";

export default function TodoDetails({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const { deleteTodo, updateTodo, toggleTodo } = useTodos();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      updateTodo({ ...todo, title });
      handleToggleEdit();
    }
  }

  function handleToggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <div
      className=" border p-2 rounded d-flex align-items-center"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <button
        className={
          todo.completed
            ? "btn btn-success me-3"
            : "btn btn-outline-success me-3"
        }
        onClick={() => toggleTodo(todo.id)}
      >
        <i class="bi bi-check-lg"></i>
      </button>
      {!isEditing && <span onClick={handleToggleEdit}>{todo.title}</span>}
      {isEditing && (
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}

      <div className="ms-auto d-flex align-items-center">
        <span className="vr me-3"></span>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
}
