import React from "react";
import "./HeroSectionCss.css";
import ProjectImg from "../assets/ReactProjectImgMbl.jpg";
import Airbnb from "../assets/AirbnbImg.png";
import Hubspot from "../assets/HubspotImg.jpg";
import Google from "../assets/GoogleImg.png";
import Microsoft from "../assets/MicrosoftImg.png";
import Walmart from "../assets/WalmartImg.jpg";
import FedEx from "../assets/FedExImg.jpg";


const HeroSection = () => {
  return (
    <div id="MainHeroSection">
      <div id="HeroHeadingAndImgContainer">
        <div id="HeroHeadingContainer">
          <h1>
            Organise projects. <br /> Get more done.{" "}
          </h1>
          <button>Get Started</button>
        </div>
        <div id="HeroImgContainer">
          <img src={ProjectImg} alt="" />
        </div>
        <div id="LeftPuttiOne"></div>
        <div id="LeftPuttiTwo"></div>
         <div id="RightPuttiThree"></div>
        <div id="RightPuttiFour"></div>
        <div id="RightPuttiFive"></div> 
      </div>

      <div id="CompanyLogoLikeGoogleETC">
        <div>
            <img width="160px" height={100} src={Airbnb} alt="" />
        </div>
        <div>
            <img width="160px" height={100} src={Hubspot} alt="" />
        </div>
        <div>
            <img width="160px" height={100} src={Google} alt="" />
        </div>
        <div>
            <img width="160px" height="60px" src={Microsoft} alt="" />
        </div>
        <div>
            <img width="150px" height="190px" src={Walmart} alt="" />
        </div>
        <div>
            <img width="160px" height={100} src={FedEx} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
