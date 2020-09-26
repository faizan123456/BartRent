import React from "react";
import Content from "./MainContent";
import Header from "./Header";
import Footer from './footer';

const Landing = () => {
  return (
       <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
};

export default Landing;
