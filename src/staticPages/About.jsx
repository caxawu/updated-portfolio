import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import profilePic from '../assets/images/profilePic.png'

const About = () => {


  return (
    <div>
      <NavBar />
      <div className='content'>
        <div className='about-section' id='about-me'>
          <img src={profilePic} alt='Profile picture' loading='eager' />
          <div className='text'>
            <div className='highlight-pink text-secondary'>about me</div>
            <div className='bio'>
              I’m a designer who loves diving into complex UX challenges, transforming the complex web of user behavior, pain points, and opportunities into simple, meaningful, and delightful experiences.
              I graduated from Dartmouth College with a degree in Cognitive Science focused in
              <span className='bold'> Human-Computer Interaction</span> along with minors in
              <span className='bold'> Human-Centered Design</span> and
              <span className='bold'> Digital Arts</span>. I am currently a
              <span className='bold'> UI/UX designer at Capital One.</span>
              <div className='spacing-075'/>
              I am driven by curiosity and love of learning, so I’m always picking up side projects and exploring different
              creative outlets—whether that’s making art, pursuing my latest VR endeavor, or trying out a new recipe
              in the kitchen.
            </div>
            <div className='spacing-3'/>
            <div className='highlight-pink text-secondary'>about my portfolio</div>
            <div className='bio'>
              I was inspired to create my own interactive portfolio after discovering all the amazing 3D portfolios out there.
              I wanted to creatively weave together my love for design, 3D modeling, and game design into something that would
              showcase my work in a fun, interactive way. Having the creative freedom to design pushed my coding abilities but 
              allowed me to experiment and make my portfolio truly my own. I’ve had a ton of fun in the process—thanks for 
              taking the time to explore!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
