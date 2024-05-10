import React from "react";
import "./ReviewsSectionCss.css";
import HubspotImg from "../assets/HubspotImg.jpg";
import AirbnbImg from '../assets/AirbnbImg.png';
import BookMyShow from '../assets/BookMyShowImg.png'

const ReviewsSection = () => {
  return (
    <div style={{background:'red'}}>
      <section id="ReviewSectionContainer">
        <div id="SemiColonContainer">
          <i class="ri-double-quotes-l"></i>
        </div>
        <div id="HeadingContainer">
          <h1>
            Real Stories from <br /> Real Customers
          </h1>
          <p>Get inspired by these stories.</p>
        </div>

        <div id="HubSpotReviewCNT">
          <div className="ImgOfReview">
            <img src={HubspotImg} alt="" height="120px" />
          </div>

          <span>
            <i class="ri-double-quotes-l ReviewIcon"></i>
          </span>
          <span className="ReviewPara">
           <p>
           to quickly start my statup landing page design, I was looking for a
            lancing page UI kit HMK CodeWeb is one of the best landing page Ui
            kit have come across it's so flexible, well organised and easily
            editable.
           </p>
          </span>
          <h2>Flayd Miles</h2>
          <span>Vice President, GoPro</span>
        </div>

 
        <div id="ArbnbReviewCNT">
          <div className="ImgOfReview ">
            <img src={AirbnbImg} alt="" height="120px" />
          </div>
          <span>
            <i class="ri-double-quotes-l ReviewIcon"></i>
          </span>
          <span className="ReviewPara">
           <p>
           to quickly start my statup landing page design, I was looking for a
            lancing page UI kit HMK CodeWeb is one of the best landing page Ui
            kit have come across it's so flexible, well organised and easily
            editable.
           </p>
          </span>
          <h2>Jane Cooper</h2>
          <span>Ceo, Airbnb</span>
        </div>

          <div id="BookMyShowReviewCNT">
          <div className="ImgOfReview">
            <img src={BookMyShow} alt="" height="120px" />
          </div>
          <span>
            <i class="ri-double-quotes-l ReviewIcon"></i>
          </span>
          <span className="ReviewPara">
            <p>
            to quickly start my statup landing page design, I was looking for a
            lancing page UI kit HMK CodeWeb is one of the best landing page Ui
            kit have come across it's so flexible, well organised and easily
            editable.
            </p>
          </span>
          <h2>Flayd Miles</h2>
          <span>Vice President, GoPro</span>
        </div> 
      </section>
    </div>
  );
};

export default ReviewsSection;
