import React, { useEffect } from 'react';
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { suspend } from 'suspend-react'


const OtherProjects3D = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('screen2');
  };

  return (
    <div style={{width: "1775px", height: "2354px", fontSize: "14px", overflow:"hidden", backgroundColor: "black"}} onClick={handleClickVariable}>
      <div
        style={{
          transform: "scale(1.2)",
          transformOrigin: "0 0",
          imageRendering: "crisp-edges",
          backgroundColor: "black",
          width: "1480px",
          height: "2800px",
          overflow: currState === "screen2" ? "auto" : "hidden",
          pointerEvents: currState === "screen2" ? "auto" : "none",
          position: "relative",
        }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative"
        }}>
          <iframe
            title="embed"
            width="100%"
            height="2150" // Make it taller than the visible area
            src="https://unrivaled-lebkuchen.netlify.app/static/mini-projects"
            style={{
              border: "none",
              position: "absolute",
              top: "-160px", // Push iframe up to crop top
              left: 0
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OtherProjects3D