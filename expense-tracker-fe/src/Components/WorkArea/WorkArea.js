import React from "react";
import "./WorkArea.css";

const WorkArea = (props) => {
  return <div className="workArea">{props.children}</div>;
};

export default WorkArea;
