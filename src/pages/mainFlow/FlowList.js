import React from "react";
import {
  CLIENT_DATAFLOW,
  CONTACT_DATAFLOW,
  EXPERIENCE_DATAFLOW,
  INDUSTRIES_DATAFLOW,
  PRODUCT_DATAFLOW,
  SERVICE_DATAFLOW,
  SUCCESS_DATAFLOW,
  TESTIMONIAL_DATAFLOW,
} from "../../constants/mainFlowData";

import FlowContainer from "./FlowContainer";
import FlowAnimation from "./FlowAnimation";

const FlowList = () => {
  const dataFlows = [
    SERVICE_DATAFLOW,
    EXPERIENCE_DATAFLOW,
    PRODUCT_DATAFLOW,
    TESTIMONIAL_DATAFLOW,
    CLIENT_DATAFLOW,
    INDUSTRIES_DATAFLOW,
    SUCCESS_DATAFLOW,
    // CONTACT_DATAFLOW,
  ];
  return (
    <div>
      {dataFlows.map((dataFlow, index) => (
        <React.Fragment key={dataFlow.sectionId}>
          <FlowContainer item={dataFlow} />
          {dataFlow === PRODUCT_DATAFLOW && <FlowAnimation />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlowList;
