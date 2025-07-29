import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';

import profilePic from '../assets/images/profilePic.png'

const About = () => {

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
  });
};

  return (
    <div id="about-spacing"> 
      <NavBar />
      <div className='content' id="about">
        <div className='about-section'>
          <img src={profilePic} data-pin-nopin="true" alt='Profile picture' loading='eager' />
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
                This journey started off with me unable to find the motivation to update my portfolio. I struggled
                to fit my work within a traditional portfolio format, so when I stumbled upon the amazing 3D portfolios out there, something clicked.
                <br /><br />
                I wanted to create my own interactive showcase—weaving together my love for design, 3D modeling, and game design. The ideas were easy, 
                though the coding definitely was not. But, seeing the room
                I concepted, designed, and developed come together made it well worth it—and gave me the motivation to finally write a case study or two.
                <br /><br />
                I’ve had a ton of fun in the process. Thanks for taking the time to explore! ❤️
              </div>
            </div>
          </div>
          <div className='color-swatches'>
            <div className='swatch' id="decorative">
              <div className="swatch-box" id="box1" />
              <div className="swatch-box" id="box2" />
              <div className="swatch-box" id="box3" />
              <div className="swatch-box" id="box4" />
              <div className='swatch-title'>&nbsp;</div>
            </div>
            <div className='swatch'>
              <div className="swatch-box" id="box1">
                <div className="inline-row">
                  In my free time I make art (sometimes post to my Instagram <a
                    href="https://www.instagram.com/firesheepstudio/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={trackLinkClick.bind(this, 'About/Insta', 'Insta Click', 'About page')}
                  >@firesheepstudio</a>), table art markets with friends, and run an <a
                    href="https://www.etsy.com/shop/FireSheepStudio"
                    target="_blank"
                    rel="noreferrer"
                    onClick={trackLinkClick.bind(this, 'About/Insta', 'Insta Click', 'About page')}
                  >Etsy store</a>!
                </div>
                <div className='labels' id="color-light">
                  <b>art doodles</b>
                  <div>#D0F0EF</div>
                </div>
              </div>
              <div className="swatch-box" id="box2">
                I love to take on creative projects. This portfolio scratched that itch for now, but next is making progress on my open-world game in Unity!
                <div className='labels' id="color-light">
                  <b>tech shenanigans</b>
                  <div>#AFE3DF</div>
                </div>
              </div>
              <div className="swatch-box" id="box3">
                I’m a huge foodie and an aspiring home chef. Currently trying to maintain my 103 week Beli streak and making tofu from scratch!
                <div className='labels' id="color-dark">
                  <b>food adventures</b>
                  <div>#65AEB3</div>
                </div>
              </div>
              <div className="swatch-box" id="box4">
                <div>
                  Curious about my work or just want to say hi? Please reach out—would love to chat!
                  <div className='spacing-025' />
                  <ul>
                    <li><a href="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      id="resume"
                      onClick={trackLinkClick.bind(this, 'Contact Links', 'Resume Click', 'About page')}
                    >Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/xinai-cathy-wu"
                      target="_blank"
                      rel="noreferrer"
                      id="linkedin"
                      onClick={trackLinkClick.bind(this, 'Contact Links', 'LinkedIn Click', 'About page')}
                    >Linkedin</a></li>
                    <li><a href="mailto:xinai.cathy.wu@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      id="mail"
                      onClick={trackLinkClick.bind(this, 'Contact Links', 'Mail Click', 'About page')}
                    >Email</a></li>
                  </ul>
                </div>
                <div className='labels' id="color-light">
                  <b>say hi!</b>
                  <div>#2C6B74</div>
                </div>
              </div>
              <div className='swatch-title'>Cathy's colors</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  );
}

export default About;
