import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import assets from "../../assets/img/assets";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <img src={assets.hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
