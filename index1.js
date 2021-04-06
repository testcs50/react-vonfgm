import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    return [
      React.createElement(
        "button",
        {
          key: "1",
          onClick: this.handleClick
        },
        "Update counter"
      ),
      React.createElement(
        "span",
        {
          key: "2"
        },
        this.state.count
      )
    ];
  }
}

render(<ClickCounter />, document.getElementById("root"));
