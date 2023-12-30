import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:3001/todos";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  function getTodos() {
    axios.get(url).then((res) => setTodos(res.data));
  }

  function addTodo(title) {
    const id = Math.floor(Math.random() * 1000);
    axios.post(url, { id, title }).then(() => getTodos());
  }

  function deleteTodo(id) {
    axios.delete(`${url}/${id}`).then(() => getTodos());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      return;
    }

    addTodo(title);
    setTitle("");
  }

  useEffect(() => {
    console.log("useEffect");
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={() => deleteTodo(todo.id)}>remove</button>
            </div>
          ))}
        {!todos && <div>No todos here just yet...</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
