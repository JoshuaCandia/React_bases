import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { About, Home, Users } from "../components/screens";
import logoReact from "../logo.svg";

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

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logoReact} alt="React logo" />
          <ul>
            <NavRoute routeName="Home" url="/home" />
            <NavRoute routeName="About" url="/about" />
            <NavRoute routeName="Users" url="/users" />
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
