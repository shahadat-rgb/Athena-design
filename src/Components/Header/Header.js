import React from "react";
import banner from "../../images/16 [Converted]@2x.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="container header">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
         <div>
         <h1>
            Florence <br /> agency
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button className="btn contact-button pricing-button">
            See Pricing
          </button>
         </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <img src={banner} alt="" className="img-fluid banner-btn" />
        </div>
      </div>
    </div>
  );
};

export default Header;
