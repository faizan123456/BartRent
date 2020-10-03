import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "../register";

const useStyles = makeStyles((theme) => ({
  registerCard: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundImage: `url('https://assistassetrecovery.com/wp-content/uploads/2016/08/register-background.jpg')`,
  },
}));

const RegisterModal = (props) => {
  const classes = useStyles();
  const [isRegister, setIsRegister] = useState(true);

  return (
    <React.Fragment>
      {/* Auth Modal */}
      <div className="modal fade" id="registerModal">
        <div
          className="modal-dialog"
          style={{ marginTop: 127, marginRight: 450 }}
        >
          <div className="modal-content" style={{ width: 520 }}>
            <div className={`"modal-body" ${classes.registerCard}`}>
              <div className="container">
                <div>
                  <button
                    className="text-right"
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    style={{ marginRight: 2 }}
                  >
                    &times;
                  </button>
                </div>
                <RegisterForm />
                <div>
                  <h3 className="text-dark mt-3">Login Via Social </h3>
                  <a
                    href="/auth/google"
                    type="button"
                    className="btn btn-danger mt-2 mb-5"
                    style={{
                      marginLeft: 22,
                      fontSize: 14,
                      fontFamily: "verdana",
                    }}
                  >
                    <i className="fa fa-google" aria-hidden="true"></i> | Login
                    with google{" "}
                  </a>
                  <a
                    href="/auth/facebook"
                    type="button"
                    className="btn btn-primary mt-2 mb-5"
                    style={{
                      marginLeft: 22,
                      fontSize: 14,
                      fontFamily: "verdana",
                    }}
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i> |
                    Login with facebook{" "}
                  </a>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterModal;
