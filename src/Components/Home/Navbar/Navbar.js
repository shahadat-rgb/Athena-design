import React from 'react';
import logo from '../../../Illustration/Group 86.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
      <img style={{height:'50px'}} src={logo}/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
              <a class="nav-link mr-3" href="#">Home</a>
        </li>
        <li class="nav-item">
           <a class="nav-link mr-3" href="#">About </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="#">Our Team</a>
        </li>
           <button className='contact-btn'>Contact us</button>
      </ul>
    </div>
  </nav>
   </div>
    );
};

export default Navbar;