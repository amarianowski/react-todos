import useTodos from "../hooks/useTodos";

export default function TodoDetails({ todo }) {
  const { deleteTodo } = useTodos();

  return (
    <div className=" border p-2 rounded d-flex align-items-center">
      <span>{todo.title}</span>
      <div className="ms-auto d-flex align-items-center">
        <span className="vr me-3"></span>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
}
