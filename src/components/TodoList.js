import useTodosContext from "../hooks/useTodosContext";
import TodoDetails from "./TodoDetails";
import { Fragment, useEffect, useState } from "react";

export default function TodoList() {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { todos } = useTodosContext();

  function handleSearchTodos(term) {
    setSearchTerm(term);
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  }

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className="d-flex flex-column gap-2 mb-2 w-100">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="search todos..."
        value={searchTerm}
        onChange={(e) => handleSearchTodos(e.target.value)}
      />
      {todos &&
        filteredTodos.map((todo) => (
          <Fragment key={todo.id}>
            <TodoDetails todo={todo} />
          </Fragment>
        ))}
    </div>
  );
}
