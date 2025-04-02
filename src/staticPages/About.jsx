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
                  <div className='label-secondary light'> Click around the room to <br />explore my projects</div>
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
                <div className='label-secondary light'>Learn about my projects <br />without all the website-iness</div>
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
          <div className='highlight-pink text-secondary'>a little about me</div>
          <div className='bio'>
            I am a designer who loves to solve for the UX problems within any experience. I am driven by curiosity and a 
            love of learning new things, so I am constantly picking up side projects and making things whether that is 
            pursuing my latest VR endeavor, creating art, or trying a new recipe.
            <br /><br />
            I graduated from Dartmouth College with a degree in Cognitive Science focused in Human-Computer Interaction 
            and double minors in Human-Centered Design and Digital Arts. I am currently a UI/UX designer @ Capital One.
          </div>
        </div>
        <div className='text'>
          <div className='highlight-pink text-secondary'>a little about my portfolio</div>
          <div className='bio'>
          Like any other designer, I always felt the need to update my portfolio but never had the motivation to actually 
          do it. I knew that if I turned it into a fun and challenging project, the motivation would follow.
          With my portfolio as an blank canvas, I had the opportunity to get creative so I decided to make it 
          interactive. 
          <br /><br />
          Inspired by the point-and-click adventure games I've always loved and all the amazing 3D portfolios 
          out there, this was the perfect opportunity to redesign my portfolio and blend my passion for 3D modeling, 
          design, and development into an immersive showcase of my work.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
