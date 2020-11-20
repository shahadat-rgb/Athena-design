import React from "react";
import "./Achievements.css";
import happy from "../../../Illustration/happy@2x.png";
import tropy from "../../../Illustration/marketing@2x.png";
import crazy from "../../../Illustration/surface1@2x.png";
import running from "../../../Illustration/transportation@2x.png";

const achievement = [
  {
    img: happy,
    number: "700+",
    text: "Happy Clients",
  },
  {
    img: tropy,
    number: "140+",
    text: "Projects Completed",
  },
  {
    img: crazy,
    number: "25+",
    text: "Crazy Minds",
  },
  {
    img: running,
    number: "75+",
    text: "Running Projects",
  },
];

const Achievements = () => {
  return (
    <section>
      <div className="container achievement">
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

          <div class="col-md-7">
            <div class="row">
              {achievement.map((achieve) => (
                <div class="col-md-5 p-3 my-2 mx-md-2 mx-5 achievement-card">
                  <div class="row align-items-center justify-content-center">
                    <div class="col-6">
                      <img
                        class="img-fluid d-block ml-auto"
                        src={achieve.img}
                        alt=""
                      />
                    </div>
                    <div class="achievement-text text-muted col-6">
                      <h4>{achieve.number}</h4>
                      <small>{achieve.text}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Achievements;
