import React from 'react';
import converted from '../../../Illustration/16 [Converted]@2x.png'
import './Header.css'
const Header = () => {
    return (
      <div className="header-background">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h1 style={{ fontSize: "60px", lineHeight: "80%" }}>
                <b>Florence</b>
              </h1>
              <h1 style={{ fontSize: "60px" }}>
                <b>Agency</b>
              </h1>
              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                id ex voluptatem sed maxime corrupti animi inventore
                reprehenderit illo? Quibusdam architecto debitis odit iusto !
              </p>
              <button className="contact-btn mt-4">See Pricing</button>
            </div>
            <div className="col-md-6">
              <img style={{ width: "100%" }} src={converted} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;