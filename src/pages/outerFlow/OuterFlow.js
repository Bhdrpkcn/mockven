import React from "react";
import vehicle from "../../assets/vehicle.png";
import vehicleHarley from "../../assets/vehicleHarley.png";
import tree from "../../assets/tree.png";
import mobil_Background from "../../assets/mobil_Background.jpg";

import "./style.scss";

const OuterFlow = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="outer-message">
          <h1>Journey Continues</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            illum, veniam officia accusamus temporibus ratione quas unde ipsam
            facere minima.
          </p>
          <button className="outer-message-button">Explore</button>
        </div>
        <div className="graphic">
          <div className="clip-svg">
            <div className="night">
              <div
                className="surface moveRight"
                style={{ backgroundImage: `url(${tree})` }}
              ></div>
              <div className="car suspension">
                <img src={vehicleHarley} alt="" />
              </div>
            </div>
          </div>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 809.39 555.27"
          >
            <clipPath id="myClip">
              <path
                className="cls-1"
                d="M669,470"
                transform="translate(-557.61)"
              />
              <path
                className="cls-2"
                d="M700,0S549,29,558,233c0,0,2.7,95.93,52.24,184.12C649.64,487.28,720.66,534,810.53,543.66c104.88,12.6,352,60.63,519.47-135.66,0,0,20.49-55.47,76.54-111,43.34-25.61,70.46-71.68,70.46-122V0Z"
                transform="translate(-557.61)"
              />
            </clipPath>
          </svg>
        </div>
      </div>
      <div className="mobile-view">
        <img src={mobil_Background} alt="" />
      </div>
    </div>
  );
};

export default OuterFlow;
