import React from "react";
import LoginModal from "../AuthViews/authCommon/loginModal";
import RegisterModal from "../AuthViews/authCommon/registerModel";
//import useModal from "./AuthViews/authCommon/useModal";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff",
    height: "60px",
  },
  navBar: {
    background: "#fff",
    height: 70,
  },
  logo: {
    fontFamily: "Sofia",
    fontSize: 20,
    backgroundColor: "black",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "center",
    marginTop: "10px",
    marginLeft: 58,
  },
  vertLine: {
    border: "2px solid orange",
    backgroundColor: "orange",
    //width: "10px",
    //borderRadius: "5px",
    paddingTop: 13,
  },
  root: {
    width: "fit-content",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "20px",
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

// redux-product-form
const renderAuthenticatedHeader = () => {
  return (
    <React.Fragment>
      <Link
        to="/redux-product-form"
        style={{
          color: "navy",
          textDecoration: "none",
          fontSize: 16,
        }}
      >
        Create Product
      </Link>
      &nbsp; <Divider orientation="vertical" flexItem /> &nbsp;
      {renderLogout()}
    </React.Fragment>
  );
};

const renderLogout = () => {
  return (
    <Link
      to="/logout"
      // data-toggle="modal"
      // data-target="#loginModal"
      // data-backdrop="static"
      style={{
        color: "navy",
        textDecoration: "none",
        fontSize: 16,
      }}
    >
      LogOut
    </Link>
  );
};

const renderAuth = (props) => {
  console.warn("render Header", props);
  console.log("start of render auth", props && props.currentUser);
  // if (props.currentUser == null) {

  return (
    <React.Fragment>
      <Link
        to=""
        data-toggle="modal"
        data-target="#loginModal"
        data-backdrop="static"
        style={{
          color: "navy",
          textDecoration: "none",
          fontSize: 16,
        }}
      >
        Login
      </Link>
      <LoginModal />
      &nbsp; <Divider orientation="vertical" flexItem /> &nbsp;
      <Link
        to=""
        data-toggle="modal"
        data-target="#registerModal"
        data-backdrop="static"
        style={{
          color: "green",
          textDecoration: "none",
          fontSize: 16,
        }}
      >
        Register
      </Link>
      <RegisterModal />
    </React.Fragment>
  );
  // } else {
  //   return null;
  // }
};

const Header = (props) => {
  console.log("Header Props", props);

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="static">
        <Container>
          <Toolbar
            style={{ fontFamily: "Comic Sans Ms", fontSize: 15, marginTop: 10 }}
          >
            <Grid container alignItems="center" className={classes.root}>
              <a href="#" style={{ textDecoration: "none", fontWeight: 700 }}>
                <span style={{ color: "blue" }}>
                  <em>Call Us: &nbsp;</em>
                </span>
                <span style={{ color: "navy" }}>+92 000000123 &nbsp; </span>
              </a>
              <Divider orientation="vertical" flexItem /> &nbsp;
              <i
                className="fab fa-facebook-f"
                style={{ color: "navy", fontSize: 15 }}
              ></i>
              <i
                className="fab fa-youtube"
                style={{ color: "red", fontSize: 20, marginLeft: 10 }}
              ></i>
              <i
                className="fab fa-twitter"
                style={{ color: "blue", fontSize: 20, marginLeft: 10 }}
              ></i>
            </Grid>

            <div style={{ marginLeft: 580 }}>
              <Grid
                container
                alignItems="center"
                style={{ fontFamily: "Ms Comic Sans" }}
                className={classes.root}
              >
                {/* {!props.currentUser && renderAuth()} */}
                {!props.currentUser
                  ? renderAuth()
                  : renderAuthenticatedHeader()}
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{
                    marginLeft: 22,
                    fontSize: 13,
                    fontFamily: "verdana",
                  }}
                >
                  <i className="fa fa-truck" aria-hidden="true"></i> | Become a
                  Host
                </button>
              </Grid>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.logo}
          >
            &nbsp; <span className={classes.vertLine} />
            &nbsp;
            <span className="text-warning h1 text-bold ml-2">Bart</span> {" & "}
            <span className="text-light h1 text-bold mr-2">Rent</span>
          </Link>

          <Grid
            style={{
              marginLeft: 390,
              color: "navy",
              fontFamily: "Sofia",
            }}
          >
            <Link className="btn btn-outline btn-lg" to="/">
              Home
            </Link>
            <div className="btn-group">
              <button
                type="button"
                className="dropdown-toggle btn-lg btn btn-outline"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rentals
              </button>
              <div
                className="dropdown-menu"
                style={{
                  fontFamily: "Comic Sans Ms",
                  backgroundColor: "lightblue",
                  color: "navy",
                  fontSize: 16,
                }}
              >
                <Link to="/product-grid/rent" className="dropdown-item">
                  Go TO Rentals
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/howWorksRental" className="dropdown-item">
                  How it works?
                </Link>
              </div>
            </div>
            <div className="btn-group dropdown">
              <button
                type="button"
                className="btn btn-outline btn-lg dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Barts
              </button>
              <div
                className="dropdown-menu"
                style={{
                  fontFamily: "Comic Sans Ms",
                  backgroundColor: "lightblue",
                  color: "navy",
                  fontSize: 16,
                }}
              >
                <Link to="/product-grid/barter" className="dropdown-item">
                  Go to Barts
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/howWorksBarts" className="dropdown-item">
                  How it works?
                </Link>
              </div>
            </div>
            {/* <Link className="btn btn-light btn-sm mr-2" to="/">Rentals</Link>
           <Link className="btn btn-light btn-sm mr-2" to="/">Barts</Link> */}
            <Link className="btn btn-outline btn-lg" to="/">
              About Us
            </Link>
            <Link className="btn btn-outline btn-lg" to="/">
              Contact Us
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log("Header map prop", state.user.currentUser);
  return { currentUser: state && state.user && state.user.currentUser };
};
export default connect(mapStateToProps)(Header);
