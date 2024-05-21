import React from "react";

const FlowAnimation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        margin: "3rem 0rem",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          borderRadius: "100px",
          alignContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <p>im red circle </p>
        <p>(i'll be bigger later on)</p>
      </div>
    </div>
  );
};

export default FlowAnimation;
