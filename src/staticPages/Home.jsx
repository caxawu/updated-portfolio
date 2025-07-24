import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

import AnimText from './AnimText';
import placeholderInteractive from '../assets/images/placeholderInteractive.png'
import placeholderStatic from '../assets/images/placeholderStatic.png'
import loopyArrow from '../assets/images/loopyArrow.png'
import profilePic from '../assets/images/profilePic.png'

const About = () => {

  let navigateTo = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    navigateTo('interactive');  // Navigate to the new page
  };

  const triggerRotation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 150); // Reset after animation duration
    }
  };

  return (
    <div>
      <NavBar />
      <div className="home-page">
        <div className="home-left">
          <div className='blink-text'>
            <AnimText delay={1} />
          </div>
          <div className='labels'>
            <div className='highlight-pink text-title spacing-05'>step inside my room</div>
            <div className='text-secondary light label-secondary'> Explore my projects in 3D<br />by clicking around the room</div>
          </div>
        </div>

        <div className='home-right'>
          <div className='img-w-outline'>
            <div className='img-container'>
              <img
                src={placeholderInteractive}
                alt='Interactive portfolio'
                loading='eager'
                onClick={handleImageClick}  // Handle the click to navigate
                style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
              />
              <div class="outline-overlay" />
            </div>
          </div>
          <div className='to-static text-secondary light'>
            Learn about my projects in a classic format
            <span className="nav-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
              go to static portfolio
            </span>
          </div>
        </div>
        <img src={loopyArrow} alt='dotted arrow' loading='eager' className='loopy-arrow' />
      </div>
                
    </div>
  );
}

export default About;
