import { useLocation } from "react-router-dom";

const lists = [
  { name: "Todos", icon: "bi bi-house" },
  { name: "Today", icon: "bi bi-calendar2-day" },
  { name: "Programming", icon: "bi bi-code-slash" },
  { name: "Work", icon: "bi bi-suitcase-lg" },
  { name: "Shopping", icon: "bi bi-basket" },
];

export default function Sidenav() {
  const location = useLocation();

  return (
    <>
      {(location.pathname === "/" || location.pathname === "/todos") && (
        <aside
          className="sidenav border-end p-3 d-flex flex-column justify-content-between"
          style={{ width: "18vw" }}
        >
          <nav className="mt-2">
            <h6 className="text-uppercase text-secondary">My Lists</h6>
            <ul
              className="list-unstyled m-0 p-0"
              style={{ margin: 0, padding: 0 }}
            >
              {lists.map((list, index) => (
                <li className="nav flex-column nav-item" key={index}>
                  <a
                    href="/"
                    className="nav-link d-flex align-items-center gap-2 active"
                  >
                    <i className={list.icon}></i>
                    <span>{list.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-outline-success w-75 d-flex justify-content-center gap-2">
              <i className="bi bi-folder-plus"></i>
              <span>add new list</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
