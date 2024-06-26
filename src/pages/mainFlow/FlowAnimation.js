import React from "react";
import { useSelector } from "react-redux";
import { HiArrowLongDown } from "react-icons/hi2";
import "./flowAnimation.scss";
import ScrollTracker from "../../utils/ScrollTracker";

const FlowAnimation = () => {
  const scrollPercentage = useSelector(
    (state) => state.animation.scrollPercentage
  );
  const circleSize = (-40 + scrollPercentage) * 10;

  return (
    <div className="flow-page" id="flow-page">
      <ScrollTracker />

      <div className="animation-container-position">
        <div className="animation-container">
          <HiArrowLongDown />
          <div
            className="animation-red-circle"
            style={{ "--circle-size": `${circleSize}vw` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowAnimation;
