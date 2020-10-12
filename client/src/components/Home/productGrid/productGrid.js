import React from "react";
import Footer from "../footer";
import Header from "../Header";
import GridContent from "./gridContent";

const ProductGrid = (props) => {
  console.log("Geneuin Grid Genuin", props);
  const { match, history, location } = props;
  return (
    <div>
      <Header />
      <GridContent match={match} history={history} location={location} />
      <Footer />
    </div>
  );
};

export default ProductGrid;
