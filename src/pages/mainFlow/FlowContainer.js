import React from "react";
import "./flowContainer.css";
import { FlowHeader } from "../../components/FlowHeader";
import { FlowSlider } from "../../components/FlowSlider";
import { FlowCard } from "../../components/FlowCard";

const FlowContainer = ({ item }) => {
  return (
    <div className="flow-container" key={item.sectionId}>
      <FlowHeader item={item} />
      <FlowSlider item={item.quotes} />
      <FlowCard item={item} />

      {item.sectionImage && (
        <div className="container-sectionImage">
          <img src={item.sectionImage} alt={item.sectionTitle} />
        </div>
      )}
    </div>
  );
};

export default FlowContainer;
