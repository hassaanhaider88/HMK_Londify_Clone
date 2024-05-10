import googlePlaystor from "../assets/google_playstoreimg.png";
import AppPlaystor from "../assets/App_storeimg.png";
import Logo from "../assets/HMK_CodeWeb.logo.jpg";

import "./FooterCss.css";
const Footer = () => {
  return (
    <section id="FooterSection">
      <div id="FooterLeftRightDivCNT">
        <div id="FooterLeftSCT">
          <div>
            <div id="LogoInNavbar">
              <img src={Logo} width="50" height="50" />
            </div>
          </div>
          <div>
            <b>Downlaod Now</b>
            <b>License</b>
          </div>
          <div id="AboutUsDiv">
            <b>About </b>
            <b>Features</b>
            <b>Pricing</b>
            <b>Careers</b>
            <b>Help</b>
            <b>Privacy Policy</b>
          </div>
          <hr/>
          <hr/>
          <hr/>

          <div>
            <p className='Copy'>Copy Right &copy; HMK_CodeWeb 2024</p>
          </div>
        </div>




        <div id='RIghtFooterSCT'>
          <div>
            <h1>Get the App</h1>
            <div id="PlaystoreLogoInFooter">
              <img className="IMAGES1InFooter" src={googlePlaystor} />
              <img className="IMAGESInFooter" src={AppPlaystor} />
            </div>
          </div>
        </div> 


      </div>
    </section>
  );
};

export default Footer;
