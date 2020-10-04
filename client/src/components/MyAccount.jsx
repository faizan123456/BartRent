import React from "react";
import img from "./listing_img.png";
import Card from "../components/common/card";
const myAccount = () => {
  return (
    <div>
      <h1>Account Overview</h1>
      <br />
      <Card
        logo={img}
        title={"My Listings"}
        btnText={"Create Listings"}
        btnLink={"/new-product"}
        linksArray={[
          { name: "Active Listings", to: "/products" },
          { name: "Expire Listings", to: "#" },
          { name: "Draft Listing", to: "#" }
        ]}
      />
    </div>
  );
};

export default myAccount;
