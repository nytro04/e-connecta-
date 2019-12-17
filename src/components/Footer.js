import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-white text-center">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span>{" "}
              E-Connecta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
