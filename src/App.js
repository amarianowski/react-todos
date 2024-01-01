import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import useThemeContext from "./hooks/useThemeContext";
import Todos from "./pages/Todos";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const appRoutes = [
  { path: "/", element: <Todos /> },
  { path: "/about", element: <About /> },
  { path: "/features", element: <Features /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/home", element: <Home /> },
  { path: "/todos", element: <Todos /> },
];

export default function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="app" style={{ overflow: "hidden" }}>
      <Router>
        <Header />
        <div
          className="d-flex"
          style={{ minHeight: "92vh", maxHeight: "92vh", height: "100%" }}
        >
          <Sidenav />
          <main
            className="p-4 w-100 d-flex flex-column"
            style={{
              minHeight: "93vh",
              maxHeight: "93vh",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <Routes>
              {appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </div>
  );
}
