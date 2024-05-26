import React from "react";
import "./flowContainer.scss";
import { FlowHeader } from "../../components/FlowHeader";
import { FlowCard } from "../../components/FlowCard";

const FlowContainer = ({ item }) => {
  const flowContainerClass = item.sectionImage
    ? "flow-container has-image"
    : "flow-container";

  const flowContainerStyle = {
    backgroundImage: `url(${item.sectionImage})`,
  };

  return (
    <div
      id={item.sectionId}
      className={flowContainerClass}
      style={flowContainerStyle}
      key={item.sectionId}
    >
      <FlowHeader item={item} />
      <FlowCard item={item} />
    </div>
  );
};

export default FlowContainer;
