import React from 'react';
import { useState, useEffect } from 'react'

const AnimPlayer = ({currState, setCurrState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('animPlayer');
  };

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
        setCurrentImage("src/assets/images/animPlayer/jump.gif");
      } else if (currState === 'run') {
        setCurrentImage("src/assets/images/animPlayer/final.gif");
      } else {
        setCurrentImage("src/assets/images/animPlayer/final.gif");
      } 
    }, [currState, setCurrState]);

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