import React from "react";
import Services from "./Services";

const Header = () => {
  return (
    <header>
      <div className="header text-center">
        <h1 className="display-4">
          Developing Businesses Through Efficient IT Solutions
        </h1>
        <Services />
      </div>
    </header>
  );
};

export default Header;
