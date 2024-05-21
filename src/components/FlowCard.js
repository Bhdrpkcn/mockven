import React from "react";
import "./flowCard.css";

export const FlowCard = ({ item }) => {
  return (
    <>
      {item.cards && (
        <div className="container-cardList">
          {item.cards.map((card) => (
            <div className="cardList-card" key={card.cardId}>
              {card.cardIconImg && (
                <img
                  className="cardList-cardIconImg"
                  src={card.cardIconImg}
                  alt={card.cardTitle}
                />
              )}
              {card.cardIconFiltered && (
                <img
                  className="cardList-cardIconImg filtered"
                  src={card.cardIconFiltered}
                  alt={card.cardTitle}
                />
              )}
              <div className="cardList-title">{card.cardTitle}</div>
              <div className="cardList-text">{card.cardText}</div>
              {card.cardButton && <a href={card.cardLink}> -arrowIcon- </a>}
            </div>
          ))}
        </div>
      )}

      {item.clientCards && (
        <div className="client-container">
          <div className="client-card-link">all clients {`>>`}</div>
          <div className="client-card-list">
            {item.clientCards.map((clientCard) => (
              <div className="client-card" key={clientCard.clientId}>
                {clientCard.clientImg && (
                  <img
                    className="client-cardIconImg"
                    src={clientCard.clientImg}
                    alt={clientCard.clientName}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.industryCards && (
        <div className="industry-container">
          {item.industryCards.map((industryCard) => (
            <div className="industry-card-list" key={industryCard.industryId}>
              <div className="industry-card">
                {industryCard.industryImg && (
                  <img
                    className="industry-cardIconImg"
                    src={industryCard.industryImg}
                    alt={industryCard.industryName}
                  />
                )}
              </div>
              <div className="industry-card-title">
                {industryCard.industryName}
              </div>
            </div>
          ))}
        </div>
      )}

      {item.successCards && (
        <div className="success-container">
          {item.successCards.map((successCard) => (
            <div className="success-card-list" key={successCard.successId}>
              <div className="success-card">
                {successCard.successImg && (
                  <img
                    className="success-cardIconImg"
                    src={successCard.successImg}
                    alt={successCard.successName}
                  />
                )}
              </div>
              <div className="success-card-title">
                {successCard.successName}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
