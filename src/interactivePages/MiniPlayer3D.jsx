import React from 'react';
import { useState, useEffect } from 'react'
import daisies from "../assets/images/miniPlayer/paintings/daisies.png";
import batman from "../assets/images/miniPlayer/paintings/batman.png";
import dragon from "../assets/images/miniPlayer/paintings/dragon.png";
import fence from "../assets/images/miniPlayer/paintings/fence.png";
import tuckDrive from "../assets/images/miniPlayer/paintings/tuckDrive.png";
import umbrella from "../assets/images/miniPlayer/paintings/umbrella.png";
import howl from "../assets/images/miniPlayer/paintings/howl.png";
import robot from "../assets/images/miniPlayer/paintings/robot.png";
import statue from "../assets/images/miniPlayer/paintings/statue.png";
import vase from "../assets/images/miniPlayer/paintings/vase.png";

import bike1 from "../assets/images/miniPlayer/drawings/bike1.png";
import bike2 from "../assets/images/miniPlayer/drawings/bike2.png";
import bike3 from "../assets/images/miniPlayer/drawings/bike3.png";
import fruit1 from "../assets/images/miniPlayer/drawings/fruit1.png";
import fruit2 from "../assets/images/miniPlayer/drawings/fruit2.png";
import handG1 from "../assets/images/miniPlayer/drawings/handG1.png";
import handG2 from "../assets/images/miniPlayer/drawings/handG2.png";
import s1 from "../assets/images/miniPlayer/drawings/s1.png";
import s2 from "../assets/images/miniPlayer/drawings/s2.png";
import museum from "../assets/images/miniPlayer/drawings/museum.png";

const MiniPlayer3D = ({currState,setCurrState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('miniPlayer');
  };

  const images = [
    daisies, batman, dragon, tuckDrive, fence, umbrella, howl, robot, statue, vase,
    fruit1, fruit2, handG1, handG2, bike2, bike3, bike1, s1, s2, museum
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (currState === 'nextImage') {
      handleNextImage();
      setCurrState('none');  // Reset state, needed for useEffect to detect change the next time button is clicked
    } else if (currState === 'prevImage') {
      handlePrevImage();
      setCurrState('none');  // Reset state, needed for useEffect to detect change the next time button is clicked
    }
  }, [currState, setCurrState]);

  return (
    <div style={{ width: "1510px", height: "1130px"}} onClick={handleClickVariable} >
        <img 
          src={images[currentIndex]} 
          alt="Art image" 
          style={{ width: "100%", 
            height: "100%", 
            objectFit: "contain",  // ✅ This makes the image fit the container while maintaining aspect ratio
            maxWidth: "100%", 
            maxHeight: "100%" }} 
        />
    </div>
  )
}

export default MiniPlayer3D