import React, { useState } from "react";
import "./flowSlider.css";

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
        <div className="slider-container">
          <button onClick={handlePrevClick} className="arrow left-arrow">
            &lt;
          </button>
          <div className="quote-card-container">
            {item.map((quote, index) => (
              <div
                key={quote.id}
                className={`quote-card ${
                  index === currentIndex ? "active" : "inactive"
                }`}
              >
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-commenter">{quote.commenter}</p>
                <p className="quote-title">
                  {quote.commenterTitle}, {quote.company}
                </p>
              </div>
            ))}
          </div>
          <button onClick={handleNextClick} className="arrow right-arrow">
            &gt;
          </button>
          <div className="avatar-container">
            {item.map((quote, index) => (
              <div
                key={quote.id}
                className={`avatar ${
                  index === currentIndex ? "active-avatar" : "inactive-avatar"
                }`}
                onClick={() => handleAvatarClick(index)}
              >
                {quote.commenter[0]}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
