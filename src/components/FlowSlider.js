import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./flowSlider.scss";

export const FlowSlider = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === item.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAvatarClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {item && (
        <div className="slider">
          <div className="slider-container">
            <button onClick={handlePrevClick} className="arrow left-arrow">
              <FaAngleLeft />
            </button>

            <div className="quote-card-container">
              {item.map((quote, index) => (
                <div
                  key={quote.id}
                  className={`quote-card ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                >
                  <div className="quote-text">"{quote.text}"</div>
                  <div>
                    <div className="quote-commenter">{quote.commenter}</div>
                    <div className="quote-title">
                      {quote.commenterTitle}, {quote.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleNextClick} className="arrow right-arrow">
              <FaAngleRight />
            </button>
          </div>

          <div className="avatar-container">
            {item.map((quote, index) => (
              <div
                key={quote.id}
                className={`avatar ${
                  index === currentIndex ? "active-avatar" : "inactive-avatar"
                }`}
                onClick={() => handleAvatarClick(index)}
              >
                <IoPerson />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
