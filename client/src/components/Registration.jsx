import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  // {
  //   _id: 1,
  //   name: "Pak"
  // },
  // {
  //   _id: 2,
  //   name: "Ind"
  // },
  // {
  //   _id: 3,
  //   name: "US"
  // },
  // {
  //   _id: 4,
  //   name: "UK"
  // }
  state = {
    countries: [],
    cities: [],
    states: [],
    data: {
      name: "",
      username: "",
      password: "",
      countryId: "",
      cityId: "",
      stateId: ""
    },
    errors: {}
  };

  populateCountries = async () => {
    const { data: countries } = await userService.getCountries();
    this.setState({ countries });
  };
  // populateStates = async () => {
  //   const { data: states } = await userService.getStates();
  //   this.setState({ states });
  // };
  // populateCities = async () => {
  //   const { data: cities } = await userService.getCities();
  //   this.setState({ cities });
  // };

  async componentDidMount() {
    await this.populateCountries();
    // await this.populateStates();
    // await this.populateCities();
  }
  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    countryId: Joi.string()
      .required()
      .label("Name"),
    stateId: Joi.string()
      .required()
      .label("Name"),
    cityId: Joi.string()
      .required()
      .label("Name"),
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
      console.log("Register form response obj", response);
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
            {this.renderInput("name", "Name")}
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderSelect("countryId", "Country", this.state.countries)}
            {this.renderSelect("stateId", "State", this.state.states)}
            {this.renderSelect("cityId", "City", this.state.cities)}
            {this.renderButton("Register")}
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
