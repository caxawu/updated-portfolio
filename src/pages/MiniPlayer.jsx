import React from 'react';
import { useState, useEffect } from 'react'
import img from "../assets/images/miniPlayer/paintings/daisies.png"

const MiniPlayer = ({currState,setCurrState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('miniPlayer');
  };

  const images = [
    img,
    // "src/assets/images/miniPlayer/paintings/daisies.png",
    "src/assets/images/miniPlayer/paintings/batman.png",
    "src/assets/images/miniPlayer/paintings/dragon.png",
    "src/assets/images/miniPlayer/paintings/fence.png",
    "src/assets/images/miniPlayer/paintings/tuckDrive.png",
    "src/assets/images/miniPlayer/paintings/umbrella.png",
    "src/assets/images/miniPlayer/paintings/howl.png",
    "src/assets/images/miniPlayer/paintings/robot.png",
    "src/assets/images/miniPlayer/paintings/statue.png",
    "src/assets/images/miniPlayer/paintings/vase.png",

    "src/assets/images/miniPlayer/drawings/bellows.png",
    "src/assets/images/miniPlayer/drawings/bike1.png",
    "src/assets/images/miniPlayer/drawings/bike2.png",
    "src/assets/images/miniPlayer/drawings/bike3.png",
    "src/assets/images/miniPlayer/drawings/fruit1.png",
    "src/assets/images/miniPlayer/drawings/fruit2.png",
    "src/assets/images/miniPlayer/drawings/handG1.png",
    "src/assets/images/miniPlayer/drawings/handG2.png",
    "src/assets/images/miniPlayer/drawings/s1.png",
    "src/assets/images/miniPlayer/drawings/s2.png",
    "src/assets/images/miniPlayer/drawings/s3.png",
    "src/assets/images/miniPlayer/drawings/museum.png"
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
      setCurrState('none');  // ✅ Reset state to avoid re-triggering
    } else if (currState === 'prevImage') {
      handlePrevImage();
      setCurrState('none');  // ✅ Reset state after change
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

export default MiniPlayer