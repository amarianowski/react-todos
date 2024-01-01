import screenshotLight from "../assets/screenshot-light.png";
import screenshotDark from "../assets/screenshot-dark.png";
import useThemeContext from "../hooks/useThemeContext";

export default function About() {
  const { theme } = useThemeContext();
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">React Todos </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            My todos app built with React (create-react-app), bootstrap 5,
            react-context, react-router, bootstrap icons, axios and undraw
            images. You can check my portfolio or see my Github repositories.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3 d-flex justify-content-between align-items-center gap-2"
            >
              <i class="bi bi-github"></i> check my Github repositories
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4 me-sm-3 d-flex justify-content-between align-items-center gap-2"
            >
              <i class="bi bi-file-earmark-code"></i> Check my portfolio{" "}
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={theme === "light" ? screenshotLight : screenshotDark}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
