import React, { Component } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectUser } from "../redux/user/user.selector";

// class CurrentUser extends Component {
//   state = {};

//   componentDidMount() {
//     console.log("yes bro it is ", this.props.currentUser);
//     const { email, name } = this.props.currentUser;
//     console.log(name, email);
//   }
//   render() {
//     // const { currentUser } = this.props;
//     // const json = this.props.currentUser;
//     // const value = currentUser[0];
//     // console.log("yes current user", currentUser.email);
//     // if (this.props.currentUser.length > 0) {
//     //   console.log(this.props.currentUser[0].name);
//     // }

//     // var arr = [];
//     // Object.keys(json).forEach(function(key) {
//     //   arr.push(json[key]);
//     // });
//     // console.log(arr);
//     // return <ul>{arr.map(item => <MyAppChild key={item.label} label={item.label} value={item.value} />)}</ul>;

//     return (
//       <div>
//         <p>current</p>
//         {/* <h2>
//           ID
//           {this.props.currentUser.map(c => (
//             <h1>c.email</h1>
//           ))}
//         </h2> */}
//         {/* <h2>Email {this.state.email}</h2>
//         <h2>Name {this.state.name}</h2> */}
//       </div>
//     );
//     // const user = this.state.user;

//     // return <div>{user.email}</div>;
//   }
// }

const CurrentUser = props => {
  if (props.currentUser) {
    return (
      <div>
        <h1> {props.currentUser.name}</h1>
        <h1> {props.currentUser.isAdmin} </h1>
      </div>
    );
  }
  // return <div>{props.currentUser}</div>;
  return null;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CurrentUser);
