import React, { useEffect } from 'react';
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { suspend } from 'suspend-react'


const VRSpaces3D = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('spaces');
  };

  return (
    <div style={{fontSize: "14px", overflow:"hidden", backgroundColor: "black"}} onClick={handleClickVariable}>
      <div style={{
          transform: "scale(1.3)",
          transformOrigin: "0 0",
          imageRendering: "crisp-edges",
          backgroundColor: "black",
          width: "1800px",
          height: "4000px",
          position: "relative",
          display: "flex",
          flexDirection: "column", 
          justifyContent: "flex-end",
          paddingLeft: "100px"
        }}
      >
        <div style={{
          width: "98%",
          height: "98%",
          overflow: "hidden",
          position: "relative"
        }}>
          <button>Close</button>
          <iframe
            title="embed"
            width="100%"
            height="900" // Make it taller than the visible area
            src="https://unrivaled-lebkuchen.netlify.app/static/case-studies/spaces"
            style={{
              border: "none",
              position: "absolute",
              top: "-100px", // Push iframe up to crop top
              left: 0
            }}
          />
        </div>
      </div>
    </div>
  )
}
      // <div style={{
      //     transform: "scale(1.785)",
      //     transformOrigin: "0 0",
      //     imageRendering: "crisp-edges",
      //     backgroundColor: "#FAFAFA",
      //     width: "1445px",
      //     height: "800px",
      //     overflow: "hidden",
      //     pointerEvents: currState === "screen1" ? "auto" : "none",
      //     position: "relative",
      //     display: "flex",
      //     flexDirection: "column", 
      //     justifyContent: "flex-end",
      //   }}>
      //   <div style={{
      //     width: "100%",
      //     height: "88%",
      //     backgroundColor: "#FAFAFA",
      //     overflow: "hidden",
      //     position: "relative",
      //   }}></div>

export default VRSpaces3D