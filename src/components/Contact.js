import React from "react";

export const Contact = () => {
  return (
    <div className="contact py-4">
      <div className="row">
        <div className="col">
          <div className="container text-center text-white">
            <h3 className="display-5 mt-5 mb-5 ">Contact</h3>

            <div className="row">
              <div className="col-md-4">
                <i class="fas fa-envelope mb-3"></i>
                <p>sales@e-connecta.com</p>
                <p> info@e-connecta.com</p>
              </div>

              <div className="col-md-4">
                <i class="fas fa-phone mb-3"></i>
                <p>+233 30 291 6047</p>
                <p>+233 30 291 6044</p>
              </div>
              <div className="col-md-4">
                <i class="fas fa-map-marker-alt mb-3"></i>
                <p>One Airport Square, 4th Floor</p>
                <p> Plot No. 21, Airport City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
