import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';

import FadeInImage from './FadeInImage';

import AnimText from './AnimText';
import interactiveImg from '../assets/images/interactiveImg.png';
import loopyArrow from '../assets/images/loopyArrow.png';
import pointerHand from '../assets/images/pointerHand.png';

const About = () => {

  const [clickStep, setClickStep] = useState(0);
  let navigateTo = useNavigate();

  const handleImageClick = () => {
    navigateTo('interactive');  // Navigate to the new page
  };

  const handleButtonClick = () => {
    setClickStep(prev => (prev >= 6 ? 1 : prev + 1));
  };

  return (
    <div id='home-spacing'>
      <NavBar />
      <div className="home-page" id='desktop'>
        <div className="home-left">
          <div className='blink-text'>
            <AnimText delay={1} />
          </div>
          <div className='labels'>
            <div className='highlight-pink text-title spacing-05'>Step inside my room</div>
            <div className='text-secondary light label-secondary'> Explore my projects in 3D<br />by clicking around the space</div>
          </div>
        </div>

        <div className='home-right'>
          <div className='img-w-outline'>
            <div className='img-container'>
              <FadeInImage className='home-nav-img'
                src={interactiveImg}
                data-pin-nopin="true"
                alt='Interactive portfolio'
                animatetransform={false}
                onClick={handleImageClick}  // Handle the click to navigate
                style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
              />
              <div className="outline-overlay" />
            </div>
          </div>
          <div className='to-static '>
            <div className='highlight-pink text-secondary light'>Want to see my projects in a classic format?</div>
            {/* <span className="link-button text-title" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
              Go to static portfolio
            </span> */}
            <div className="nav-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                        Go to static portfolio
                    </div>
          </div>
        </div>
        <img src={loopyArrow} alt='dotted arrow' loading='eager' className='loopy-arrow' />
      </div>


      <div className="home-page" id='mobile'>
        <div className="home-left">
          <div className='blink-text'>
            <AnimText delay={1} />
          </div>
          <div className='labels'>
            <div className='label'>
              <span className='highlight-pink text-title spacing-05'>see my projects in 2D</span>
              <div className="nav-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                go to static portfolio
              </div>
            </div>
            <div className='label'>
              <div className='highlight-pink text-title spacing-05'>explore my projects in 3D</div>
            </div>
          </div>

        </div>

        <div className='home-right'>
          <div className="img-w-overlay">
            <div className='img-container'>
              <FadeInImage className='home-nav-img'
                src={interactiveImg}
                data-pin-nopin="true"
                alt='Interactive portfolio'
                animatetransform={false}
                style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
              />

              {clickStep > 0 && (
                <div className="overlay-text">
                  <div className="text-block">
                    {clickStep === 1 && (
                      <>
                        <div className="overlay-text-block">
                          <b>You approach the door to the room and see a sign:</b>
                        </div>
                        <div className="overlay-text-block">
                          <i>"Please use desktop to enter."</i>
                        </div>
                      </>
                    )}
                    {clickStep === 2 && (
                      <>
                        <div className="overlay-text-block">
                          <b>Every great adventurer needs a companion</b>
                        </div>
                        <div className="overlay-text-block">
                          You'll need a pet mouse to start this adventure.
                        </div>
                      </>
                    )}
                    {clickStep === 3 && (
                      <>
                        <div className="overlay-text-block">
                          <b>A riddle slides out from under the door:</b>
                        </div>
                        <div className="overlay-text-block">
                          <i>“This door only opens on screens wider than your hand.”</i>
                        </div>
                      </>
                    )}
                    {clickStep === 4 && (
                      <>
                        <div className="overlay-text-block">
                          <b>You try the doorknob</b>
                        </div>
                        <div className="overlay-text-block">
                          It's locked. You hear someone muttering about viewport ratios inside.
                        </div>
                      </>
                    )}
                    {clickStep === 5 && (
                      <>
                        <div className="overlay-text-block">
                          <b>You attempt to squeeze through</b>
                        </div>
                        <div className="overlay-text-block">
                          <i>Your screen is too small.</i>
                        </div>
                      </>
                    )}
                    {clickStep === 6 && (
                      <>
                        <div className="overlay-text-block">
                          <b>This door <span style={{ textDecoration: "underline" }}><i>will not</i></span> open on mobile</b>
                        </div>
                        <div className="overlay-text-block">
                          <i>Switch to a computer to enter this room.</i>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className="nav-button overlay-trigger" onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
            {clickStep === 0 ? 'enter room' : 'try again'}
          </div>
          <img className="pointer-hand"
            src={pointerHand}
            data-pin-nopin="true"
            alt='pointer hand'
            animatetransform="false"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
