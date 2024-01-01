import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import SEO from "../components/SEO";

export default function Todos() {
  return (
    <div className="px-5">
      <SEO title="Todos" />

      <h2 className="mb-4">Todos</h2>
      <TodoList />
      <TodoForm />
    </div>
  );
}
