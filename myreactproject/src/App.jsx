import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from "./components/ServiceSection"
import ReviewsSection from './components/ReviewsSection';
import Achievements from './components/Achievements';
import BulbBGSection from './components/BulbBGSection';
import MobileProjectApp from './components/MobileProjectApp';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
      <ReviewsSection/>
      <Achievements/>
      <BulbBGSection/>
      <MobileProjectApp/>
      <Footer/>

    </div>
  )
}

export default App;