import React from "react";
import MainFlow from "../pages/mainFlow/MainFlow";
import OuterFlow from "../pages/outerFlow/OuterFlow";

export const routes = [
  {
    path: "/",
    element: <MainFlow />,
    exact: true,
  },
  {
    path: "/outerflow",
    element: <OuterFlow />,
  },
  {
    path: "*",
    element: <OuterFlow />,
  },
];
