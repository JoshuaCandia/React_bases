import { Navigate, Route, Routes } from "react-router-dom";
import { NavRoute } from "../../components";
import { routesLayoutDash } from "./routes";

const Lazylayout = () => {
  return (
    <div>
      <h1>Lazylayout Page</h1>
      <ul>
        {routesLayoutDash.map((route) => (
          <NavRoute key={route.path} routeName={route.name} url={route.to} />
        ))}
      </ul>
      <Routes>
        {routesLayoutDash.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}
        <Route
          path="*"
          element={<Navigate replace to={routesLayoutDash[0].to} />}
        />
      </Routes>
    </div>
  );
};

export default Lazylayout;
