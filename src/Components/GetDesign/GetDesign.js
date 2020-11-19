import React from "react";
import "./GetDesign.css";
const GetDesign = () => {
  return (
    <div className="container text-center my-5">
      <h2>Get your design right, right now</h2>
      <h6>Be the first know our latest offers and updates!</h6>

      <div className="design-form">
        <input
          className="email-input"
          placeholder="Enter your email address"
          type="email"
        />
        <div className="btn started-btn">Get Started</div>
      </div>
    </div>
  );
};

export default GetDesign;
