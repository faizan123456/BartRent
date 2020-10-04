import React from "react";
import { Link } from "react-router-dom";

const card = ({ logo, title, linksArray, btnText, btnLink }) => {
  //   const DetermineArray = linksArray => {
  //     linksArray.map(link => <Link to="#">{link}</Link>);
  //   };
  console.log("card ", btnText, btnLink);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={logo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {linksArray.map(link => (
          <div key={link.name}>
            <Link to={link.to} key={link.key}>
              {link.name}
            </Link>
          </div>
        ))}
        {/* {DetermineArray()} */}

        <Link to={btnLink} className="btn btn-primary">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default card;
