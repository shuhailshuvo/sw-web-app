import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../../assets/css/Login.module.css";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Link from "../../components/Link";

class Login extends Component {
  constructor(props){
		super(props);
		this.state = {
		  email: "",
		  password: "",
		};
	}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  navigateToSignup = () =>{
		this.props.history.push("/signup")
	}
  navigateToForgetPass = () =>{
		this.props.history.push("/forget-password")
	}
  login = () =>{
    // diapatch action
    // this.props.dispatch(login(this.state.email, this.state.password))
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className={styles.container1}>
          <div className={styles.container6}>
            <img src={Logo} alt='Logo' />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.formContainer}>
            <form className={styles.InputForm} onSubmit={this.submitHandler}>
              <div id={styles.element1}>
                <h3>Log In</h3>
              </div>
              <div className={styles.Inputs}>
                <label htmlFor='email'>
                  Email
                  <input
                    type='email'
                    placeholder='joe@email.com'
                    name='email'
                    id='email'
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <label htmlFor='password'>
                  Password
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <Link className="customLink" onClick={this.navigateToSignup}>Signup</Link>
                <Link className="customLink" onClick={this.navigateToForgetPass}>forget password?</Link>
                <Button className="button" onClick={this.login}>Signin</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}	

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Login);
