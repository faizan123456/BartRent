import React from "react";
import img from "./listing_img.png";
import Card from "../components/common/card";
const myAccount = (props) => {
  console.log("My Account", props);
  return (
    <div>
      <h1>Account Overview</h1>
      <br />
      <Card
        logo={img}
        title={"My Listings"}
        btnText={"Create Listings"}
        btnLink={"/redux-product-form"}
        linksArray={[
          { name: "Active Listings", to: "/products" },
          { name: "Expire Listings", to: "#" },
          { name: "Draft Listing", to: "#" },
        ]}
      />
    </div>
  );
};

export default myAccount;
