import React, { Component } from "react";
import "./SigninComponent.css";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInputComponent/FormInput";
import { connect } from "react-redux";
import { setCurrentUser } from "../../Redux/User/UserAction";
import { withRouter } from "react-router-dom";

class SignInComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    this.props.setCurrentUser(user);
    this.props.history.push("./");
  };
  render() {
    return (
      <div className="signinComponent">
        <span className="authComponentHeader">Sign In</span>

        <form className="authForm" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            placeholder="Enter Your Email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(connect(null, { setCurrentUser })(SignInComponent));
