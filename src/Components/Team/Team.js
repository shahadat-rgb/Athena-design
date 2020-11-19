import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <section>
      <div className="container my-5">
        <h1 className="text-center">Choose Your Dedication Team</h1>

        <div className="row my-5">
          <div className="col-md-4 col-lg-4 col-sm-12 text-center">
            <div className="card">
              <h1>$199</h1>
              <h6>For Basic</h6>
              <hr />
              <h6>Home Page</h6>
              <h6>No inner page</h6>
              <h6>Asset File</h6>
              <h6>Source file</h6>
              <h6>Free Stock Photos</h6>
              <h6>10 Days Free Support</h6>
              <h6>24/7 support</h6>
              <button className="btn order-button">order now</button>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 text-center">
            <div className="card">
              <h1>$399</h1>
              <h6>For preferred</h6>
              <hr />
              <h6>Home Page</h6>
              <h6>4 inner page</h6>
              <h6>Asset File</h6>
              <h6>Source file</h6>
              <h6>Free Stock Photos</h6>
              <h6>10 Days Free Support</h6>
              <h6>24/7 support</h6>
              <button className="btn order-button">order now</button>
            </div>
          </div>
          <div className="col-md-4  col-lg-4 col-sm-12 text-center">
            <div className="card">
              <h1>$599</h1>
              <h6>For Elite</h6>
              <hr />
              <h6>Home Page</h6>
              <h6>8 inner page</h6>
              <h6>Asset File</h6>
              <h6>Source file</h6>
              <h6>Free Stock Photos</h6>
              <h6>10 Days Free Support</h6>
              <h6>24/7 support</h6>
              <button className="btn order-button">order now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
