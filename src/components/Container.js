import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../modules/Login/reducer";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { AppContainer, ContainerNav } from "./Styled";

class Container extends Component {

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        login: this.props.login
      })
    );
    return (
    <AppContainer>
        <div>
            <Navbar />
            <ContainerNav>
                <Sidebar />
                {childrenWithProps}
            </ContainerNav>
        </div>
      </AppContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: login(state),
  };
}

export default connect(mapStateToProps)(withRouter(Container));
