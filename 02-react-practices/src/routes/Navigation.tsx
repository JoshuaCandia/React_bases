import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NavRoute } from "../components";
import logoReact from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logoReact} alt="React logo" />
          <ul>
            <NavRoute routeName="Lazy 1" url="/lazy1" />
            <NavRoute routeName="Lazy 2" url="/lazy2" />
            <NavRoute routeName="Lazy 3" url="/lazy3" />
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
