import { NavLink } from "react-router-dom";

const NavRoute = ({ routeName, url }: { routeName: string; url: string }) => {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {routeName}
      </NavLink>
    </li>
  );
};

export default NavRoute;
