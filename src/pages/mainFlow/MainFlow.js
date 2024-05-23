import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import "./style.css";
import FlowList from "./FlowList";

const MainFlow = () => {
  return (
    <div className="main-flow-container">
      <WelcomeBanner />
      <FlowList />
    </div>
  );
};

export default MainFlow;
