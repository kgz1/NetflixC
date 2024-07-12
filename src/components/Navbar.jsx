import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import searchlogo from '../assets/search_icon.svg'
import bellicon from '../assets/bell_icon.svg'
import profileicon from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="navbar-left">
            <img src={logo} alt="Logo" />
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
            </div>
          <div className="navbar-right">
                  <img src={searchlogo} alt="SearchIcon" className='icons'/>
                  <p>Children</p>
                  <img src={bellicon} alt="BellIcon" className='icons'/>
                  <div className="navbar-profile">
                      <img src={profileicon} alt="ProfileIcon" className='profile'/>
                      <img src={caret_icon} alt="CaretIcon" className=''/>
                      <div className="dropdown">
                        <p>Sign Out of Netflix</p>
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Navbar