import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Redirect, Link } from "react-router-dom";
import auth from "../../services/authService";
// import * as auth from "../services/authService";
import Form from "./authCommon/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    //loginToggle: true,
    //show: false,
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await auth.login(email, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
        toast.error("Your credentials are not correct, please try again.");
      }
    }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;
    //const classes = useStyles();
    return (
      <div>
        <h4 className="text-primary">Login Here</h4>
        <hr className="mb-3" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "", "email", "mb-3")}
          {this.renderInput("password", "Password", "password")}
          {this.renderCheckBox("Remember Me")}
          <div>
            <Link
              to="/"
              className="float-right"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: 12,
                //marginLeft: 70,
                marginTop: 22,
              }}
            >
              <u>
                <b>Forgot your Password?</b>
              </u>
            </Link>
            {this.renderButton("Login")}
          </div>
          <div className="mt-4">
            <span style={{ marginLeft: 22, fontSize: 12, fontWeight: "bold" }}>
              Don't have an Account?
            </span>
            <Link
              style={{
                textDecoration: "none",
                color: "navy",
                fontSize: 12,
                marginLeft: 5,
              }}
              to="/"
              data-toggle="modal"
              data-target="#registerModal"
              data-backdrop="static"
            >
              Register
            </Link>
          </div>
        </form>
        <hr style={{ color: "blue", backgroundColor: "blue" }} />
      </div>
    );
  }
}

export default LoginForm;
