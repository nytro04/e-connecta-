import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-White.png";

// import { Link, Events, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="nav-header navbar navbar-expand-sm navbar-light bg-transparent fixed-top"
    >
      <Link className="navbar-brand" to="/">
        <img className="img-fluid logo mt-2" src={logo} alt="logo" />
      </Link>

      <div className="nav-header__social-media">
        <a
          href="https://www.facebook.com/econnecta.limit.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook mr-3  nav-header__social-media--facebook"></i>
        </a>
        <a
          href="https://twitter.com/@e_connecta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter mr-3 nav-header__social-media--twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/econnecta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram nav-header__social-media--instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
