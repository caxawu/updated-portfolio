import React, { useEffect } from 'react';
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { suspend } from 'suspend-react'


const Resume = ({currState, onScreenClick, setCurrState}) => {

  const handleClickVariable = () => {
    onScreenClick('resume');
  };

  return (
    <div style={{width: "1775px", height: "2354px", fontSize: "14px", overflow:"hidden", backgroundColor: "red"}} onClick={handleClickVariable}>
      <div style={{ transform: "scale(1.2)", transformOrigin: "0 0", imageRendering: "crisp-edges" }}>
        <iframe 
          title="embed" 
          width={1480} 
          height={2800} 
          src="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/preview" 
          style={{       
            overflow: currState === 'resume' ? 'auto' : 'hidden', 
            pointerEvents: currState === 'resume' ? 'auto' : 'none'  
          }}
          // sandbox="allow-scripts allow-same-origin"
          
        />
      </div>
    </div>
  )
}

export default Resume