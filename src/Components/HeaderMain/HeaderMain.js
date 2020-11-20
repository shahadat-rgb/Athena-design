import React from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './HeaderMain.css'
const HeaderMain = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      <Header></Header>
    
    </div>
  );
};

export default HeaderMain;