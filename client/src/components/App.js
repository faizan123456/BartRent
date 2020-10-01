import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import Header from "./Headerdummy";
import Landing from "./Landing";
import LoginForm from "./AuthViews/login";
import Logout from "./Logout";
import NotFound from "./notFound";
import RegisterForm from "./AuthViews/register";
import CurrentUser from "./CurrentUser";
import ProductForm from "./ProductForm";
import Products from "./Products";
import { setCurrentUser } from "../redux/user/user.action";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import "./App.css";

import auth from "../services/authService";
import productDetail from "./productDetail";
// import AdminApp from './../admin/components/adminApp';
// import Admin from './../admin/admin';
// import Dashboard from "./../admin/components/dashboard";

// we have two type of tokens
// 1. via Social login       getCurrent()
//2. via Form Isuue is here.   getCurrentUser()

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("before setTime OUt in App", this.props.currentUser);
    // setTimeout(async () => {
    //   if (this.props.currentUser === null) {
    //     const { setCurrentUser } = this.props;
    //     let user = await auth.getCurrentUser(); //local
    //     console.log("before all====", user);
    //     if (user === null) {
    //       user = await auth.getCurrent(); //social
    //       console.log("constructor of App in Case of Form Login", user);
    //     }
    //     console.log("constructor of App user", user);
    //     if (user != null) {
    //       console.log("run if ", user);
    //       setCurrentUser(user);
    //     }
    //   }
    // }, 300);
  }
  componentDidMount() {
    console.log("component Did Mount");
    if (this.props.currentUser === undefined) return;
    setTimeout(async () => {
      if (this.props.currentUser === null) {
        const { setCurrentUser } = this.props;
        let user = await auth.getCurrentUser(); //local
        console.log("before all====", user);
        if (user === null) {
          user = await auth.getCurrent(); //social
          console.log("constructor of App in Case of Form Login", user);
        }
        console.log("constructor of App user", user);
        if (user != null) {
          console.log("run if ", user);
          setCurrentUser(user);
        }
      }
    }, 300);
  }
  render() {
    // const { isAdmin } = this.props;

    if (this.props.currentUser && this.props.currentUser.isAdmin) {
      console.log("is Admin", this.props.currentUser.isAdmin);
      return (
        <div>
          <BrowserRouter>
            <Switch>
              {/* <Route exact path="/surveys" component={Dasboarde} /> */}
              {/* <Route exact path="/" component={Dashboard} /> */}
              {/* <Route exact path="/" component={Admin} /> */}
              <Route path="/logout" component={Logout} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <div>
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            {/* <Route exact path="/surveys" component={Dasboarde} /> */}
            <Route exact path="/" component={Landing} />
            <Route path="/new-product" component={ProductForm} />
            <Route path="/edit-product/:id" component={ProductForm} />
            <Route exact path="/products" component={Products} />
            <Route path="/product/:id" component={productDetail} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/current" component={CurrentUser} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// componentDidMount() {
//   // if user Socialy then  getCurrentUser() otherWise getCurrent()

//   auth.getCurrent();
//   const { setCurrentUser } = this.props;

//   // if (userWithOUtSocial) {
//   //   setCurrentUser(userWithOUtSocial);
//   // }

//   const user = auth.getCurrentUser();
//   console.log("user of component did mount", user);
//   // if (user !== null) {
//   setCurrentUser(user);
//   // }
//   // this.props.fetchUser();

//   // const user = auth.getCurrentUser();
//   // g_auth.getCurrent();
// }
