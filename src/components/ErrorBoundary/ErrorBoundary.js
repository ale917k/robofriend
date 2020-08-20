import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasErrored: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErrored: true });
  }

  render() {
    if (this.state.hasErrored) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
