import React from "react";
import "./Achievements.css";
import happy from "../../images/happy@2x.png";
import tropy from "../../images/marketing@2x.png";
import crazy from "../../images/surface1@2x.png";
import running from "../../images/transportation@2x.png";

const Achievements = () => {
  return (
    <section>
      <div className="container Achievements">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12 d-flex justify-content-center align-items-center">
            <div>
              <h1>Our Achievements</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                obcaecati similique nostrum ab omnis, itaque voluptates
                voluptate mollitia consectetur ipsa commodi, quo consequatur
                ratione corrupti sunt, voluptatem eaque veniam non!
              </p>
            </div>
          </div>

          <div className="col-md-7 col-lg-7 col-sm-12 flex-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="card  mb-5 card1">
                  <div className="row py-3  px-4">
                    <div className="col-md-5">
                      <img
                        src={happy}
                        alt=""
                        className="card-img-top img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </div>

                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                      <div>
                        <h2>700+</h2>
                        <h5>Happy Clients</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 card2">
                  <div className="row ">
                    <div className="col-md-5">
                      <img
                        src={tropy}
                        alt=""
                        className="card-img-top img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </div>

                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                      <div>
                        <h2>140+</h2>
                        <h5>Projects completed</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 card3">
                  <div className="row py-3  mx-5">
                    <div className="col-md-5">
                      <img
                        src={crazy}
                        alt=""
                        className="card-img-top img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </div>

                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                      <div>
                        <h2>25+</h2>
                        <h5>Crazy Minds</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 card4">
                  <div className="row py-3  mx-5">
                    <div className="col-md-5">
                      <img
                        src={running}
                        alt=""
                        className="card-img-top img-fluid"
                        style={{ margin: "0 auto" }}
                      />
                    </div>

                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                      <div>
                        <h2>75+</h2>
                        <h5>Running Projects</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
