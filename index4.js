import React from "react";

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
      <button key="1" onClick={this.handleClick}>
        Update counter
      </button>,
      <span key="2">{this.state.count}</span>
    ];
  }
}

class Node {
  constructor(instance) {
    this.instance = instance;
    this.child = null;
    this.sibling = null;
    this.return = null;
  }
}

function link(parent, elements) {
  if (elements === null) elements = [];

  parent.child = elements.reduceRight((previous, current) => {
    const node = new Node(current);
    node.return = parent;
    node.sibling = previous;
    return node;
  }, null);

  return parent.child;
}

function doWork(node) {
  console.log(node.instance);
  let children = null;
  if (node.instance.render) {
    children = node.instance.render();
  } else if (
    node.instance.children &&
    typeof node.instance.children.$$typeof === "symbol"
  ) {
    children = node.instance.children;
  }
  return link(node, children);
}

function walk(o) {
  let root = o;
  let current = o;

  while (true) {
    // perform work for a node, retrieve & link the children
    let child = doWork(current);
    // console.log(child)

    // if there's a child, set it as the current active node
    if (child) {
      current = child;
      continue;
    }

    // if we've returned to the top, exit the function
    if (current === root) {
      return;
    }

    // keep going up until we find the sibling
    while (!current.sibling) {
      // if we've returned to the top, exit the function
      if (!current.return || current.return === root) {
        return;
      }

      // set the parent as the current active node
      current = current.return;
    }

    // if found, set the sibling as the current active node
    current = current.sibling;
  }
}

walk(new Node(new ClickCounter()));
