import React from 'react';
import { useState, useEffect } from 'react'

const ModelsScreen = ({currState, setCurrState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('modelsScreen');
  };

  const images = [
    "src/assets/images/modelsScreen/diorama1.png",
    "src/assets/images/modelsScreen/diorama3.png",
    "src/assets/images/modelsScreen/dioramaWIP.png",
    "src/assets/images/modelsScreen/escher.png",
    "src/assets/images/modelsScreen/juice.png",
    "src/assets/images/modelsScreen/kitchenAO.png",
    "src/assets/images/modelsScreen/plant.png",
    "src/assets/images/modelsScreen/plantTable.png",
    "src/assets/images/modelsScreen/room.png",
    "src/assets/images/modelsScreen/roomBasicsAngle.png",
    "src/assets/images/modelsScreen/roomBasicsFront.png",
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
    <div style={{ width: "2650px", height: "1900px", backgroundColor: "black"}} onClick={handleClickVariable}>

      {/* left arrow */}
      <button 
        onClick={handlePrevImage}
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          top: "93%",
          left: "86%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          background: "#FFFFFF",
          borderRadius: "300px",
          boxShadow: "0px 0px 50px 0px rgba(89, 89, 89, 1)",
          cursor: "pointer",
          zIndex: 10 // Ensures it's above other content
          }}
        >
        <div    // arrow
          style={{
            width: "100px",
            height: "100px",
            border: "solid #262626",
            borderWidth: "0 0 30px 30px",
            borderRadius: "20px",
            display: "inline-block",
            padding: "8px",
            transform: "translate(10px, -10px)",
        }}/>
      </button>

        {/* right arrow */}
      <button 
        onClick={handleNextImage}
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          top: "93%",
          left: "95%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          background: "#FFFFFF",
          borderRadius: "300px",
          boxShadow: "0px 0px 50px 0px rgba(89, 89, 89, 1)",
          cursor: "pointer",
          zIndex: 10 // Ensures it's above other content
          }}
        >
        <div    // arrow
          style={{
            width: "100px",
            height: "100px",
            border: "solid #262626",
            borderWidth: "30px 30px 0 0",
            borderRadius: "20px",
            display: "inline-block",
            padding: "8px",
            transform: "translate(-10px, 10px)",
        }}/>
      </button>

        <img 
          src={images[currentIndex]} 
          alt="image" 
          style={{ width: "auto", 
            height: "100%", 
            objectFit: "contain" }} 
        />
    </div>
  )
}

export default ModelsScreen