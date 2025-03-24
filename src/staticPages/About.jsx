import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimText from './AnimText';
import placeholderInteractive from '../assets/images/placeholderInteractive.png'
import placeholderStatic from '../assets/images/placeholderStatic.png'

const About = () => {

  let navigateTo = useNavigate();

  const handleImageClick = () => {
    navigateTo('/home');  // Navigate to the new page
  };

    return (
      <div className="content">
        <div className="top-container">
          <div className="blink-text">
          <AnimText delay={2} />
          </div>
          <div className="selections">
          <img
            src={placeholderInteractive}
            alt="interactive portfolio"
            loading="eager"
            onClick={handleImageClick}  // Handle the click to navigate
            style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
          />
            <img src={placeholderStatic} alt="Profile 1" loading="eager" />
          </div>

        </div>
        <div className="bottom-container">
          <div className="text">
            <div className="box">
              <div className="title">more about me</div>
              <div className="body">
                <div className="subheading">Currently learning about...</div>
                <ul>
                  <li>web development (this site!)</li>
                  <li>low-poly modelling in Maya</li>
                  <li>hand painting textures in Substance Painter</li>
                  <li>creating open-world games in Unity</li>
                </ul>
                <div className="subheading">Passionate about...</div>
                <ul>
                  <li>em dashes</li>
                  <li>film soundtracks</li>
                  <li>the autumn 🍂</li>
                  <li>cooking</li>
                  <li>desserts</li>
                </ul>
              </div>
            </div>
            <div className="bio">
              Ever since discovering experience design during my Sophomore year at Dartmouth College,
              I have been passionate about solving for the user experience at the heart of every problem.
              I am particularly fascinated by the overlap of people and technology,
              which led me to pursue a major in Cognitive Science focused in Human-Computer Interaction
              and minors in Human-Centered Design and Digital Arts.
              <br /><br />
              In my free time, I find myself constantly making things—whether that is testing a new dessert recipe,
              painting something from Pinterest that inspired me, or pursuing my latest VR endeavor. More than anything,
              I am driven by curiosity and a love of learning new things.
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
