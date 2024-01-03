import { NavLink } from "react-router-dom";
import { navRoutes as routes } from "../utils/navRoutes";

export default function Nav() {
  return (
    <nav>
      <ul className="nav nav-pills">
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path} className="nav-link">
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
