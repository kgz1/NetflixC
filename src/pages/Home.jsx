import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import herobanner from '../assets/hero_banner.jpg'
import herotitle from '../assets/hero_title.png'
import playicon from '../assets/play_icon.png'
import infoicon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='hero'>
              <img src={herobanner} alt="HeroBanner" className='banner-img'/>
              <div className="hero-caption">
                <img src={herotitle} alt="herotitle" className='caption-img'/>
                <p>
                  Discovering his ties to a secret ancient order, a young man living 
                  in modern Instabul embarks on a quest to save city from an immortal enemy!</p>
                  <div className="hero-btns">
                      <button className='btn'><img src={playicon} alt="PlayIcon" />Play</button>
                      <button className='btn dark-btn'><img src={infoicon} alt="InfoIcon" />More Info</button>
                  </div>
                  <TitleCards />
              </div>
        </div>
        <div className="more-cards">
          <TitleCards  title="Blockbuster Movies" category={"top_rated"}/>
          <TitleCards title="Only on Netflix" category={"popular"}/>
          <TitleCards title="Upcoming" category={"upcoming"}/>
          <TitleCards title="Topics for you" category={"now_playing"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home