import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class LoginForm extends Form {
  // username=React.createRef();
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  // componentDidMount(){
  //     this.username.current.focus();
  // }

  doSubmit = () => {
    // call the server ->save the Changes
    console.log("Submited");
  };
  render() {
    return (
      <div>
        <h1>LogIN</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            {this.renderInput("Username", "username")}
            {this.renderInput("Password", "password", "password")}
            {this.renderButton("label")}
          </div>
        </form>
      </div>
    );
  }
}
export default LoginForm;
