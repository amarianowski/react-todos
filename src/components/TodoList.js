import TodoDetails from "./TodoDetails";
import useTodos from "../hooks/useTodos";
import { Fragment } from "react";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <div className="d-flex flex-column gap-2 mb-2 w-100">
      {todos &&
        todos.map((todo) => (
          <Fragment key={todo.id}>
            <TodoDetails todo={todo} />
          </Fragment>
        ))}
    </div>
  );
}
