import React from "react";
import "./AchivementsCss.css";
import ReactProjectImgMbl from "../assets/ReactProjectImgMbl.jpg";

const Achievements = () => {
  return (
    <div id="Mian">
      <section id="AchivementsSectionContainer">
        <div id="AchivementsHeading">
          <h1>
            Our 18 years of <br /> achievements
          </h1>
          <p>With our super powers we have reached this</p>
        </div>
        <div id="RightAchivementsIcons">
          <div className="AchivementCards">
            <i class="ri-download-2-fill IconInAchivments"></i>
            <div>
              <span className="Numbers">10,000+ </span> <br />{" "}
              <span>Downloads per day</span>
            </div>
          </div>

          <div className="AchivementCards">
            <i class="ri-user-heart-fill IconInAchivments"></i>
            <div>
              <span className="Numbers">2 Million </span> <br />{" "}
              <span>User</span>
            </div>
          </div>

          <div className="AchivementCards">
            <i class="ri-service-line IconInAchivments"></i>
            <div>
              <span className="Numbers">500+ </span> <br />{" "}
              <span>Happy Clients</span>
            </div>
          </div>

          <div className="AchivementCards">
            <i class="ri-global-line IconInAchivments"></i>
            <div>
              <span className="Numbers">140 </span> <br />{" "}
              <span>Countries</span>
            </div>
          </div>
        </div>
      </section>
      <section id="LeftAndRightImgContentCNT">
        <div id="LeftImgContentCNT">
          <div id="LeftImgContent">
            <img src={ReactProjectImgMbl} alt="" width={220} height={1200} />
          </div>
        </div>
        <div id="RightImgContentCNT">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="Breaktag" />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br className="Breaktag" />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br  className="Breaktag"/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br  className="Breaktag"/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br className="Breaktag" />
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br className="Breaktag" />
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Get Started <i class="ri-arrow-right-line"></i></button>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
