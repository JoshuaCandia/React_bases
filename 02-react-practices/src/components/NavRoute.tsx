import { NavLink } from "react-router-dom";

interface NavRouteProps {
  routeName: string;
  url: string;
}

const NavRoute: React.FC<NavRouteProps> = ({ routeName, url }) => {
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
