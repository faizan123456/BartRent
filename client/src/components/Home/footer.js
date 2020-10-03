import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

footer: {
    marginTop: 100, 
    color: "#fff", backgroundImage: `url('https://media.istockphoto.com/videos/silk-black-flag-animation-of-dark-color-background-video-waving-in-video-id1170467563?s=640x640')`, backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex"
},
logo: {
    fontFamily: "Sofia", 
    marginRight: 75
  },
vertLine: {
    border: "2px solid orange", 
    backgroundColor: "orange", 
    width: "20px", 
    borderRadius: "5px",
    paddingBottom: 200,
  },  
  

}));

const Footer = () => {
    const classes = useStyles();

    return ( 
<Box>
  <footer className={classes.footer}>
  <div className="container pt-5 border-bottom">
   
    <div className="row">
      <div className="col-md-4 col-sm-12 text-center">     
      <Link to="/" style={{ textDecoration: "none" }} className={classes.logo}> <span className="text-warning h2 text-bold ">Bart</span> {"&"} <span className="text-light h2 text-bold">Rent</span></Link>
      <span className={classes.vertLine}> </span>  
      </div>
      <div className="col-md-8 col-sm-12">

        <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
          <h5 className="mb-4 font-weight-bold text-uppercase">Solutions</h5>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Sales</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Finance</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Workforce</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#"> E-Commerce</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Business Apps</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Project Management</a></li>
        </ul>
        </div>

        <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
          <h5 className="mb-4 font-weight-bold text-uppercase">Developers</h5>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Open Source</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">Technology</a></li>
        </ul>
        </div>

        <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
          <h5 className="mb-4 font-weight-bold text-uppercase">Company</h5>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#">About</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a style={{ color: "wheat", textDecoration: "none"}} href="#"> Blog</a></li>
        </ul>
        </div>

        <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
          <h5 className="mb-4 font-weight-bold text-uppercase">Connect</h5>
        <ul className="list-group">
          
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#"><i className="fa fa-linkedin mr-1"></i> LinkedIn</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#"><i className="fa fa-twitter mr-1"></i> Twitter</a>       
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"> 
            <a style={{ color: "wheat", textDecoration: "none"}} href="#"><i className="fa fa-reddit mr-1"></i> Reddit</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#" target="_blank"><i className="fa fa-google-plus mr-1"></i> Google+</a>
            
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#" target="_blank"><i className="fa fa-github mr-1"></i> Github</a>  
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#" target="_blank"><i className="fa fa-medium mr-1"></i> Medium</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#" target="_blank"><i className="fa fa-facebook mr-1"></i> Facebook</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a style={{ color: "wheat", textDecoration: "none"}} href="#" target="_blank"><i className="fa fa-youtube mr-1"></i> YouTube</a>
          </li>
        </ul>
        </div>

      </div>
        <div className="col-md-12">
          <div className="py-4 d-flex justify-content-center align-items-center">
            <a style={{ color: "wheat", textDecoration: "none"}} className="mr-4" href="#">Privacy & terms</a>
            <a style={{ color: "wheat", textDecoration: "none"}} href="#">Sitemap</a>
          </div>
        </div>
    </div>
  </div>
</footer>
</Box>
     );
}
 
export default Footer;