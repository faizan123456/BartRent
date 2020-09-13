import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '../admin/assets/style/app/App.scss';
import '../admin/assets/style/primereact.css';
import '../admin/assets/style/flags.css';


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
import './App.css';

import auth from "../services/authService";
import productDetail from "./productDetail";
// import AdminApp from './../admin/components/adminApp';
// import Admin from './../admin/admin';
import { routes } from '../admin/components/adminApp';
import Dashboard from './../admin/components/dashboard';

const Dasboarde = () => <h2>Dasboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  state = {

  }
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

    // let routeConfig = [];
    // routeConfig = routeConfig.concat();
    

    return (
      <div>  
             
        <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path="/surveys" component={Dasboarde} />
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
          <Route path="/admin" component={Dashboard} />
          {
            routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} /> ),
            console.log("Routes", routes)
          } 
          </Switch>
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
