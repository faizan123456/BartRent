import React from "react";
import Dashboard from "./componentsOwn/dashboard";
// import "../node_modules/materialize-css/dist/css/materialize.min.css";
// import "../../node_modules/@fullcalendar/common/vdom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import "../admin/assets/style/app/App.scss";
import "../admin/assets/style/primereact.css";
import "../admin/assets/style/flags.css";

import "react-app-polyfill/ie11";

import ScrollToTop from "./ScrollToTop";
import AdminApp from "./adminApp";

const Admin = () => {
  //Thhis is Equal to Index.js file
  return (
    <ScrollToTop>
      <AdminApp />
      {/* // <Dashboard /> */}
    </ScrollToTop>
  );
};

export default Admin;

//Dashboard ->Charts, Cards,
//NavBar -> of admin
// Barter   ->List of  Users,Swaps,products,orders, payments Details,logout,profile, ,
// Renting  ->users,rentals,products ,orders Details,payments Detail,logouy,profile

//NavBar -> of Client
// Barter   ->Home,Products,Swaps,Rental,How its work,logout ,profile ,Gallery,contact us ,about
// Renting  ->users,rentals,products ,orders Details,payments Detail,logouy,profile

//Categories -> 1. Cars,Mobiles,Books,Clothing Women, Animals And Birds,Sports Equipment,Furniture,
//Computer And Lpatopes,Electornics,Videos Games,Musical intruments, Traveling Equipments,antique,
//footwear , Helath Care , Toys, Stationary, Clothing Men, Kitchen appliences,cleaning equipments,
//kids acceries, Home appliences,decor, medicine,bikes,gym and fitness, camera, Acs and Coolers, fans,
//
//Landing pages  Home ,  Rental ,Barter

// import React, {Component, Fragment} from 'react';
// import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
// import Dashboard from './components/dashboard';
// //import { Helmet } from 'react-helmet';
// //import ReactDOM from 'react-dom';
// //import AdminApp from './components/adminApp';
// import AdminHeader from './components/adminHeader';

// // const adminRoot = document.getElementById('admin-root');
// // const headRoot = document.head;

// class Admin extends Component {

//   render() {
//     return [
//       {path: '/', component: Dashboard },
//       {path: '/header', component: AdminHeader },
//   ]
//  }

//  };

//  export default Admin;

// //  ReactDOM.render(<AdminApp />
// //   // <div className="h1">Hellow Cheeta</div>
// //   ,document.querySelector("#admin-root")
// // )

//  // return <div>
// //    <Helmet>
// //        <meta charSet="utf-8" />
// //        <title>Cheeta</title>
// //        <link rel="canonical" href="http://mysite.com/example" />
// //    </Helmet>
// //  </div>
