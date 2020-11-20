import React from "react";
import img1 from "../../images/Group 65@2x.png";
import img2 from "../../images/Group 66@2x.png";
import img3 from "../../images/Group 69@2x.png";
import img4 from "../../images/Group 72@2x.png";
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="line">
      <div className="container mb-5">
        <div className="text-center">
          <h1> What we do</h1>
          <p>
            Our main focus is to make the User Experience very <br /> simple and
            easy. Simplicity is our Strength.
          </p>
        </div>
        </div>
        <div className="container mb-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card card-hover text-center">
              <img src={img1} alt="" className="card-img-top img-fluid w-50"  style={{margin: '0 auto'}} />
              <div className="card-body">
                <h6 class="card-text" style={{ color: " #413960" }}>
                  Experience Design
                </h6>
                <p className="card-text">
                  <small className="text-muted">
              The point of using Lorem Ipsum is that it has a more-or-less normal.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-hover text-center">
              <img src={img2} alt="" className="card-img-top img-fluid w-50" style={{margin: '0 auto'}} />
              <div className="card-body">
                <h6 class="card-text" style={{ color: " #413960" }}>
                  Interface Design
                </h6>
                <p className="card-text">
                  <small className="text-muted">
              The point of using Lorem Ipsum is that it has a more-or-less normal.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-hover text-center">
              <img src={img3} alt="" className="card-img-top img-fluid w-50" style={{margin: '0 auto'}} />
              <div className="card-body">
                <h6 class="card-text" style={{ color: " #413960" }}>
                Prototyping
                </h6>
                <p className="card-text">
                  <small className="text-muted">
              The point of using Lorem Ipsum is that it has a more-or-less normal.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-hover text-center">
              <img src={img4} alt="" className="card-img-top img-fluid w-50" style={{margin: '0 auto'}} />
              <div className="card-body">
                <h6 class="card-text" style={{ color: " #413960" }}>
                Illustration
                </h6>
                <p className="card-text">
                  <small className="text-muted">
              The point of using Lorem Ipsum is that it has a more-or-less normal.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
