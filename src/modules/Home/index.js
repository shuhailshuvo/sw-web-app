/**
 * /* eslint-disable
 *
 * @format
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>hi there how are you. I am from Home</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
