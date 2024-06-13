import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routesConfig";
import "./style.css";

const Body = () => {
  return (
    <div className="body">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default Body;
