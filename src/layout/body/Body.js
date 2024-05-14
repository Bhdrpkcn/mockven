import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routesConfig";
import "./style.css";

const Body = () => {
  return (
    <div className="body">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </div>
  );
};

export default Body;
