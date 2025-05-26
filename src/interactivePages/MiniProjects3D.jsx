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
      <div style={{ transform: "scale(1.2)", transformOrigin: "0 0", imageRendering: "crisp-edges" }}>
        <iframe 
          title="embed" 
          width={1480} 
          height={2800} 
          // src="https://xinaicathywu.me/other-works" 
          src="https://unrivaled-lebkuchen.netlify.app/"
          style={{       
            overflow: currState === 'screen2' ? 'auto' : 'hidden', 
            pointerEvents: currState === 'screen2' ? 'auto' : 'none'  
          }}
        />
      </div>
    </div>
  )
}

export default OtherProjects3D