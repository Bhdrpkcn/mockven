import React from "react";
import TestPage1 from "../pages/TestPage1";
import TestMainPage1 from "../pages/TestMainPage1";
import MainFlow from "../pages/mainFlow/MainFlow";

export const routes = [
  {
    path: "/",
    element: <MainFlow />,
    exact: true,
  },
  {
    path: "/:testpage1",
    element: <TestPage1 />,
  },
];
