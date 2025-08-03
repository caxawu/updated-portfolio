import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ReactGA from 'react-ga';

import Footer from './Footer';

import FadeInImage from './FadeInImage';

import beyond from '../assets/images/miniProjects/beyond.png'
import journey from '../assets/images/miniProjects/journey.png'
import storyteller from '../assets/images/miniProjects/storyteller.png'
import stickies from '../assets/images/miniProjects/stickies.png'
import buzzfeed from '../assets/images/miniProjects/buzzfeed.png'
import adventures from '../assets/images/miniProjects/adventures.png'
import artrek from '../assets/images/miniProjects/artrek.png'
import jobarchitech from '../assets/images/miniProjects/jobarchitech.png'
import rgbox from '../assets/images/miniProjects/rgbox.png'


const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
  });
};

const MiniProjects = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="content">
      <Outlet />
      <div className="spacer" />
      <div className="mini-section">
        <div className="top-header">
          <div className="title">
            Web games
          </div>
          <div className="tools">
            Twine, Unity
          </div>
        </div>
        <div className="body">
          <div className="item">
            <FadeInImage src={beyond} alt="beyond" delay = "0.01" />
            <div className="description">
              <div className="name">Beyond</div>
              <div className="description1">Find your way out of the Underground.</div>
              <div className="description2">Responding to anxiety by portraying the different ways that it can manifest.</div>
              <div className="links">
                <a href="https://caxawu.itch.io/beyond" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Games/Beyond', 'Play Beyond Click', 'Mini Projects Links')}>
                  Play Beyond
                </a>
                |
                <a href="https://www.youtube.com/watch?v=Wrmlwu4vtco" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Games/Beyond', 'Watch Gameplay Click', 'Mini Projects Links')}>
                  Watch the gameplay
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={journey} alt="journey" delay = "0.05" />
            <div className="description">
              <div className="name">Journey</div>
              <div className="description1">A stranger stumbles into the village. A researcher—separated from the rest of the expedition team.</div>
              <div className="description2">Raising awareness about climate-related challenges facing the Arctic.</div>
              <div className="links">
                <a href="https://caxawu.itch.io/journey" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/GamesJourney', 'Play Journey Click', 'Mini Projects Links')}>
                  Play Journey
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={storyteller} alt="storyteller" delay = "0.1" />
            <div className="description">
              <div className="name">Storyteller</div>
              <div className="description1">Peppy and Poppy want to be storytellers when they grow up. Help them with grammar as they tell a story.</div>
              <div className="description2">Helping to increase literacy amongst non-native English speakers.</div>
              <div className="links">
                <a href="https://caxawu.itch.io/storyteller" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Games/Storyteller', 'Play Storyteller Click', 'Mini Projects Links')}>
                  Play Storyteller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mini-section">
        <div className="top-header">
          <div className="title">
            Full-stack web apps
          </div>
          <div className="tools">
            MERN stack (MongoDB, Express, React, Node.js), Firebase, HTML/CSS
          </div>
        </div>
        <div className="body">
          <div className="item">
            <FadeInImage src={stickies} alt="stickies" delay = "0.15" />
            <div className="description">
              <div className="name">Stickies</div>
              <div className="description1">Capture your thoughts and share them on this collaborative post-it notes board.</div>
              <div className="description2">A real-time collaborative post-it note app that supports markdown notation.</div>
              <div className="links">
                <a href="https://trusting-dubinsky-776c89.netlify.app/" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/COSC/Stickies', 'Add Note Click', 'Mini Projects Links')}>
                  Add a note
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={buzzfeed} alt="buzzfeed" delay = "0.2" />
            <div className="description">
              <div className="name">Buzzfeed quiz</div>
              <div className="description1">Take a quiz and find your next favorite show!</div>
              <div className="description2">A Buzzfeed-style quiz that uses HTML, CSS, Javascript, and jquery.</div>
              <div className="links">
                <a href="https://dartmouth-cs52-21s.github.io/lab2-caxawu/" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/COSC/Buzzfeed', 'Add Quiz Click', 'Mini Projects Links')}>
                  Take the quiz
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={adventures} alt="adventures" delay = "0.25" />
            <div className="description">
              <div className="name">Track your adventures</div>
              <div className="description1">Display your photos on digital polaroids attached to blinking string lights.
              </div>
              <div className="description2">A CRUD-style content app that uses React, Redux and React-Router.</div>
              <div className="links">
                <a href="https://wizardly-johnson-50073f.netlify.app/" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/COSC/Adventures', 'Track Adventures Click', 'Mini Projects Links')}>
                  Track an adventure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-section">
        <div className="top-header">
          <div className="title">
            Hackathons 🏆
          </div>
          <div className="tools">
            Figma
          </div>
        </div>
        <div className="body">
          <div className="item">
            <FadeInImage src={artrek} alt="ARTrek" delay = "0.3" />
            <div className="description">
              <div className="name">ARTrek<br />1st Place @ HackDartmouth V</div>
              <div className="description1">A “Waze”-like indoor navigation system.</div>
              <div className="description2">An augmented reality indoor navigation app using user-contributed data and Microsoft's Azure Spatial Anchors to generate AR paths to the destination.</div>
              <div className="links">
                <a href="https://devpost.com/software/artrek" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Hackathon/ARTrek', 'ARTrek Devpost Click', 'Mini Projects Links')}>
                  See Devpost
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={jobarchitech} alt="JobArchi.tech" delay = "0.35" />
            <div className="description">
              <div className="name">JobArchi.tech<br />Google Cloud runner-up @ HackDartmouth VI</div>
              <div className="description1">Track your job hunt journey from application to offer.</div>
              <div className="description2">A Chrome extension and web app that tracks application and helps with interview prep with personalized feedback using Google's NLP and speech-to-text APIs.</div>
              <div className="links">
                <a href="https://devpost.com/software/jobarchi-tech" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Hackathon/JobArchitech', 'JobArchitech Devpost Click', 'Mini Projects Links')}>
                  See Devpost
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <FadeInImage src={rgbox} alt="RGBox" delay = "0.4" />
            <div className="description">
              <div className="name">RGBox<br />2nd Place @ Dartmouth Designathon</div>
              <div className="description1">Reclaim social spaces and build connections over shared interests.</div>
              <div className="description2">A tabletop device for social spaces such as coffee shops that toggles between red and green to signal openness to socializing with new people.</div>
              <div className="links">
                <a href="https://docs.google.com/presentation/d/1AdQusO3tumfNfmdHp6S9t3_hRSGw0PRgl-npWOVSQ1E/edit?usp=sharing" target="_blank" rel="noreferrer"
                  onClick={trackLinkClick.bind(this, 'Other/Games/Storyteller', 'Play Storyteller Click', 'Mini Projects Links')}>
                  See presentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

}

export default MiniProjects;