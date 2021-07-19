import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { login } from "../modules/Login/reducer";
import Container from "./Container";

class AppRoute extends Component {
  constructor(props) {
    super();
    const { component: ChildModule, ...rest } = props;
    // initial app container
    this.route = (
      <Route
        {...rest}
        render={() =>
          props.login.isLoggedIn ? (
              <Container>
                <ChildModule {...props} />
              </Container>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    // on history update
    props.history.listen(() => {
        this.route = (
            <Route
              {...rest}
              render={() =>
                props.login.isLoggedIn ? (
                    <Container>
                      <ChildModule {...props} />
                    </Container>
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
          );
    });
  }
  componentDidUpdate(prevProps){
    const { component: ChildModule, ...rest } = this.props;
    this.route = (
        <Route
          {...rest}
          render={() =>
            this.props.login.isLoggedIn ? (
                <Container>
                  <ChildModule {...this.props} />
                </Container>
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: this.props.location }
                }}
              />
            )
          }
        />
      );

  }

  render() {
    return this.route ? this.route : null;
  }
}

const mapStateToProps = state => ({
  login: login(state)
});

export default withRouter(connect(mapStateToProps)(AppRoute));
