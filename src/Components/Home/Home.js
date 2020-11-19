import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RunningProjects from "../RunningProjects/RunningProjects";
import WhatWeDo from "../WhatWeDO/WhatWeDo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <RunningProjects></RunningProjects>
    </div>
  );
};

export default Home;
