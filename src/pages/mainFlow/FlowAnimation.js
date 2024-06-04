import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { HiArrowLongDown } from "react-icons/hi2";
import "./flowAnimation.scss";

const FlowAnimation = () => {
  const inputRef = useRef(null);

  // !IMPORTANT! : getBoundingClientRect can measure border and padding, not MARGIN !
  // !IMPORTANT!*2 : getComputedStyle(parseFloat(computedStyle.marginTop)) only compute within the clasname selected
  // const computedStyle = getComputedStyle(flowPage);
  // const marginTop = parseFloat(computedStyle.marginTop);

  useEffect(() => {
    const handleMeasure = () => {
      if (inputRef.current) {
        const flowPage = inputRef.current;
        const rect = flowPage.getBoundingClientRect();

        console.log("flowpage position", rect);
      }
    };

    handleMeasure();

    window.addEventListener("resize", handleMeasure);

    return () => window.removeEventListener("resize", handleMeasure);
  }, []);

  const scrollPercentage = useSelector(
    (state) => state.animation.scrollPercentage
  );
  const circleSize = (-40 + scrollPercentage) * 10;

  return (
    <div className="flow-page" ref={inputRef} id="flow-page">
      <div className="ter">
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
