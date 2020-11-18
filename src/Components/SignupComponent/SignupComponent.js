import React, { Component } from "react";
import "./Signupcomponent.css";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInputComponent/FormInput";
import { connect } from "react-redux";
import { setCurrentUser } from "../../Redux/User/UserAction";
import { withRouter } from "react-router-dom";

class SignupComponent extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    console.log(user);
    this.props.setCurrentUser(user);
    this.props.history.push("./");
  };
  render() {
    return (
      <div className="signUpComponent">
        <span className="authComponentHeader">Register</span>
        <form className="authForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            placeholder="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { setCurrentUser })(SignupComponent));
