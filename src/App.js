import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import useThemeContext from "./hooks/useThemeContext";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./AppRouter";

export default function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="app" style={{ overflow: "hidden" }}>
      <HelmetProvider>
        <Router>
          <Header />
          <div
            className="d-flex"
            style={{ minHeight: "92vh", maxHeight: "92vh", height: "100%" }}
          >
            <Sidenav />
            <main
              className="p-4 w-100 d-flex flex-column"
              style={{ minHeight: "93vh", overflowY: "scroll" }}
            >
              <AppRouter />
              <Footer />
            </main>
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
}
