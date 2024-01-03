import Todos from "./pages/Todos";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const appRoutes = [
  { path: "/", element: <Todos /> },
  { path: "/about", element: <About /> },
  { path: "/features", element: <Features /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/home", element: <Home /> },
  { path: "/todos", element: <Todos /> },
];

export default function AppRouter() {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
