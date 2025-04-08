import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import '../style.scss';

import diorama1 from '../img/digital-art/diorama1.jpg';
import diorama2 from '../img/digital-art/diorama2.png';
import diorama3 from '../img/digital-art/diorama3.jpg';
import boatRender from '../img/digital-art/boatRender.png';
import dioramaWIP from '../img/digital-art/dioramaWIP.png';
import boatWIP from '../img/digital-art/boatWIP.png';
import plant from '../img/digital-art/plant.png';
import plantTable from '../img/digital-art/plantTable.jpg';
import room from '../img/digital-art/room.png';
import kitchen from '../img/digital-art/kitchenAO.jpg';
import juice from '../img/digital-art/juice.png';
import escher from '../img/digital-art/escher.png';
import roomBasicsFront from '../img/digital-art/roomBasicsFront.png';
import roomBasicsAngle from '../img/digital-art/roomBasicsAngle.png';

import fruit from '../img/paintings/fruit.png';
import umbrella from '../img/paintings/umbrella.png';
import birds from '../img/paintings/birds.png';
import fence from '../img/paintings/fence.png';
import abstract from '../img/paintings/abstract.png';
import world from '../img/paintings/world.png';
import landscape from '../img/paintings/landscape.png';
import tuckDrive from '../img/paintings/tuckDrive.png';
import dragon from '../img/paintings/dragon.png';
import ghosts from '../img/paintings/ghosts.png';
import door from '../img/paintings/door.png';
import metal from '../img/paintings/metal.png';
import batman from '../img/paintings/batman.png';
import daisies from '../img/paintings/daisies.png';
import midnights from '../img/paintings/midnights.png';
import ocean from '../img/paintings/ocean.png';

import fruit1 from '../img/drawings/fruit1.png';
import fruit2 from '../img/drawings/fruit2.png';
import fruit3 from '../img/drawings/fruit3.png';
import fruit4 from '../img/drawings/fruit4.png';
import hand1 from '../img/drawings/hand1.png';
import hand2 from '../img/drawings/hand2.png';
import hand3 from '../img/drawings/hand3.png';
import hand4 from '../img/drawings/hand4.png';
import hand5 from '../img/drawings/hand5.png';
import bike1 from '../img/drawings/bike1.png';
import bike2 from '../img/drawings/bike2.png';
import bike3 from '../img/drawings/bike3.png';
import bike4 from '../img/drawings/bike4.png';
import bike5 from '../img/drawings/bike5.png';
import cloth from '../img/drawings/cloth.png';
import bowls from '../img/drawings/bowls.png';
import silverware1 from '../img/drawings/silverware1.png';
import silverware2 from '../img/drawings/silverware2.png';
import silverware3 from '../img/drawings/silverware3.png';
import handOutline from '../img/drawings/handOutline.png';
import skeleton1 from '../img/drawings/skeleton1.png';
import skeleton2 from '../img/drawings/skeleton2.png';
import skeleton3 from '../img/drawings/skeleton3.png';
import trombone from '../img/drawings/trombone.png';
import bailey from '../img/drawings/bailey.png';
import bellows from '../img/drawings/bellows.png';
import bird from '../img/drawings/bird.png';
import tunnel from '../img/drawings/tunnel.png';
import creature from '../img/drawings/creature.png';
import statues from '../img/drawings/statues.png';

const Modelling = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="img-section">
      <FadeIn>
        <div className="row">
          <img src={diorama1} alt="Diorama 1" loading="eager" />
          <img src={diorama3} alt="Diorama 3" loading="eager" />

        </div>
        <div className="row">
          <img src={dioramaWIP} alt="dioramaWIP" loading="eager" />
          <img src={diorama2} alt="Diorama 2" loading="eager" />
          <img src={boatRender} alt="boatRender" loading="eager" />
        </div>
        <div className="row">
          <img src={boatWIP} alt="boatWIP" loading="eager" />
          <img src={plant} alt="plant" loading="eager" />
          <img src={plantTable} alt="plant on table" loading="eager" />
        </div>
        <div className="row">
          <img src={juice} alt="juice" loading="eager" />
          <img src={escher} alt="escher" loading="eager" />
        </div>
        <div className="row">
          <img src={room} alt="room" loading="eager" />
          <img src={kitchen} alt="kitchen" loading="eager" />
        </div>
        <div className="row">
          <img src={roomBasicsFront} alt="room basics front render" loading="eager" />
          <img src={roomBasicsAngle} alt="room basics angle render" loading="eager" />
        </div>
      </FadeIn>
    </div>
  );
};

const Animation = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="img-section">
      <FadeIn>
        <div className="row">
          <img src="https://media3.giphy.com/media/VOlbJCYXe3WbdIeIed/giphy.gif" alt="Jin Final" loading="eager" />
          <img src="https://media2.giphy.com/media/bBYtlby2PTB5VEsqhp/giphy.gif" alt="Bowling and beach ball" loading="eager" />

        </div>
        <div className="row">
          <img src="https://media4.giphy.com/media/HZvUGFeDJVvCvTKT9I/giphy.gif" alt="Elven walk cycle" loading="eager" />
          <img src="https://media1.giphy.com/media/tSiLfpR8ET4FO6xS2H/giphy.gif" alt="Ballie walk cycle" loading="eager" />
        </div>
        <div className="row">
          <img src="https://media0.giphy.com/media/Yah0ms0gI9fxzMvqat/giphy.gif" alt="Bouncing ball" loading="eager" />
        </div>
      </FadeIn>
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
      <FadeIn>
        <div className="row">
          <div className="inner-column">
            <img src={fruit} alt="fruit" loading="eager" />
          </div>
          <div className="inner-column">
            <img src={umbrella} alt="umbrella" loading="eager" />
            <img src={daisies} alt="daisies" loading="eager" />
          </div>
          <div className="inner-column">
            <img src={birds} alt="birds" loading="eager" />
            <img src={fence} alt="fence" loading="eager" />
          </div>
        </div>
        <div className="row">
          <img src={door} alt="door" loading="eager" />
          <img src={midnights} alt="midnights" loading="eager" />
        </div>
        <div className="row">
          <img src={dragon} alt="dragon" loading="eager" />
          <img src={metal} alt="metal" loading="eager" />
        </div>
        <div className="row">
          <img src={ocean} alt="ocean" loading="eager" />
          <img src={batman} alt="batman" loading="eager" />
        </div>
        <div className="row">
          <img src={tuckDrive} alt="tuckDrive" loading="eager" />
          <img src={landscape} alt="landscape" loading="eager" />
        </div>
        <div className="row">
          <img src={ghosts} alt="ghosts" loading="eager" />
          <img src={abstract} alt="abstract" loading="eager" />
          <img src={world} alt="world" loading="eager" />
        </div>
      </FadeIn>
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
      <FadeIn>
        <div className="row">
          <img src={fruit1} alt="fruit1" loading="eager" />
          <img src={fruit2} alt="fruit2" loading="eager" />
          <img src={fruit3} alt="fruit4" loading="eager" />
          <img src={fruit4} alt="fruit4" loading="eager" />
        </div>
        <div className="row">
          <img src={hand1} alt="hand1" loading="eager" />
          <img src={hand2} alt="hand2" loading="eager" />
          <img src={hand3} alt="hand3" loading="eager" />
          <img src={hand4} alt="hand4" loading="eager" />
          <img src={hand5} alt="hand5" loading="eager" />
        </div>
        <div className="row">
          <img src={bike1} alt="bike1" loading="eager" />
          <img src={bike2} alt="bike2" loading="eager" />
          <img src={bike3} alt="bike3" loading="eager" />
          <img src={bike4} alt="bike4" loading="eager" />
          <img src={bike5} alt="bike5" loading="eager" />
        </div>
        <div className="row">
          <img src={cloth} alt="cloth" loading="eager" />
          <img src={bowls} alt="bowls" loading="eager" />
          <img src={silverware1} alt="silverware1" loading="eager" />
          <img src={silverware2} alt="silverware2" loading="eager" />
          <img src={silverware3} alt="silverware3" loading="eager" />
        </div>
        <div className="row">
          <img src={handOutline} alt="handOutline" loading="eager" />
          <img src={skeleton1} alt="skeleton1" loading="eager" />
          <img src={skeleton2} alt="skeleton2" loading="eager" />
          <img src={skeleton3} alt="skeleton3" loading="eager" />
        </div>
        <div className="row">
          <img src={trombone} alt="trombone" loading="eager" />
          <img src={bailey} alt="bailey" loading="eager" />
          <img src={bellows} alt="bellows" loading="eager" />
        </div>
        <div className="row">
          <img src={bird} alt="bird" loading="eager" />
          <img src={tunnel} alt="tunnel" loading="eager" />
          <img src={creature} alt="creature" loading="eager" />
        </div>
        <div className="row">
          <img src={statues} alt="statues" loading="eager" />
        </div>
      </FadeIn>
    </div>
  );
};

export {
  Modelling, Animation, Paintings, Drawings,
};
