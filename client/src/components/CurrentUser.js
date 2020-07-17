import React, { Component } from "react";
import auth from "../services/authService";
import g_auth from "../services/currentUser";
import http from "../services/httpService";
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
    // http.get("http://localhost:3000/api/current_user").then(res => {
    //   console.log("res", res);
    //   // const token = res.data.token;
    //   const token = res.headers["x-auth-token"];
    //   console.log("this one", token);
    //   auth.loginWithJwt(token);
    // });

    // const res = await http.get("http://localhost:3000/api/current_user");
    // console.log("res", res);
    // // const token = res.data.token;
    // const token = res.headers["x-auth-token"];
    // console.log("this one", token);
    // auth.loginWithJwt(token);

    // g_auth.getCurrent();

    auth.getJwt();
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
