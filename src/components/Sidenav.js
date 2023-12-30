export default function Sidenav() {
  return (
    <aside
      className="sidenav border-end p-3 d-flex flex-column justify-content-between"
      style={{ width: "18vw" }}
    >
      <nav className="mt-2">
        <h6 className="text-uppercase text-secondary">My Lists</h6>
        <ul className="list-unstyled m-0 p-0" style={{ margin: 0, padding: 0 }}>
          <li className="nav flex-column nav-item">
            <a
              href="/"
              className="nav-link d-flex align-items-center gap-2 active"
            >
              <i className="bi bi-house"></i>
              <span>Todos</span>
            </a>
          </li>
          <li className="nav flex-column nav-item">
            <a
              href="/"
              className="nav-link d-flex align-items-center gap-2 active"
            >
              <i className="bi bi-calendar2-day"></i>
              <span>Today</span>
            </a>
          </li>
          <li className="nav flex-column nav-item">
            <a
              href="/"
              className="nav-link d-flex align-items-center gap-2 active"
            >
              <i className="bi bi-code-slash"></i>
              <span>Programming</span>
            </a>
          </li>
          <li className="nav flex-column nav-item">
            <a
              href="/"
              className="nav-link d-flex align-items-center gap-2 active"
            >
              <i className="bi bi-suitcase-lg"></i>
              <span>Work</span>
            </a>
          </li>
          <li className="nav flex-column nav-item">
            <a
              href="/"
              className="nav-link d-flex align-items-center gap-2 active"
            >
              <i className="bi bi-basket"></i>
              <span>Shopping</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-outline-success w-75 d-flex justify-content-center gap-2">
          <i className="bi bi-folder-plus"></i>
          <span>add new list</span>
        </button>
      </div>
    </aside>
  );
}
