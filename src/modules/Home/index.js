/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>Hello World</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
