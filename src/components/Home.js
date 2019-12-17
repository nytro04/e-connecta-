import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Contact } from "./Contact";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
