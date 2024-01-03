import useTodosContext from "../hooks/useTodosContext";
import TodoDetails from "./TodoDetails";
import { Fragment, useEffect, useState } from "react";
import undrawStars from "../assets/undraw/undraw-stars.svg";

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
    const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

    setFilteredTodos(sortedTodos);
  }, [todos]);

  return (
    <div className="d-flex flex-column gap-2 mb-2 w-100">
      {todos.length >= 1 && (
        <>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="search todos..."
            value={searchTerm}
            onChange={(e) => handleSearchTodos(e.target.value)}
          />

          {filteredTodos.map((todo) => (
            <Fragment key={todo.id}>
              <TodoDetails todo={todo} />
            </Fragment>
          ))}
        </>
      )}

      {todos.length <= 0 && (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>You don't have any todos</h2>
          <img src={undrawStars} className=" img-fluid w-25 mb-4 mt-5" />
          <p>Add some todos and bring your ideas to life!</p>
        </div>
      )}
    </div>
  );
}
