import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import SEO from "../components/SEO";
import useTodos from "../hooks/useTodos";
import Spinner from "../components/Spinner";

export default function Todos() {
  const { loading, error } = useTodos();

  return (
    <div className="px-5">
      <SEO title="Todos" />

      <h2 className="mb-4">Todos</h2>
      {loading && <Spinner />}
      {!loading && !error && (
        <>
          <TodoList />
          <TodoForm />
        </>
      )}
    </div>
  );
}
