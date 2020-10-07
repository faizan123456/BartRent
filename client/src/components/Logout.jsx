import React, { Component } from "react";
import auth from "../services/authService";
import { discardCurrentUser } from "../redux/user/user.action";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCurrentUser } from "../redux/user/user.selector";

class Logout extends Component {
  componentDidMount() {
    // console.log("LoggggOUT", this.props);
    const { history } = this.props;
    auth.logout();
    this.props.discardCurrentUser();
    // console.log("logut Component running");
    history.push("/");
    // window.location = "/";
  }

  render() {
    return null;
    // return <div>hash</div>;
  }
}
const mapDispatchToProps = (dispatch) => ({
  discardCurrentUser: () => dispatch(discardCurrentUser()),
});
// export default Logout;

export default connect(null, mapDispatchToProps)(Logout);
