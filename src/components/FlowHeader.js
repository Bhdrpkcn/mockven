import React from "react";
import "./flowHeader.css";

export const FlowHeader = ({ item }) => {
  //ADD if there is a SUBTEXT, title and text also be white rule !
  return (
    <div className="flow-header-container">
      <div className="flow-header-title">{item.sectionTitle}</div>
      <div className="flow-header-text">{item.sectionMainText}</div>
      {item.sectionSubText && (
        <div className="container-subText">
          {item.sectionSubText.map((subTextItem) => (
            <div className="subText-content" key={subTextItem.subTextId}>
              <div className="subText-content-data">
                {subTextItem.subTextData}
              </div>
              <div className="subText-content-title">
                {subTextItem.subTextTitle}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
