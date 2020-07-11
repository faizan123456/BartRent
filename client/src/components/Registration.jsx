import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      // name: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    // name: Joi.string()
    //   .required()
    //   .label("Name"),
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    try {
      const response = await userService.register(this.state.data);

      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  //   doSubmit = () => {
  //     // call the server ->save the Changes
  //     console.log("Submited");
  //   };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            {/* {this.renderInput("Name", "name")} */}
            {this.renderInput("Username", "username")}
            {this.renderInput("Password", "password", "password")}
            {this.renderButton("Register")}
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
