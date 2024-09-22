import { RouteType } from "../../routes/types";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
export const routesLayoutDash: RouteType[] = [
  {
    path: "lazy1",
    to: "lazy1",
    Component: LazyPage1,
    name: "LazyLayout - Page 1",
  },
  {
    path: "lazy2",
    to: "lazy2",
    Component: LazyPage2,
    name: "LazyLayout - Page 2",
  },
  {
    path: "lazy3",
    to: "lazy3",
    Component: LazyPage3,
    name: "LazyLayout - Page 3",
  },
];
