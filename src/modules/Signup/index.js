import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "../../components/Link";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

	navigateToLogin = () =>{
		this.props.history.push("/login");
	}
  render() {
		return(
			<div>
				<h3>Signup Page</h3>
				<p>
					Already have account? try <Link className="customLink" onClick={this.navigateToLogin}>Login</Link>
				</p>
			</div>
		);
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Signup);
