import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import SEO from "../components/SEO";
import useTodos from "../hooks/useTodos";
import Spinner from "../components/Spinner";

export default function Todos() {
  const { loading, error } = useTodos();

  return (
    <div className="px-5 mb-5">
      <SEO title="Todos" />

      {loading && <Spinner />}
      {!loading && !error && (
        <>
          <h2 className="mb-4">Todos</h2>
          <TodoList />
          <TodoForm />
        </>
      )}
    </div>
  );
}
