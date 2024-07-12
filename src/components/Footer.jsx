import React from 'react'
import './Footer.css'
import youtubeicon from '../assets/youtube_icon.png'
import twittericon from '../assets/twitter_icon.png'
import instaicon from '../assets/instagram_icon.png'
import facebookicon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div
    className='footer'>
      <div className="footer-icons">
        <img src={facebookicon} alt="YIcon" />
        <img src={instaicon} alt="YIcon" />
        <img src={twittericon} alt="YIcon" />
        <img src={youtubeicon} alt="YIcon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Coorporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@2024 By Netflix</p>
    </div>
  )
}

export default Footer