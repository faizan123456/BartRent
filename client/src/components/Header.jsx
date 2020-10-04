import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return ( <header id="at-header" className="at-header at-haslayout">
  <div className="at-topbarholder">
  <div className="container-fluid"> 
  <div className="row">
  <div className="col-12 col-md-12">
  <div className="at-topbar">
  <div className="at-topcominfo">
  <Link to="tel:+1234-5678-900" className="at-callnum">
  <em>Call Us:</em>
  +1234-5678-900												</Link>
  <ul className="at-socialicons">
  <li className="at-facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
  <li className="at-twitter"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
  <li className="at-youtube"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
  <li className="at-instagram"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
  </ul>
  </div>
  <div className="at-loginarea float-right">
  <Link to="javascript:;" id="dc-loginbtn" className="at-loginoption" data-toggle="modal" data-target="#loginpopup">Login</Link>
  <Link to="javascript:;" className="at-registeroption" data-toggle="modal" data-target="#registerpopup">Register</Link>
  <div className="at-detailsbtn-topbar">
  <Link to="become-a-host/index.html" className="at-btn at-btnactive">Became a Host</Link>
  <em>OR</em>
  <Link className="at-btn at-btnactive at-btntwo" to="search-properties/index.html">Find Property</Link>
  </div>
  </div>
  </div>									
  </div>
  </div>
  </div>
  </div>
  <div className="at-navigationarea">
  <div className="container-fluid">
  <div className="row">
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <strong className="at-logo"> 
  <Link to="index.html">
  <img className="amsvglogo" src="wp-content/themes/houzillo/images/logo_solid.svg" alt="Houzillo" />
  </Link> 
  </strong>
  <div className="at-rightarea">
  <nav id="at-nav" className="at-nav navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <i className="lnr lnr-menu"></i>
  </button>
  <div className="collapse navbar-collapse at-navigation" id="navbarNav">
  <ul id="menu-main-menu" className="navbar-nav"><li id="menu-item-1027" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown menu-item-1027"><Link to="#">Main</Link>
  <ul className="sub-menu">
  <li id="menu-item-121" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17 current_page_item menu-item-121"><Link to="index.html" aria-current="page">Home V1</Link></li>
  <li id="menu-item-1028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028"><Link to="home-v2/index.html">Home V2</Link></li>
  </ul>
  </li>
  <li id="menu-item-669" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children dropdown menu-item-669"><Link to="index.html" aria-current="page">Properties</Link>
  <ul className="sub-menu">
  <li id="menu-item-670" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-670"><Link to="search-properties/index.html">Property Grid</Link></li>
  <li id="menu-item-1067" className="menu-item menu-item-type-post_type menu-item-object-properties menu-item-1067"><Link to="properties/how-to-earn-398-day-using-travel/index.html">Property Detail</Link></li>
  </ul>
  </li>
  <li id="menu-item-598" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-598"><Link to="how-it-works/index.html">How It Works?</Link></li>
  <li id="menu-item-596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-596"><Link to="about/index.html">About</Link></li>
  <li id="menu-item-597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-597"><Link to="contact/index.html">Contact</Link></li>
  <li id="menu-item-684" className="at-menu-icon menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-684"><Link to="#"><span><i></i><i></i><i></i></span></Link>
  <ul className="sub-menu">
  <li id="menu-item-685" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-685"><Link to="404-page.html">404 Page</Link></li>
  <li id="menu-item-679" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-679"><Link to="blog-grid/index.html">Blog Grid</Link></li>
  <li id="menu-item-674" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-674"><Link to="gaslamp-historic-true-crime-tour/index.html">Blog Single</Link></li>
  </ul>
  </li>
  </ul>										</div>
  </nav>
  </div>
  </div>
  </div>
  </div>
  </div>
  </header>)
};


export default Header;
