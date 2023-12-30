import { useState } from "react";
import useTodos from "../hooks/useTodos";

export default function TodoForm() {
  const [title, setTitle] = useState("");
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
      className="w-100 d-flex gap-3 mt-3 border rounded p-2"
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
