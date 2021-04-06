import React from "react";
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
      {
        $$typeof: Symbol.for("react.element"),
        type: "button",
        key: "1",
        ref: null,
        props: {
          children: "Update counter",
          onClick: this.handleClick
        }
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: "span",
        key: "2",
        ref: null,
        props: {
          children: 0
        }
      }
    ];
  }
}

render(
  {
    $$typeof: Symbol.for("react.element"),
    key: null,
    props: {},
    ref: null,
    type: ClickCounter
  },
  document.getElementById("root")
);
