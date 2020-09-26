import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import './Slider.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff",
    height: "45px",
  },
  navBar: {
    background: "#fff",
  },
  logo: {
    fontFamily: "Sofia", 
    backgroundColor: "black", 
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "justify", 
    marginTop: "1px" ,
    marginLeft: 21
  },
  vertLine: {
    border: "2px solid orange", 
    backgroundColor: "orange", 
    width: "20px", 
    borderRadius: "5px",
    paddingTop: 10,
  },
  slider: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderCard: {
    marginTop: -430,
    marginLeft: 80,
    backgroundColor: "#000000",
    color: "#fff",
    borderRadius: 8,
    opacity: 0.5, 
    width: 380, 
    height: 400, 
    zIndex: 1, 
    position: "absolute"
  },
  hero: {
    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.dauphinislandbeachrentals.com/wp-content/uploads/2015/12/DSC_0108.jpg')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  root: {
    width: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    marginBottom: '20px',
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
  paper: {
    backgroundColor: 'orange',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

const Header = (props) => {
  const classes = useStyles();

  const images = [
    { path: "https://www.moneycrashers.com/wp-content/uploads/2011/06/best-swapping-websites-1200x802.jpg?p=32454"},
    { path: "https://thumbor.forbes.com/thumbor/2000x1009/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cdb058a5218470008b0b00f%2F0x0.jpg%3Ffit%3Dscale"},
    { path: "https://media-cdn.tripadvisor.com/media/photo-s/16/45/16/dd/the-mood-luxury-rooms.jpg"},
    { path: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/finding-and-understanding-your-conversion-rate-for-your-products-on-amazon-5ddfc9c0e0ea9-760x400.png"},
    { path: "https://www.avrnetworking.com/wp-content/uploads/2019/08/ITServices-1024x683.jpg"},
    { path: "https://www.telegraph.co.uk/content/dam/recommended/2019/01/11/Best-laptops-for-everyday-use-review-xlarge_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png"}    
];      


  return (
    <React.Fragment>
      
      <AppBar className={classes.appBar} position="static">
        <Container>
          <Toolbar style={{ fontFamily: "Comic Sans Ms;", fontSize: 12 }}>             
          <div>
            <Grid container alignItems="center" className={classes.root}>
              <a href="#" style={{ textDecoration: "none", fontWeight: 700 }}> 
              <span style={{ color: "blue"}}><em>Call Us: &nbsp;</em></span> 
              <span style={{color: "navy"}}>+92 000000123 &nbsp; </span>
              </a>
              <Divider orientation="vertical" flexItem /> &nbsp;
               <i className="fa fa-facebook" style={{ color: "navy", fontSize: 15 }}></i>
               <i className="fa fa-youtube-play" style={{ color: "red", fontSize: 15, marginLeft: 10 }}></i>
               <i className="fa fa-twitter" style={{ color: "blue", fontSize: 15, marginLeft: 10 }}></i>             
            </Grid>
          </div>

          <div style={{ marginLeft: 350 }}>
            <Grid container alignItems="center" style={{ fontFamily: "Ms Comic Sans"}} className={classes.root}>
            <Link to="/login" style={{ color: "navy", textDecoration: "none",fontSize: 12}}>Login</Link>
              &nbsp; <Divider orientation="vertical" flexItem /> &nbsp;
            <Link to="/register" style={{ color: "green", textDecoration: "none", fontSize: 12}}>Register</Link> 
              {/* <button type="button" className="btn btn-outline-secondary" style={{ marginLeft: 22, fontSize: 10, fontFamily: "verdana" }} ><i class="fa fa-truck" aria-hidden="true"></i> | Become a Host</button> */}
              <a href="/auth/facebook" type="button" className="btn btn-outline-primary" style={{ marginLeft: 22, fontSize: 10, fontFamily: "verdana" }} ><i class="fa fa-facebook" aria-hidden="true"></i> | Login with facebook </a>
              <a href="/auth/google" type="button" className="btn btn-outline-danger" style={{ marginLeft: 22, fontSize: 10, fontFamily: "verdana" }} ><i class="fa fa-google" aria-hidden="true"></i> | Login with google </a>
            </Grid>
          </div>
            
          </Toolbar>   
        </Container>       
    </AppBar>
      
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Link to="/"style={{ textDecoration: "none"}} className={classes.logo}> &nbsp; <span className={classes.vertLine} /> <span className="text-warning h2 text-bold ml-2">Bart</span> {"&"} <span className="text-light h2 text-bold mr-2">Rent</span></Link>          
          <Grid style={{ marginLeft: 375, color: "navy", fontFamily: "Comic Sans Ms" }}>
           <Link className="btn btn-light btn-sm mr-2" to="/">Home</Link>
            <div className="btn-group">
              <button type="button" className="dropdown-toggle btn btn-light btn-sm mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Rentals
              </button>
              <div className="dropdown-menu" style={{ backgroundColor: "lightblue", color: "navy", fontSize: 12 }}>
                <Link to="/rentalContent" className="dropdown-item">Go TO Rentals</Link>
                <div className="dropdown-divider"></div>
                <Link to="/howWorksRental" className="dropdown-item">How it works?</Link>
              </div>
           </div>
           <div className="btn-group dropdown">
              <button type="button" className="btn btn-light btn-sm mr-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Barts
              </button>
              <div className="dropdown-menu" style={{ backgroundColor: "lightblue", color: "navy", fontSize: 12 }}>
                <Link to="bartsContent" className="dropdown-item">Go to Barts</Link>
                <div className="dropdown-divider"></div>
                <Link to="/howWorksBarts" className="dropdown-item">How it works?</Link>
              </div>
           </div>
           {/* <Link className="btn btn-light btn-sm mr-2" to="/">Rentals</Link>
           <Link className="btn btn-light btn-sm mr-2" to="/">Barts</Link> */}
           <Link className="btn btn-light btn-sm mr-2" to="/">AboutUs</Link>
           <Link className="btn btn-light btn-sm" to="/">ContactUs</Link>

          </Grid>
        </Toolbar>
         
       </AppBar> 
      
      <Slider previousButton={false} nextButton={false} autoplay={3000}>          
            {images.map((item, index) => (
            <div
              className={classes.slider}
              key={index}
              style={{ backgroundImage: `url('${item.path}')`,
              }}
            >             
            </div>                         
          ))}                                    
        </Slider>  
      
      <Card className={classes.sliderCard} >
          This is a Card
        </Card>                


    </React.Fragment>
    
  );
}
 
export default Header;