import Footer from "../footer";
import Header from "../Header";
import DetailsContent from "./detailsContent";
import React, { Component } from "react";
class productDetail extends Component {
  state = {};
  render() {
    const { match, history, location } = this.props;
    return (
      <div>
        <Header />
        <DetailsContent history={history} location={location} match={match} />
        <Footer />
      </div>
    );
  }
}

export default productDetail;
