import Footer from './Footer';
import { trackEvent } from './Analytics';

import FadeInImage from './FadeInImage';

import profilePic from '../assets/images/profilePic.png'

const About = () => {

  return (
    <div id="about-spacing"> 
      <div className='content' id="about">
        <div className='about-section'>
          <FadeInImage className='about-img' src={profilePic} data-pin-nopin="true" alt='Profile picture' loading='eager' />
          <div className='text-bounding-box'>
            <div className='color-box' id="color1">
              <div className='bio'>
                <div className="outline-overlay"></div>
                <div className='text-secondary'>about me</div>
                Hi, I’m Cathy! I’m a designer who loves following my curiosity. By day, I’m a product designer tackling complex problems and concepting thoughtful experiences. By night, I'm pursuing one of my many hobbies whether it’s sketching, testing new recipes, or working on my latest side project.
                <div className='spacing-1'/>
                I'm currently a <span className='bold highlight-dark-pink'>product designer at Capital One.</span> I graduated from Dartmouth College in 2021 with a degree in <span className='bold highlight-dark-pink'>Cognitive Science focused in Human-Computer Interaction</span> and minors in <span className='bold highlight-dark-pink'>Human-Centered Design</span> and <span className='bold highlight-dark-pink'>Digital Arts</span>.
              </div>
              </div>
              <div className='color-box' id="color2">
              <div className='bio'>
                <div className="outline-overlay"></div>
                <div className='text-secondary'>about my portfolio</div>
                This portfolio came from wanting to create something interactive that weaved together my love for design, 3D modeling, game design, and building fun things. Inspired by lots of cool 3D portfolios, I decided to base mine on my own room—showcasing the different facets of me as a creative with my projects, artwork, and interests scattered around the room for people to explore.
                <div className='spacing-1'/>
                  I 3D modeled everything in Maya and pulled it into the browser with Three.js and React Three Fiber. Through lots of trial and error and re-renders, I added interactivity and polish to make the experience feel delightful.
                <div className='spacing-1'/>
                I had a lot of fun in the process, take a peek in!
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
                  In my free time I like to make art, share to <a
                    href="https://www.instagram.com/firesheepstudio/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent('About/Insta', 'Insta Click', 'About page')}
                  >@firesheepstudio</a>, sell at art markets with friends, and run an <a
                    href="https://www.etsy.com/shop/FireSheepStudio"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent('About/Insta', 'Insta Click', 'About page')}
                  >Etsy store</a>!
                </div>
                <div className='labels' id="color-light">
                  <b>art doodles</b>
                  <div>#D0F0EF</div>
                </div>
              </div>
              <div className="swatch-box" id="box2">
                I love working on creative projects: Currently fixing bugs in my side project Mise.
                <div className='labels' id="color-light">
                  <b>tinkerings</b>
                  <div>#AFE3DF</div>
                </div>
              </div>
              <div className="swatch-box" id="box3">
                I’m a huge foodie and love to cook. I’m learning to navigate my tiny NYC kitchen and trying to not lose my 170 week Beli streak.
                <div className='labels' id="color-dark">
                  <b>food adventures</b>
                  <div>#65AEB3</div>
                </div>
              </div>
              <div className="swatch-box" id="box4">
                <div>
                  Curious about my work or want to say hi? I'd love to chat!
                  <div className='spacing-075' />
                  <ul>
                    <li><a href="Cathy Wu Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      id="resume"
                      onClick={() => trackEvent('Contact Links', 'Resume Click', 'About page')}
                    >Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/xinai-cathy-wu"
                      target="_blank"
                      rel="noreferrer"
                      id="linkedin"
                      onClick={() => trackEvent('Contact Links', 'LinkedIn Click', 'About page')}
                    >Linkedin</a></li>
                    <li><a href="mailto:xinai.cathy.wu@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      id="mail"
                      onClick={() => trackEvent('Contact Links', 'Mail Click', 'About page')}
                    >Email</a></li>
                  </ul>
                </div>
                <div className='labels' id="color-gray">
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
