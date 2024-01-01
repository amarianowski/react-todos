import useThemeContext from "../hooks/useThemeContext";

export default function ThemeSwitch() {
  const { actions, theme } = useThemeContext();

  return (
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
  );
}
