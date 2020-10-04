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
            <li className="nav-item" key="01">
              <Link className="nav-link" to="/redux-product-form">
                Products
              </Link>
            </li>
            <li className="nav-item" key="1">
              <Link className="nav-link" to="/products" onClick={jwt}>
                Products
              </Link>
            </li>
            <li className="nav-item" key="2">
              <Link className="nav-link" to="/new-product">
                New Product
              </Link>
            </li>

            <li className="nav-item" key="3">
              <a className="nav-link" href="/auth/google" onClick={jwt}>
                Login With Google
              </a>
            </li>
            <li className="nav-item" key="4">
              <a className="nav-link" href="/auth/facebook">
                Login With facebook
              </a>
            </li>
            <li className="nav-item" key="5">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item" key="6">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item" key="7">
              <Link className="nav-link" to="/current">
                Get Current User
              </Link>
            </li>
            <li className="nav-item" key="8">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
            <li className="nav-item" key="9">
              <Link className="nav-link" to="/my-account">
                My Account
              </Link>
            </li>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <li key="12">
              <Link to="/current">Current User</Link>
            </li>
            <li key="11">
              <Link to="/api/logout">Logout Social</Link>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left navbar-brand"
          >
            Barter And Rental Managment
          </Link>

          <ul id="nav-mobile" className="navbar-nav mr-auto">
            {/* <li>
              <Link to="#">SignIn With Google</Link>
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
