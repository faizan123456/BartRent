import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import LoginForm from "./Login";
import Logout from "./Logout";
import RegisterForm from "./Registration";
import CurrentUser from "./CurrentUser";
const Dasboard = () => <h2>Dasboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/surveys" component={Dasboard} />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/current" component={CurrentUser} />
          <Route path="/logout" component={Logout} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
