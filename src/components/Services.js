import React from "react";

const Services = () => {
  return (
    <div className="container py-5">
      <h3 className="display-5 mt-5 mb-5">Our Services</h3>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <i class="fas fa-network-wired fa-3x mb-3"></i>
          {/* <i class="fab fa-battle-net fa-3x mb-3"></i> */}
          <p className="mb-5">Enterprise Internet Connectivity Via Fibre​</p>
        </div>
        <div className="col-md-4">
          <i class="fas fa-microphone-alt fa-3x mb-3"></i>
          <p className="mb-5">Voice over Internet Protocol (VoIP)​</p>
        </div>
        <div className="col-md-4">
          <i class="fas fa-wifi fa-3x mb-3"></i>
          <p className="mb-5">
            Wide Area Network Connectivity Via Fibre (WAN)​
          </p>
          {/* <i class="fas fa-lock"></i> */}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <i class="fas fa-cloud-upload-alt fa-3x mb-3"></i>
          <p className="mb-5">Cloud Services​</p>
        </div>
        <div className="col-md-4">
          <i class="fas fa-shield-alt fa-3x mb-3"></i>
          <p className="mb-5">Information Security Services​</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
