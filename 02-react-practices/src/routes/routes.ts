import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";
import { RouteType } from "./types";

const LazyLayoutComponent = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayoutComponent" */ "../01-lazyload/layout/Lazylayout"
    )
);

export const routes: RouteType[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayoutComponent,
    name: "LazyLayout - Dash",
  },
  {
    path: "/no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
