import react from "react";
import "./MobileProjectAppCss.css";
import googlePlaystor  from "../assets/google_playstoreimg.png";
import AppPlaystor from "../assets/App_storeimg.png";
import ManageAppImg from "../assets/ManageAppImg.jpg";


const MobileProjectApp = () => {
  return (
    <section>
      <div id="ManageProjectSection">
        <div id='ManageHeadingCNT'>
            <div id="ManageHeading">
            <h1>Manage your projects <br className="BreakTag"/> from your mobile </h1>
            <p>
            to quickly start my statup landing page design, I was looking for a
            lancing <br className="BreakTag"/> page UI kit HMK CodeWeb  is one of the best landing page Ui
            kit have come across it's so flexible, well organised and easily
            editable.
            </p>
            </div>
            <div id='Playstorheading'>
                <h1>Get the App</h1>
                <div id='PlaystoreLogoInProjectSCT'>
              <img className="IMAGES1" src={googlePlaystor} />
              <img className="IMAGES" src={AppPlaystor} />
            </div>
            </div>
        </div>
        <div id='ManageIMG'>
        <img className="RightImgInManageSCT" src={ManageAppImg} width="80%"/>
        </div>
      </div>
    </section>
  );
};

export default MobileProjectApp;
