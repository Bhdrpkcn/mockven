import React from "react";
import "./flowHeader.scss";
import { FlowSlider } from "./FlowSlider";

export const FlowHeader = ({ item }) => {
  const headerClass = item.sectionImage
    ? "flow-header-container white-text"
    : "flow-header-container";

  return (
    <div className={headerClass}>
      <div className="flow-header-title">{item.sectionTitle}</div>
      <div className="flow-header-text">{item.sectionMainText}</div>

      {item.quotes && <FlowSlider item={item.quotes} />}

      {item.sectionSubTextData && (
        <div className="container-subText">
          {item.sectionSubTextData.map((subTextItem) => (
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
