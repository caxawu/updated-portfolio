import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className='content'>
      <div className='top-container'>

        <div>
          <div className='blink-text'>
            <AnimText delay={1} />
          </div>
          <div className='options'>
            <div className='option'>
              <div className='option-and-arrow'>
                <div className='labels'>
                  <div className='highlight-pink text-title spacing-05'>Interactive portfolio</div>
                  <div className='label-secondary light'> Click around the room to<br />explore my projects in 3D</div>
                </div>
                <img src={loopyArrow} alt='dotted arrow' loading='eager' className='loopy-arrow' />
              </div>
              <img
                src={placeholderInteractive}
                alt='Interactive portfolio'
                loading='eager'
                onClick={handleImageClick}  // Handle the click to navigate
                style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
              />
            </div>
            <div className='option'>
              <div className='labels'>
                <div className='highlight-pink text-title spacing-05'>Static portfolio</div>
                <div className='label-secondary light'>Learn about my projects <br />without the extra dimension</div>
              </div>
              <img 
              src={placeholderStatic} 
              alt='Static portfolio' 
              loading='eager'
              onClick={() => navigateTo('case-studies')}
              style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className='centered'>
          <a className='about-me-button' href="#about-me" onClick={triggerRotation}>
            <div className='text-secondary centered'>about me</div>
              <div className={`arrow-icon ${isAnimating ? 'rotate' : ''} `}>
                <span className='left-bar'></span>
                <span className='right-bar'></span>
              </div>
          </a>
        </div>


      </div>
      <div className='bottom-container' id='about-me'>
      <img src={profilePic} alt='Profile picture' loading='eager' />
        <div className='text'>
          <div className='highlight-pink text-secondary'>about me</div>
          <div className='bio'>
          I am a designer who loves solving for the UX problems within any experience. You can find me in Figma creating 
          webs of explorations to think through my ideas or mulling over problems asking myself, “What are we actually 
          solving for here?” 
            <br /><br />
            I graduated from Dartmouth College with a degree in Cognitive Science focused in
            <span className='bold'> Human-Computer Interaction</span> along with minors in 
            <span className='bold'> Human-Centered Design</span> and
            <span className='bold'> Digital Arts</span>. I am currently a 
            <span className='bold'> UI/UX designer at Capital One.</span>
            <br /><br />
            Driven by curiosity and a love of learning, I’m always picking up side projects and exploring different 
            creative outlets—whether that’s making art, pursuing my latest VR endeavor, or trying out a new recipe 
            in the kitchen.
          </div>
        </div>
        <div className='text'>
          <div className='highlight-pink text-secondary'>about my portfolio</div>
          <div className='bio'>
          I was inspired to create my own interactive portfolio after discovering all the amazing 3D portfolios out there. 
          I wanted to creatively weave together my love for design, 3D modeling, and game design into something that would 
          showcase my work in a fun, interactive way. Having the creative freedom to design without worrying about 
          traditional formats really pushed my coding abilities but allowed me to experiment and make my portfolio truly 
          my own. I’ve had a ton of fun in the process—thanks for taking the time to explore!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
