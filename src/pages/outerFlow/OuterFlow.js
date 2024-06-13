import React from "react";

import "./style.scss";
import { JourneyAnimation } from "./JourneyAnimation";

const message_text =
  "Mockven is a clone of the software consulting and development company 'Mobven'. It is built to showcase my front-end web development skills. The project includes features such as responsive navigation, dynamic content rendering, theme management, and custom animations with algorithms to manage them effectively. While replicating the webpage, I concentrated on the main page to avoid redundancy and highlight my skill set.";
const OuterFlow = () => {
  return (
    <div className="outerFlow-container">
      <div className="journey-animation-container">
        <JourneyAnimation />
      </div>

      <div className="container">
        <div className="outer-message">
          <div className="outer-message-title">Journey Continues</div>
          <div className="outer-message-text">
            {message_text}

            <button
              className="outer-message-button"
              onClick={() => (window.location.href = "/")}
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterFlow;
