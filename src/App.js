import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import useThemeContext from "./hooks/useThemeContext";
import Todos from "./pages/Todos";
import { useEffect } from "react";

export default function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header />
      <div className="d-flex" style={{ minHeight: "93vh", height: "100%" }}>
        <Sidenav />
        <main className="p-4 w-100">
          <Todos />
        </main>
      </div>
    </div>
  );
}
