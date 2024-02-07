import React from "react";

const Scrollable = (props) => {
  return (
    <div
      style={{ overflowY: "scroll", border: "5px solid red", height: "600px" }}
    >
      {props.children}
    </div>
  );
};

export default Scrollable;
