import { useState } from "react";
import useTodos from "../hooks/useTodos";
import useTodosContext from "../hooks/useTodosContext";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const { todos } = useTodosContext();
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    if (title) {
      addTodo(title);
    }

    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      // className="w-100 d-flex gap-3 mt-3 border rounded p-2"
      className={
        todos.length >= 1
          ? "w-100 d-flex gap-3 mt-3 border rounded p-2"
          : "w-25 d-flex gap-3 mt-3 border rounded p-2 mx-auto"
      }
    >
      <input
        className="form-control"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="eg. go shopping..."
        value={title}
      />
      <button className="btn btn-outline-primary">Add</button>
    </form>
  );
}
