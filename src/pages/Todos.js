import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default function Todos() {
  return (
    <div className="px-5">
      <h2 className="mb-4">Todos</h2>
      <TodoList />
      <TodoForm />
    </div>
  );
}
