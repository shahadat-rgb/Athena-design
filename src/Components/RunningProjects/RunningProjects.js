import React from "react";
import projects from "../../images/20 [Converted]@2x.png";
import "./RunningProjects.css";
const RunningProjects = () => {
  return (
    <section>
      <div className="container running">
      <div className="row projects">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <img src={projects} alt="" className="img-fluid project-btn" />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center px-5">
          <div>
            <h1>Stay Running & Projects</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              ipsum sunt nostrum labore officiis a, quisquam odio vero debitis,
              cumque sed quasi numquam, sint tempore perferendis?
            </p>
            <button className="btn  contact-button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default RunningProjects;
