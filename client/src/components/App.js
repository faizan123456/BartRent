import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Landing from "./Landing";
import LoginForm from "./Login";
import Logout from "./Logout";
import RegisterForm from "./Registration";
import CurrentUser from "./CurrentUser";
import { setCurrentUser } from "../redux/user/user.action";

import auth from "../services/authService";

const Dasboard = () => <h2>Dasboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    auth.getCurrent();
    const { setCurrentUser } = this.props;
    const user = auth.getCurrentUser();
    setCurrentUser(user);

    // this.props.fetchUser();

    // const user = auth.getCurrentUser();
    // g_auth.getCurrent();
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
  componentDidUpdate() {
    auth.getCurrent();
    const { setCurrentUser } = this.props;
    const user = auth.getCurrentUser();
    setCurrentUser(user);
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
