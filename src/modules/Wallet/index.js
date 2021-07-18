import React, { Component } from "react";
import { connect } from "react-redux";
import ParentComponent from "../../components/ParentComponent";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps) {}

  // componentWillUnmount() {}

  render() {
    return (
      <>
        <ParentComponent />
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Wallet);
