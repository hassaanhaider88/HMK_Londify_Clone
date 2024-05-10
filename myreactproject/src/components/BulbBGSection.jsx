import React from "react";
import "./BulbBGSectionCss.css";
import BGBulbIMg from "../assets/BGBulbImg.jpg";
const BulbBGSection = () => {
  return (
    <div style={{marginBottom:'100px'}}>
      <div id="HeadingAndParaCNT">
        <div id="BulbHeading">
          <h1>
            Enter the world of all <br className="BreakTag" /> fashion trends
          </h1>
        </div>
        <div id="BulbParagraph">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            autem hic expedita facilis dignissimos similique!Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur autem hic expedita
            facilis dignissimos similique!
          </p>
        </div>
      </div>
      <div id="BgBulbContainer">
        <img src={BGBulbIMg} alt="" width="90%" />
      </div>
    </div>
  );
};

export default BulbBGSection;
