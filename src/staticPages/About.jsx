import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import profilePic from '../assets/images/profilePic.png'

const About = () => {


  return (
    <div>
      <NavBar />
      <div className='content' id="about">
        <div className='about-section' id='about-me'>
          <img src={profilePic} alt='Profile picture' loading='eager' />
          <div className='text-bounding-box'>
            <div className='color-box' id="color1">
              <div className='bio'>
                <div class="outline-overlay"></div>
                <div className='text-secondary'>about me</div>
                Hi there! I’m Cathy. I’m a designer who loves to chase wherever my creativity and curiosity take me. By day,
                I’m a UX designer diving into complex problems and transforming them into simple, meaningful experiences.
                By night, you’ll find me sketching, cooking new recipes, or obsessing over getting the interactions just
                right in my latest VR project.
                <br /><br />
                I fell in love with design at Dartmouth College where I graduated with a degree in Cognitive Science focused in
                <span className='bold highlight-dark-pink'> Human-Computer Interaction</span> along with minors in
                <span className='bold highlight-dark-pink'> Human-Centered Design</span> and
                <span className='bold highlight-dark-pink'> Digital Arts</span>. I'm currently a
                <span className='bold highlight-dark-pink'> UI/UX designer at Capital One.</span>
              </div>
              </div>
              <div className='color-box' id="color2">
              <div className='bio'>
                <div class="outline-overlay"></div>
                <div className='text-secondary'>about my portfolio</div>
                This journey started off with me as a designer, unable to find the motivation to update my portfolio. I’ve always struggled
                to fit my work within a traditional portfolio format. So when I stumbled upon the amazing 3D portfolios out there, something clicked.
                <br /><br />
                I wanted to create my own interactive showcase—weaving together my love for design, 3D modeling, and game design. The freedom allowed
                me to experiment and make my portfolio truly my own. The ideas were easy, though the coding definitely was not. But, seeing the room
                I concepted, designed, and developed come together made it well worth it—and gave me the motivation to finally write a case study or two.
                <br /><br />
                I’ve had a ton of fun in the process. Thanks for taking the time to explore! ❤️
              </div>
            </div>
          </div>
          <div className='swatch'>
            art doodles
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
