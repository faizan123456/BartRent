import React from "react";
import auth from "../services/authService";
const CurrentUser = () => {
  return (
    <div>
      <h2>{auth.getCurrentUser()}</h2>
      {/* <h2>{getJwt()}</h2> */}
    </div>
  );
};

export default CurrentUser;
