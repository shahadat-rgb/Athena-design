import React from 'react';
import './DedicatedTeam.css'
const DedicatedTeam = () => {
    return (
      <div className="container pb-5">
        <h1 className="text-center mt-5 mb-5">Choose Your Dedicated Team</h1>

        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">$598</h2>
              <p className='text-secondary'>For Elite</p>
              <hr />
              <p>Homepage </p>
              <p>No Inner Page </p>
              <p>Asset ﬁle</p>
              <p>Source ﬁle </p>
              <p>Free Stock Photos </p>
              <p>10 Days Free Support</p>
              <p>24/7 Support</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="card-title">$399</h2>
              <p className='text-secondary'>For preparred</p>
              <br/>
              <p>Homepage </p>
              <p>No Inner Page </p>
              <p>Asset ﬁle</p>
              <p>Source ﬁle </p>
              <p>Free Stock Photos </p>
              <p>10 Days Free Support</p>
              <p>24/7 Support</p>
              <button className="contact-btn">Order Now</button>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="card-title">$199</h2>
              <p className='text-secondary'>For Basic</p>
              <hr />
              <p>Homepage </p>
              <p>No Inner Page </p>
              <p>Asset ﬁle</p>
              <p>Source ﬁle </p>
              <p>Free Stock Photos </p>
              <p>10 Days Free Support</p>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DedicatedTeam;
