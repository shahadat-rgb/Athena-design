import React from "react";
import Achievements from "../Achievements/Achievements";
import Footer from "../Footer/Footer";
import GetDesign from "../GetDesign/GetDesign";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RunningProjects from "../RunningProjects/RunningProjects";
import Team from "../Team/Team";
import WhatWeDo from "../WhatWeDO/WhatWeDo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <RunningProjects></RunningProjects>
      <Achievements></Achievements>
      <Team></Team>
      <GetDesign></GetDesign>
      <Footer></Footer>
    </div>
  );
};

export default Home;
