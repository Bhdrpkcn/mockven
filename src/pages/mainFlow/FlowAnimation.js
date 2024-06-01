import React from "react";
import { useSelector } from "react-redux";
import { HiArrowLongDown } from "react-icons/hi2";
import "./flowAnimation.scss";

const FlowAnimation = () => {
  const scrollPercentage = useSelector(
    (state) => state.animation.scrollPercentage
  );
  const circleSize = (-40 + scrollPercentage) * 10;

  console.log("circleSize:", circleSize);
  return (
    <div className="flow-page">
      <div className="animation-container">
        <HiArrowLongDown />
        <div
          className="animation-red-circle"
          style={{ "--circle-size": `${circleSize}vw` }}
        />
      </div>
    </div>
  );
};

export default FlowAnimation;
