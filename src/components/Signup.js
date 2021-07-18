import React from "react";
import styles from "../assets/css/Login.module.css";
import logo from "../assets/images/logo.png";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    if (e.target.type === "email") {
      this.setState({
        email: e.target.value,
      });
    } else {
      this.setState({
        password: e.target.value,
      });
    }
  };

  submitHandler = (e) => {
    // const { email, password } = this.state;
    e.preventDefault();
  };

  newuserHandler = (e) => {
    // const { email, password } = this.state;
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className={styles.container1}>
          <div className={styles.container6}>
            <img src={logo} alt='Logo' />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.formContainer}>
            <form className={styles.InputForm} onSubmit={this.submitHandler}>
              <div id={styles.element1}>
                <h3>Signup</h3>
              </div>
              <div className={styles.Inputs}>
                <label htmlFor='emailform'>
                  Email
                  <input
                    type='email'
                    placeholder='joe@email.com'
                    name='emailform'
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <br />
                <label htmlFor='passwordform'>
                  Password
                  <input
                    type='password'
                    placeholder='Enter your password'
                    name='passwordform'
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <span
                  className={styles.newuser}
                  onClick={this.newuserHandler}
                  onKeyDown={this.newuserHandler}
                  role='link'
                  tabIndex={-1}
                >
                  returning user?
                </span>
                <br />
                <br />
                <br />
                <br />
                <input type='submit' value='Signup' />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
