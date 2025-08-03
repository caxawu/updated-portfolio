import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';

import FadeInImage from './FadeInImage';

import AnimText from './AnimText';
import interactiveImg from '../assets/images/interactiveImg.png'
import loopyArrow from '../assets/images/loopyArrow.png'

const About = () => {

  let navigateTo = useNavigate();

  const handleImageClick = () => {
    navigateTo('interactive');  // Navigate to the new page
  };

  return (
    <div id='home-spacing'>
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
              <FadeInImage className='home-nav-img'
                src={interactiveImg}
                data-pin-nopin="true"
                alt='Interactive portfolio'
                animateTransform={false}
                onClick={handleImageClick}  // Handle the click to navigate
                style={{ cursor: 'pointer' }}  // Optional: Makes it clear that the image is clickable
              />
              <div class="outline-overlay" />
            </div>
          </div>
          <div className='to-static text-secondary light'>
            Want to see my projects in a classic format?
            <span className="link-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
              go to static portfolio
            </span>
          </div>
        </div>
        <img src={loopyArrow} alt='dotted arrow' loading='eager' className='loopy-arrow' />
      </div>
      <Footer />     
    </div>
  );
}

export default About;
