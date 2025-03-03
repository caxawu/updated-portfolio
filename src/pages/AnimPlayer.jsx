import React from 'react';
import { useRef, useState, useEffect } from 'react'

const AnimPlayer = ({currState, setCurrState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('AnimPlayer');
  };

  const images = [
    "src/assets/images/animPlayer/ballie walk.gif",
    "src/assets/images/animPlayer/Balls.gif",
    "src/assets/images/animPlayer/Bounce.gif",
    "src/assets/images/animPlayer/elvenWalk.gif",
    "src/assets/images/animPlayer/final.gif"
  ];

  const [currentImage, setCurrentImage] = useState(null);
  

    useEffect(() => {
      if (currState === 'ballBounce') {
        setCurrentImage("src/assets/images/animPlayer/Bounce.gif");
      } else if (currState === 'twoBalls') {
        setCurrentImage("src/assets/images/animPlayer/Balls.gif");
      } else if (currState === 'walkCycle') {
        setCurrentImage("src/assets/images/animPlayer/ballie walk.gif");
      } else if (currState === 'walkForward') {
        setCurrentImage("src/assets/images/animPlayer/elvenWalk.gif");
      } else if (currState === 'jump') {
        // setCurrentImage("src/assets/images/animPlayer/ballie walk.gif");
      } else if (currState === 'run') {
        setCurrentImage("src/assets/images/animPlayer/final.gif");
      } 
    }, [currState, setCurrState]);

  return (
    <div style={{ width: "2000px", height: "1500px", backgroundColor: "red"}} onClick={handleClickVariable} >
        <img 
          src={currentImage} 
          alt="Description" 
          style={{ width: "auto", 
            height: "100%", 
            // objectFit: "contain",  // ✅ This makes the image fit the container while maintaining aspect ratio
            maxWidth: "100%", 
            maxHeight: "100%" }} 
        />
    </div>
  )
}

export default AnimPlayer