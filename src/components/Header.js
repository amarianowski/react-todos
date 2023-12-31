import logo from "../assets/logo.svg";
import useThemeContext from "../hooks/useThemeContext";

export default function Header() {
  const { actions, theme } = useThemeContext();

  return (
    <header
      className="border-bottom px-4 py-1 d-flex justify-content-between align-items-center"
      style={{ maxHeight: "7vh" }}
    >
      <h1>
        <img src={logo} alt="" style={{ width: "2vw" }} />
      </h1>

      <div className="d-flex">
        <div
          className="form-check form-switch me-3"
          onClick={() => actions.toggleTheme()}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />

          {theme === "dark" && <i className="bi bi-moon-stars"></i>}
          {theme === "light" && <i className="bi bi-brightness-high"></i>}
        </div>
        <span>Adam Marianowski</span>
      </div>
    </header>
  );
}
