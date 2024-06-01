import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlowContainer from "./FlowContainer";
import FlowAnimation from "./FlowAnimation";
import fetchData from "../../store/api/fetchApi";
import ScrollTracker from "../../utils/ScrollTracker";

const FlowList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderFlowList = () => {
    return data.map((dataFlow, index) => {
      const nextDataFlow = data[index + 1];

      return (
        <React.Fragment key={dataFlow.sectionId}>
          <FlowContainer item={dataFlow} />
          {dataFlow.sectionName === "DATA_PRODUCT" &&
            nextDataFlow?.sectionName === "DATA_TESTIMONIAL" && (
              <FlowAnimation />
            )}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <ScrollTracker />
      {renderFlowList()}
    </div>
  );
};

export default FlowList;
