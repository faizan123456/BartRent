import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import Logout from "./Logout";
import auth, { getJwt } from "../services/authService";

class Header extends Component {
  state = {};

  renderContent() {
    const jwt = http.setJwt(getJwt());
    switch (
      false //this.props.auth
    ) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <li key="1">
              <a href="/auth/google" onClick={jwt}>
                Login With Google
              </a>
            </li>
            <li key="2">
              <a href="/auth/facebook">Login With facebook</a>
            </li>
            <li key="3">
              <a href="/login">Login</a>
            </li>
            <li key="4">
              <a href="/register">Register</a>
            </li>
            <li key="5">
              <a href="/current">Get Current User</a>
            </li>
            <li key="12">
              <a href="/logout">Logout</a>
            </li>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <li key="12">
              <a href="/current">Current User</a>
            </li>
            <li key="11">
              <a href="/api/logout">Logout Social</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left navbar-brand"
          >
            Barter And Rental Managment
          </Link>
          <ul id="nav-mobile" className="navbar-nav">
            {/* <li>
              <a href="#">SignIn With Google</a>
            </li> */}
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
