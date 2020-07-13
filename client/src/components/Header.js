import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
class Header extends Component {
  state = {};
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <React.Fragment>
            <li key="1">
              <a href="/auth/google">Login With Google</a>
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
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
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
