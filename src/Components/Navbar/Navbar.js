import React from "react";
import logo from "../../images/Group 86.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a class="navbar-brand" href="#home">
          <img src={logo} alt="" className="brand-logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2 px-2 active">
              <a className="nav-link active" href="#home">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item mx-2 px-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item mx-2 px-2">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li class="nav-item mx-2 px-2">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item mx-2 px-2">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li class="nav-item mx-2">
              <button className="btn contact-button">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
