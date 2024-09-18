import { NavRoute } from "../../components";
import { routesLayouDash } from "./routes";

const Lazylayout = () => {
  return (
    <div>
      <h1>Lazylayout Page</h1>
      <ul>
        {routesLayouDash.map((route) => (
          <NavRoute key={route.path} routeName={route.name} url={route.to} />
        ))}
      </ul>
    </div>
  );
};

export default Lazylayout;
