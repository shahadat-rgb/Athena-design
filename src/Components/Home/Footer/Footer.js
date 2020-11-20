import React from 'react';
import './Footer.css'
import logo from '../../../Illustration/Group 86.png'
import facebook from "../../../Illustration/facebook-logo-in-circular-shape@2x.png"
import linked from "../../../Illustration/linkedin (2)@2x.png"
import twiter from "../../../Illustration/twitter (4)@2x.png"
import driible from "../../../Illustration/dribbble (1)@2x.png"
const Footer = () => {
    return (
      <div className="container mt-5 pb-5 text-center">
        <h2>
          <b>Get your design right, right now</b>
        </h2>
        <p>Be the ﬁrst know our latest offers and updates</p>
        <div class="search-box col-md-6 my-5 mx-auto">
            <input id="query" type="eamil"  class="form-control p-3" placeholder="Write your email address"/>
            <button class="btn btn-danger search-btn btn-rounded">Get Started</button>
        </div>
          <div className="row">
              <div className="col-md-5 icon">
                  <img style={{height:'100px',marginBottom:'30px'}} src={logo} alt=""/> <br/>
                  <span>
                  <img src={facebook} alt=""/>
                  <img src={linked} alt=""/>
                  <img src={twiter} alt=""/>
                  <img src={driible} alt=""/>
                  </span>
              </div>
              <div className="col-md-2 pt-3">
                 <p>Features</p>
                 <p>Enterprise</p>
                 <p>Pricing</p>
                 
              </div>
              <div className="col-md-2 pt-3">
                  <p>Blog</p>
                  <p>Help Center</p>
                  <p>Contact Us</p>
                  <p>Status</p>
     

              </div>
              <div className="col-md-2 pt-3">

                  <p>About Us</p>
                  <p>Terms of Service</p>
                  <p> Security </p>
                  <p>Login</p>

              </div>
          </div>
      </div>
    );
};

export default Footer;
