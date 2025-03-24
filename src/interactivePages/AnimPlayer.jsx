import React from 'react';
import { useState, useEffect } from 'react'
import bounceGif from "../assets/images/animPlayer/Bounce.gif";
import twoBallsGif from "../assets/images/animPlayer/Balls.gif";
import walkCycleGif from "../assets/images/animPlayer/ballie walk.gif";
import walkForwardGif from "../assets/images/animPlayer/elvenWalk.gif";
import jumpGif from "../assets/images/animPlayer/jump.gif";
import runGif from "../assets/images/animPlayer/final.gif";

const AnimPlayer = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('animPlayer');
  };

  const [currentImage, setCurrentImage] = useState(null);
  

  useEffect(() => {
    if (currState === "ballBounce") {
      setCurrentImage(bounceGif);
    } else if (currState === "twoBalls") {
      setCurrentImage(twoBallsGif);
    } else if (currState === "walkCycle") {
      setCurrentImage(walkCycleGif);
    } else if (currState === "walkForward") {
      setCurrentImage(walkForwardGif);
    } else if (currState === "jump") {
      setCurrentImage(jumpGif);
    } else if (currState === "run") {
      setCurrentImage(runGif);
    } else {
      setCurrentImage(runGif);
    }
  }, [currState]);

  return (
    <div style={{ width: "2000px", height: "1500px", backgroundColor: "red"}} onClick={handleClickVariable} >
        <img 
          src={currentImage} 
          alt="animation clip" 
          style={{ width: "auto", 
            height: "100%", 
            objectFit: "cover" }} 
        />
    </div>
  )
}

export default AnimPlayer