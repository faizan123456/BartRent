import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
//import { Helmet } from 'react-helmet';
//import ReactDOM from 'react-dom';
//import AdminApp from './components/adminApp';
import AdminHeader from './components/adminHeader';



// const adminRoot = document.getElementById('admin-root');
// const headRoot = document.head;

class Admin extends Component {
 
  render() { 
    return [
      {path: '/', component: Dashboard },
      {path: '/header', component: AdminHeader },
  ]
 }

 };

 export default Admin;


//  ReactDOM.render(<AdminApp />
//   // <div className="h1">Hellow Cheeta</div>
//   ,document.querySelector("#admin-root")  
// )

 // return <div>
//    <Helmet>  
//        <meta charSet="utf-8" />
//        <title>Cheeta</title>
//        <link rel="canonical" href="http://mysite.com/example" />      
//    </Helmet>
//  </div>
