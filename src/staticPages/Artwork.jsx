import { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga';
import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion";


import ArtNavBar from './ArtNavBar';
import ToTopButton from './ToTopButton';
import Footer from './Footer';

import diorama1 from '../assets/images/artwork/modeling/diorama1.jpg';
import diorama2 from '../assets/images/artwork/modeling/diorama2.png';
import diorama3 from '../assets/images/artwork/modeling/diorama3.jpg';
import boatRender from '../assets/images/artwork/modeling/boatRender.png';
import dioramaWIP from '../assets/images/artwork/modeling/dioramaWIP.png';
import boatWIP from '../assets/images/artwork/modeling/boatWIP.png';
import plant from '../assets/images/artwork/modeling/plant.png';
import plantTable from '../assets/images/artwork/modeling/plantTable.jpg';
import room from '../assets/images/artwork/modeling/room.png';
import kitchen from '../assets/images/artwork/modeling/kitchenAO.jpg';
import juice from '../assets/images/artwork/modeling/juice.png';
import escher from '../assets/images/artwork/modeling/escher.png';
import roomBasicsFront from '../assets/images/artwork/modeling/roomBasicsFront.png';
import roomBasicsAngle from '../assets/images/artwork/modeling/roomBasicsAngle.png';

import fruit from '../assets/images/miniPlayer/paintings/fruit.png';
import umbrellaFitted from '../assets/images/miniPlayer/paintings/umbrellaFitted.png';
import birds from '../assets/images/miniPlayer/paintings/birds.png';
import daisiesFitted from '../assets/images/miniPlayer/paintings/daisiesFitted.png';
import fenceFitted from '../assets/images/miniPlayer/paintings/fenceFitted.png';
import door from '../assets/images/miniPlayer/paintings/door.png';
import midnights from '../assets/images/miniPlayer/paintings/midnights.png';
import dragon from '../assets/images/miniPlayer/paintings/dragon.png';
import tuckDrive from '../assets/images/miniPlayer/paintings/tuckDrive.png';
import landscape from '../assets/images/miniPlayer/paintings/landscape.png';
import howl from "../assets/images/miniPlayer/paintings/howl.png";
import robot from "../assets/images/miniPlayer/paintings/robot.png";
import statue from "../assets/images/miniPlayer/paintings/statue.png";
import vase from "../assets/images/miniPlayer/paintings/vase.png";
import batman from '../assets/images/miniPlayer/paintings/batman.png';


import fruit0 from '../assets/images/miniPlayer/drawings/fruit0.png';
import fruit1 from '../assets/images/miniPlayer/drawings/fruit1.png';
import fruit2 from '../assets/images/miniPlayer/drawings/fruit2.png';
import fruit3 from '../assets/images/miniPlayer/drawings/fruit3.png';
import hand1 from '../assets/images/miniPlayer/drawings/hand1.png';
import hand2 from '../assets/images/miniPlayer/drawings/hand2.png';
import hand3 from '../assets/images/miniPlayer/drawings/hand3.png';
import hand4 from '../assets/images/miniPlayer/drawings/hand4.png';
import hand5 from '../assets/images/miniPlayer/drawings/hand5.png';
import bike1 from '../assets/images/miniPlayer/drawings/bike1.png';
import bike2 from '../assets/images/miniPlayer/drawings/bike2.png';
import bike3 from '../assets/images/miniPlayer/drawings/bike3.png';
import boy from '../assets/images/miniPlayer/drawings/boy.png';
import diana from '../assets/images/miniPlayer/drawings/diana.png';
import statueSketch from '../assets/images/miniPlayer/drawings/statue.png';
import king from '../assets/images/miniPlayer/drawings/king.png';
import fish from '../assets/images/miniPlayer/drawings/fish.png';
import david from '../assets/images/miniPlayer/drawings/david.png';

// import bird from '../assets/images/miniPlayer/drawings/bird.png';
// import tunnel from '../assets/images/miniPlayer/drawings/tunnel.png';
// import creature from '../assets/images/miniPlayer/drawings/creature.png';
// import statues from '../assets/images/miniPlayer/drawings/statues.png';

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
  });
};




const FadeInImage = ({ className, src, alt, delay = 0 }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={`${className} fade-loader`} />
      )}
      <motion.img
        className={`${className} fade-image ${loaded ? 'loaded' : 'loading'}`}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="eager"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: loaded ? delay : 0
        }}
      />
    </>
  );
};


const Modeling = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
  return (
    <div className="img-section">
      <div className="row">
        <FadeInImage className="img" src={diorama1} alt="Diorama 1" delay = "0.01" />
        <FadeInImage className="img" src={diorama3} alt="Diorama 3" delay = "0.1" />
      </div>
        
      <div className="row">
        <FadeInImage className="img" src={dioramaWIP} alt="dioramaWIP" delay = "0.15" />
        <FadeInImage className="img" src={diorama2} alt="Diorama 2" delay = "0.2" />
        <FadeInImage className="img" src={boatRender} alt="boatRender" delay = "0.25" />
      </div>
        
      <div className="row">
        <FadeInImage className="img" src={boatWIP} alt="boatWIP" delay = "0.3" />
        <FadeInImage className="img" src={plant} alt="plant" delay = "0.35" />
        <FadeInImage className="img" src={plantTable} alt="plant on table" delay = "0.4" />
      </div>
        
      <div className="row">
        <FadeInImage className="img" src={juice} alt="juice" delay = "0.45" />
        <FadeInImage className="img" src={escher} alt="escher" delay = "0.5" />
      </div>
        
      <div className="row">
        <FadeInImage className="resize-img" src={room} alt="room" delay = "0.55" />
        <FadeInImage className="resize-img" src={kitchen} alt="kitchen" delay = "0.6" />
      </div>
        
      <div className="row">
        <FadeInImage className="resize-img" src={roomBasicsFront} alt="room basics front render" delay = "0.65" />
        <FadeInImage className="resize-img" src={roomBasicsAngle} alt="room basics angle render" delay = "0.7" />
      </div>
    </div>
  );
};

const Animation = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
  return (
    <div className="img-section" id="not-full-page">
      <div className="row">
        <FadeInImage className="resize-img" src="https://media3.giphy.com/media/VOlbJCYXe3WbdIeIed/giphy.gif" alt="Jin Final" delay = "0.01" />
        <FadeInImage className="resize-img" src="https://media4.giphy.com/media/HZvUGFeDJVvCvTKT9I/giphy.gif" alt="Elven walk cycle" delay = "0.1" />
        <FadeInImage className="resize-img" src="https://media1.giphy.com/media/tSiLfpR8ET4FO6xS2H/giphy.gif" alt="Ballie walk cycle" delay = "0.15" />
      </div>
      <div className="row">
        <FadeInImage className="resize-img" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZjbTBsNnlncXp6azF5b2NuaWwzMjdjNHZkamM0MzR4OTVxYm5tayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wYWX3Wgyz5QtiVBOba/giphy.gif" alt="Bouncing ball" delay = "0.2" />
        <FadeInImage className="resize-img" src="https://media2.giphy.com/media/bBYtlby2PTB5VEsqhp/giphy.gif" alt="Bowling and beach ball" delay = "0.25" />
        <FadeInImage className="resize-img" src="https://media0.giphy.com/media/Yah0ms0gI9fxzMvqat/giphy.gif" alt="Bouncing ball" delay = "0.3" />
      </div>
    </div>
  );
};

const Paintings = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
  return (
    <div className="img-section">
      <div className="row">
        <div className="inner-column">
          <FadeInImage className="img" src={fruit} alt="fruit" delay={0.05} />
        </div>
        <div className="inner-column">
          <FadeInImage className="img" src={umbrellaFitted} alt="umbrella" delay={0.10} />
          <FadeInImage className="img" src={daisiesFitted} alt="daisies" delay={0.15} />
        </div>
        <div className="inner-column">
          <FadeInImage className="img" src={birds} alt="birds" delay={0.20} />
          <FadeInImage className="img" src={fenceFitted} alt="fence" delay={0.25} />
        </div>
      </div>
      <div className="row">
        <FadeInImage className="img" src={dragon} alt="dragon" delay={0.30} />
        <FadeInImage className="img" src={midnights} alt="midnights" delay={0.35} />
      </div>
      <div className="row">
        <FadeInImage className="resize-img" src={door} alt="door" delay={0.40} />
        <FadeInImage className="resize-img" src={vase} alt="vase" delay={0.45} />
      </div>
      <div className="row">
        <FadeInImage className="resize-img" src={tuckDrive} alt="tuckDrive" delay={0.50} />
        <FadeInImage className="resize-img" src={landscape} alt="landscape" delay={0.55} />
      </div>
      <div className="row">
        <FadeInImage className="resize-img" src={statue} alt="statue" delay={0.60} />
        <FadeInImage className="resize-img" src={batman} alt="batman" delay={0.65} />
      </div>
      <div className="row">
        <FadeInImage className="resize-img" src={howl} alt="howl" delay={0.70} />
        <FadeInImage className="resize-img" src={robot} alt="robot" delay={0.75} />
      </div>
    </div>

  );
};

const Drawings = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
  return (
  <div className="img-section">
    <div className="row">
      <FadeInImage className="resize-img" src={fruit0} alt="fruit0" delay={0.01} />
      <FadeInImage className="resize-img" src={fruit1} alt="fruit1" delay={0.05} />
    </div>
    <div className="row">
      <FadeInImage className="resize-img" src={fruit2} alt="fruit2" delay={0.10} />
      <FadeInImage className="resize-img" src={fruit3} alt="fruit3" delay={0.15} />
    </div>
    <div className="row">
      <FadeInImage className="img" src={hand1} alt="hand1" delay={0.20} />
      <FadeInImage className="img" src={hand2} alt="hand2" delay={0.25} />
      <FadeInImage className="img" src={hand3} alt="hand3" delay={0.30} />
    </div>
    <div className="row">
      <FadeInImage className="resize-img" src={hand4} alt="hand4" delay={0.35} />
      <FadeInImage className="resize-img" src={hand5} alt="hand5" delay={0.40} />
    </div>
    <div className="row">
      <FadeInImage className="img" src={bike1} alt="bike1" delay={0.45} />
      <FadeInImage className="img" src={bike2} alt="bike2" delay={0.50} />
      <FadeInImage className="img" src={bike3} alt="bike3" delay={0.55} />
    </div>
    <div className="row">
      <FadeInImage className="img" src={fish} alt="fish sketch" delay={0.60} />
      <FadeInImage className="img" src={david} alt="david sketch" delay={0.65} />
      <FadeInImage className="img" src={king} alt="king sketch" delay={0.70} />
    </div>
    <div className="row">
      <FadeInImage className="img" src={boy} alt="boy sketch" delay={0.75} />
      <FadeInImage className="img" src={diana} alt="diana sketch" delay={0.80} />
      <FadeInImage className="img" src={statueSketch} alt="statue sketch" delay={0.85} />
    </div>
  </div>

  );
};
export {Modeling, Animation, Paintings, Drawings};

const Artwork = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className='page-wrapper'>
      <ArtNavBar />
      <div className='artwork-page-to-top'>
      <ToTopButton />
      </div>
      <main className="page-content">
        
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Artwork;