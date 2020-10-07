import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Redirect, Link } from "react-router-dom";
import auth from "../../services/authService";
// import * as auth from "../services/authService";
import Form from "./authCommon/form";
// import { notify } from "../../../../routes/api/users";

// toast.configu/re();
class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    isChecked: false,
    //loginToggle: true,
    //show: false,
    errors: {},
  };
  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      console.log("remmember me");
      this.setState({
        isChecked: true,
        data: { email: localStorage.username, password: localStorage.password },
      });
    } else {
      console.log("Not remember me");
    }
  }
  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
    // isChecked: Joi.any(),
  };
  notify = () => {
    console.log("i am invoke");
    toast.error("🦄Username or Password is incorrect", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  doSubmit = async () => {
    const { email, password } = this.state.data;
    const { isChecked } = this.state;
    if (isChecked && email !== "") {
      localStorage.username = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
    try {
      const user = await auth.login(email, password);
      console.log("user res", user);
      if (user) {
        console.log("Inside if ");
        window.location = "/";
        // const { state } = this.props.location;
        // window.location = state ? state.from.pathname : "/";
      } else {
        console.log("Right");
        this.notify();
        // toast("Basic Notification");
      }
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
        <h3 className="text-primary">Login Here</h3>
        <hr className="mb-3" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "", "email", "mb-3")}
          {this.renderInput(
            "password",
            "Password",
            "filled-password-input",
            "password",
            "mb-2"
          )}
          {this.renderCheckBox(
            "isChecked",
            this.state.isChecked,
            "Remember Me"
          )}
          <div>
            <Link
              to="/"
              className="float-right"
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: 12,
                //marginLeft: 70,
                marginTop: 38,
              }}
            >
              <u>
                <b>Forgot your Password?</b>
              </u>
            </Link>
            {this.renderButton("Login")}
          </div>
          <div className="mt-1">
            <span style={{ fontSize: 14, fontWeight: "bold" }}>
              Don't have an Account?
            </span>
            <Link
              style={{
                textDecoration: "none",
                color: "navy",
                fontSize: 16,
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
