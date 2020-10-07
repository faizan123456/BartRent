import React from "react";
import Joi from "joi-browser";
import Form from "./authCommon/form";
import * as userService from "../../services/userService";
import auth from "../../services/authService";

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
    gender: [],
    data: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      Dob: "",
      genderId: "",
      phone: "",
      countryId: "",
      cityId: "",
      stateId: "",
      zip: "",
      address: "",
    },
    errors: {},
  };

  populateCountries = async () => {
    const { data: countries } = await userService.getCountries();
    this.setState({ countries });
  };

  // getGenders;

  populateGenders = async () => {
    const { data: gender } = await userService.getGenders();
    this.setState({ gender });
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
    await this.populateGenders();
    console.log("Gender ", this.state.gender);
    console.log("Countries", this.state.countries);
    console.log("states ", this.state.states);
    console.log("city ", this.state.cities);
  }
  schema = {
    firstname: Joi.string().required().label("First Name"),
    lastname: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    cpassword: Joi.string().required().min(5).label("Password"),
    Dob: Joi.date().required().label("Date of birth"),
    genderId: Joi.string().required().label("Gender"),
    countryId: Joi.string().required().label("Country"),
    stateId: Joi.string().required().label("State"),
    cityId: Joi.string().required().label("City"),
    zip: Joi.string().required().label("Zip Code"),
    phone: Joi.string().required().label("Phone Number"),
    address: Joi.string().required().label("Postal Address"),
  };

  doSubmit = async () => {
    // Call the server
    try {
      console.log("do Submit", this.state.data);
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
        <h2 className="text-success">Register Here</h2>
        <hr />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div>
                  {this.renderInput(
                    "firstname",
                    "First Name",
                    "outlined-basic",
                    "text",
                    "mt-3"
                  )}
                </div>
                <div>
                  {this.renderInput(
                    "email",
                    "Email",
                    "outlined-basic",
                    "email",
                    "mt-3"
                  )}
                </div>
                <div>
                  {this.renderInput(
                    "password",
                    "Password",
                    "filled-password-input",
                    "password",
                    "mt-3 mb-3"
                  )}
                </div>
                <div>
                  {this.renderDate("Dob", "Date of Birth", "", "date", "mb-3")}
                </div>
                <div>
                  {this.renderSelect("genderId", "Gender", this.state.gender)}
                </div>
                {this.renderSelect(
                  "countryId",
                  "Country",
                  this.state.countries
                )}
              </div>
              <div className="col-md-6">
                {this.renderInput(
                  "lastname",
                  "Last Name",
                  "outlined-basic",
                  "text",
                  "mt-3 mb-3"
                )}
                {this.renderInput(
                  "phone",
                  "Phone Number",
                  "outlined-basic",
                  "",
                  "mb-3"
                )}
                {this.renderInput(
                  "cpassword",
                  "Confirm Password",
                  "filled-password-input",
                  "password",
                  "mb-3"
                )}
                {this.renderInput(
                  "zip",
                  "Zip Code",
                  "outlined-basic",
                  "",
                  "mb-3"
                )}

                {this.renderSelect("stateId", "State", this.state.states)}
                {this.renderSelect("cityId", "City", this.state.cities)}
              </div>
            </div>
            {this.renderTextArea(
              "address",
              "Postal Address",
              "outlined-multiline-static",
              "mb-2"
            )}
            {this.renderButton("Register")}
            <hr
              style={{ color: "lightgreen", backgroundColor: "lightgreen" }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
