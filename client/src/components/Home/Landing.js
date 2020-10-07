import React from "react";
import Content from "./MainContent";
import Header from "./Header";
import Footer from "./footer";
import Slider from "./slider";

const Landing = (props) => {
  const { history } = props;
  console.warn(">>  >landing props", history);

  return (
    <div className="App">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
};

export default Landing;
