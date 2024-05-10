import React, { useState } from 'react'
import googlePlaystor  from "../assets/google_playstoreimg.png";
import AppPlaystor from "../assets/App_storeimg.png";
import Logo from '../assets/HMK_CodeWeb.logo.jpg';
import "./NavbarCss.css";

const Navbar = () => {
const [showGooglePicsState,setShowGooglePicState]=useState(false);
const [showNavbarItemsState,setShowNavabrItemsState]=useState(false);
 
  return (
    <div>
        <div id='LogoAndNavbarItemsContainer'>

                 <div id="NavbarItemsAngLogo">
                            <div id='LogoInNavbar'>
                            <img src={Logo} width="50" height="50" />
                            </div>

                 <div id='NavbarItems' className={showNavbarItemsState ? "NavbarItemsPosition" : ""} >
                  <div className='NavbarItem'>Home</div>
                 <div className='NavbarItem'>Products </div>
                 <div className='NavbarItem'>Pricing </div>
                 <div className='NavbarItem'>Blog </div>
                 <div className='NavbarItem'>Jobs </div>
                 <div className='NavbarItem' onClick={()=> setShowGooglePicState(!showGooglePicsState)}>Menu <span>
                  {
                    showGooglePicsState?
                    <i >&#8593;</i>
                    :
                    <i>&#8595;</i>
                  }
                 
                  </span></div>
                 </div>
                 
                 </div>



            <div id='PlaystoreLogo' className={showGooglePicsState ? 'PlaystoreLogopos' : ''}>
              <img className="IMAGES1" src={googlePlaystor} />
              <img className="IMAGES" src={AppPlaystor} />
            </div>
            <div className="HumberGerIcon" onClick={()=> setShowNavabrItemsState(!showNavbarItemsState)}>
             {
               showNavbarItemsState ?
               <i >&#10006;</i>
               :
               <i >&#9776;</i>
             }
            </div>
    </div>
         

    </div>
  )

  
}

export default Navbar;
