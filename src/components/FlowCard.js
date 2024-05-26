import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

import "./flowCard.scss";

export const FlowCard = ({ item }) => {
  return (
    <>
      {item.cards && (
        <div className="cards-list">
          {item.cards.map((card) => (
            <div className={`cards-list-card ${item.cardType}`} key={card.id}>
              {card.icon && (
                <>
                  <img className="card-icon" src={card.icon} alt={card.title} />
                </>
              )}

              {card.backgroundImage && (
                <img
                  className="card-background-image"
                  src={card.backgroundImage}
                  alt={card.title}
                />
              )}

              {card.image && (
                <div className="card-image-container">
                  <img
                    className="card-image"
                    src={card.image}
                    alt={card.title}
                  />
                </div>
              )}

              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.text}</div>

              {item.cardButton && (
                <a className="card-button" href={card.link}>
                  <HiArrowLongRight />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
