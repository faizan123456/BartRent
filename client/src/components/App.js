import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import LoginForm from "./Login";
import Logout from "./Logout";
import NotFound from './notFound';
import RegisterForm from "./Registration";
import CurrentUser from "./CurrentUser";
import ProductForm from "./ProductForm";
import Products from "./Products";
import { setCurrentUser } from "../redux/user/user.action";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";

import auth from "../services/authService";
import productDetail from "./productDetail";

const Dasboard = () => <h2>Dasboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("before setTime OUt", this.props.currentUser);
    setTimeout(() => {
      if (this.props.currentUser === null) {
        const { setCurrentUser } = this.props;
        const user = auth.getCurrentUser();
        setCurrentUser(user);
      }
    }, 300);
  }
  componentDidMount() {
    auth.getCurrent();
    const { setCurrentUser } = this.props;
    const user = auth.getCurrentUser();
    console.log("user of component did mount", user);
    // if (user !== null) {
    setCurrentUser(user);
    // }
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
          <Route path="/new-product" component={ProductForm} />
          <Route path="/edit-product/:id" component={ProductForm} />
          <Route exact path="/products" component={Products} />
          <Route path="/product/:id" component={productDetail} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/current" component={CurrentUser} />
          <Route path="/logout" component={Logout} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
