import React, { dangerouslySetInnerHTML } from "react";
import { render } from "react-dom";
import "./style.css";

const ClickCounter = () => {
  const text = "<p>ssss</p>";
  // const userData = {
  //   dangerouslySetInnerHTML: { __html: "<p>ssss</p>" }
  // };

  return <div>{text}</div>;
  // return <div dangerouslySetInnerHTML={{ __html: text }} />;
  // return <div {...userData} />;
};

render(<ClickCounter />, document.getElementById("root"));
