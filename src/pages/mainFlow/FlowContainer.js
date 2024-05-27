import React from "react";
import "./flowContainer.scss";
import { FlowHeader } from "../../components/FlowHeader";
import { FlowCard } from "../../components/FlowCard";

const FlowContainer = ({ item }) => {
  const hasImage = Boolean(item.sectionImage);
  const flowContainerStyle = hasImage
    ? { backgroundImage: `url(${item.sectionImage})` }
    : {};

  return (
    <div
      id={item.sectionId}
      className={`flow-container ${hasImage ? "has-image" : ""}`}
      style={flowContainerStyle}
    >
      <FlowHeader item={item} />
      <FlowCard item={item} />
    </div>
  );
};

export default FlowContainer;
