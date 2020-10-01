import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "../login";

const useStyles = makeStyles((theme) => ({
  loginCard: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundImage: `url('https://www.frxcash.com/images/b11.png')`,
  },
}));

const LoginModal = (props) => {
  const classes = useStyles();

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      {/* Auth Modal */}
      <div className="modal fade" id="loginModal">
        <div
          className="modal-dialog"
          style={{ marginTop: 130, marginRight: 330 }}
        >
          <div className="modal-content" style={{ width: 600 }}>
            <div className="row">
              <div className={`col-md-6 ${classes.loginCard}`}></div>

              <div className="col-md-6">
                <div className="modal-body">
                  <div>
                    <button
                      className="text-right"
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <LoginForm />
                  <div>
                    <h5 className="text-success ml-1 mt-2">
                      Login Via Social{" "}
                    </h5>
                    <a
                      href="/auth/google"
                      type="button"
                      className="btn btn-outline-danger mt-2"
                      style={{
                        marginLeft: 22,
                        fontSize: 10,
                        fontFamily: "verdana",
                      }}
                    >
                      <i className="fa fa-google" aria-hidden="true"></i> |
                      Login with google{" "}
                    </a>
                    <a
                      href="/auth/facebook"
                      type="button"
                      className="btn btn-outline-primary mt-3"
                      style={{
                        marginLeft: 22,
                        fontSize: 10,
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
      </div>
    </React.Fragment>
  );
};

export default LoginModal;
