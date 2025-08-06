import { useState, useEffect } from 'react'
import bounceGif from "../assets/images/animPlayer/Bounce.gif";
import twoBallsGif from "../assets/images/animPlayer/Balls.gif";
import walkCycleGif from "../assets/images/animPlayer/ballie walk.gif";
import walkForwardGif from "../assets/images/animPlayer/elvenWalk.gif";
import jumpGif from "../assets/images/animPlayer/jump.gif";
import runGif from "../assets/images/animPlayer/final.gif";

const AnimPlayer3D = ({animState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('animPlayer');
  };

  const [currentImage, setCurrentImage] = useState(null);
  

  useEffect(() => {
    if (animState === "keyBallBounce") {
      setCurrentImage(bounceGif);
    } else if (animState === "keyTwoBalls") {
      setCurrentImage(twoBallsGif);
    } else if (animState === "keyWalkCycle") {
      setCurrentImage(walkCycleGif);
    } else if (animState === "keyWalkForward") {
      setCurrentImage(walkForwardGif);
    } else if (animState === "keyJump") {
      setCurrentImage(jumpGif);
    } else if (animState === "keyRun") {
      setCurrentImage(runGif);
    } else {
      setCurrentImage(runGif);
    }
  }, [animState]);

  return (
    <div style={{
      width: "100%",
      maxWidth: "100vw",
      height: "auto",
      aspectRatio: "2240 / 1790", // maintains aspect ratio
      borderRadius: "2rem",
      overflow: "hidden",
      backgroundColor: "red"
    }} onClick={handleClickVariable} >
      <img
        src={currentImage}
        alt="animation clip"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none"
        }}
      />
    </div>
  )
}

export default AnimPlayer3D