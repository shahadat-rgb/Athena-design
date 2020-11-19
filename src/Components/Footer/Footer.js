import React from "react";
import logo from "../../images/Group 86.png";

import facebook from "../../images/facebook-logo-in-circular-shape@2x.png";
import twitter from "../../images/twitter (4)@2x.png";
import linkedin from "../../images/linkedin (2)@2x.png";
import dribbble from "../../images/dribbble (1)@2x.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer container my-5 text-center">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-12">
            <img
              src={logo}
              alt=""
              className="card-img-top img-fluid w-25"
              style={{ margin: "0 auto" }}
            />

            <div className="mt-4">
              <a
                target="_blank"
                className="icon"
                href="https://www.facebook.com/"
              >
                <img src={facebook} alt="" />
              </a>
              <a target="_blank" className="icon" href="https://twitter.com/">
                <img src={twitter} alt="" />
              </a>
              <a
                target="_blank"
                className="icon"
                href="https://www.linkedin.com/"
              >
                <img src={linkedin} alt="" />
              </a>
              <a target="_blank" className="icon" href="https://dribbble.com/">
                <img src={dribbble} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-12 mt-3">
                <ul className="list-unstyled">
                  <li href="#">Features</li>
                  <li href="#">Enterprise</li>
                  <li href="#">Pricing</li>
                </ul>
              </div>

              <div className="col-md-4 col-lg-4 col-sm-12 mt-3">
                <ul className="list-unstyled">
                  <li href="#">Blog</li>
                  <li href="#">Help Center</li>
                  <li href="#">Contact Us</li>
                  <li href="#">Status</li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 mt-3">
                <ul className="list-unstyled">
                  <li href="#">About Us</li>
                  <li href="#">Terms of Service</li>
                  <li href="#">Security</li>
                  <li href="#">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
