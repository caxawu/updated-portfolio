import React from 'react';
import { useState, useEffect } from 'react'
import diorama1 from "../assets/images/modelsScreen/diorama1.png";
import diorama3 from "../assets/images/modelsScreen/diorama3.png";
import dioramaWIP from "../assets/images/modelsScreen/dioramaWIP.png";
import escher from "../assets/images/modelsScreen/escher.png";
import juice from "../assets/images/modelsScreen/juice.png";
import kitchenAO from "../assets/images/modelsScreen/kitchenAO.png";
import plantTable from "../assets/images/modelsScreen/plantTable.png";
import room from "../assets/images/modelsScreen/room.png";
import roomBasicsAngle from "../assets/images/modelsScreen/roomBasicsAngle.png";
import roomBasicsFront from "../assets/images/modelsScreen/roomBasicsFront.png";

const ModelsScreen3D = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('modelsScreen');
  };

  const images = [
    juice, dioramaWIP, diorama3, diorama1, plantTable, escher, kitchenAO, room, roomBasicsAngle, roomBasicsFront
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
    } else if (currState === 'prevImage') {
      handlePrevImage();
    }
  }, [currState]);


  return (
    <div style={{ width: "2580px", height: "1400px", backgroundColor: "black"}} onClick={handleClickVariable}>

      {/* left arrow */}
      <button 
        onClick={handlePrevImage}
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          top: "93%",
          left: "88%",
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
            width: "50px",
            height: "50px",
            border: "solid #262626",
            borderWidth: "0 0 24px 24px",
            borderRadius: "20px",
            display: "inline-block",
            padding: "2px",
            transform: "translate(10px, -10px)",
        }}/>
      </button>

        {/* right arrow */}
      <button 
        onClick={handleNextImage}
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
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
            width: "50px",
            height: "50px",
            border: "solid #262626",
            borderWidth: "24px 24px 0 0",
            borderRadius: "20px",
            display: "inline-block",
            padding: "2px",
            transform: "translate(-10px, 10px)",
        }}/>
      </button>

        <img 
          src={images[currentIndex]} 
          alt="image" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            pointerEvents: currState === "modelsScreen" ? "auto" : "none", }} 
        />
    </div>
  )
}

export default ModelsScreen3D