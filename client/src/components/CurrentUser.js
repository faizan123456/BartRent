import React, { Component } from "react";
import auth from "../services/authService";

class CurrentUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      email: "",
      name: ""
    };
  }
  componentDidMount() {
    const user = auth.getCurrentUser();
    const email = user.email;
    const id = user.id;
    const name = user.name;
    console.log(user);
    this.setState({ email, id, name });
  }

  render() {
    return (
      <div>
        <h2>ID {this.state.id}</h2>
        <h2>Email {this.state.email}</h2>
        <h2>Name {this.state.name}</h2>
      </div>
    );
    // const user = this.state.user;
    // return <div>{user.email}</div>;
  }
}

export default CurrentUser;
