import screenshotLight from "../assets/screenshot-light.png";
import screenshotDark from "../assets/screenshot-dark.png";
import useThemeContext from "../hooks/useThemeContext";
import SEO from "../components/SEO";

export default function Features() {
  const { theme } = useThemeContext();
  return (
    <div class="container px-4 py-5" id="featured-3">
      <SEO title={"Features"} />

      <h2 class="pb-2 border-bottom">Explore React-Todos features</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <i class="bi bi-send-exclamation-fill p-3"></i>
          </div>
          <h3 class="fs-2 text-body-emphasis">Stay organised</h3>
          <p>
            We provide todo lists to help you organise your tasks. You can add
            new todos, mark them as completed or delete them. There are also
            some more complex features available.
          </p>
          <a href="#" class="icon-link">
            Check pricing now{" "}
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <i class="bi bi-people-fill p-3"></i>{" "}
          </div>
          <h3 class="fs-2 text-body-emphasis">Work with teams</h3>
          <p>
            Share your todos with others and create real project management. You
            can assign todos to other users and track their progress.
          </p>
          <a href="#" class="icon-link">
            Create your first todo
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <i class="bi bi-gear-wide-connected p-3"></i>
          </div>
          <h3 class="fs-2 text-body-emphasis">Make it the way you like it</h3>
          <p>
            You can customize your todos by adding tags, due dates, descriptions
            and more. You can also choose from a variety of themes and colors.
          </p>
          <a href="#" class="icon-link">
            Learn more
          </a>
        </div>
      </div>

      <div class="container">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={theme === "light" ? screenshotLight : screenshotDark}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              We will help you stay organised and complete your tasks
            </h1>
            <p class="lead">
              Stay organised and complete your tasks with our todo lists. You
              can add new todos, mark them as completed or delete them. There
              are also some more complex features available.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                About
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
