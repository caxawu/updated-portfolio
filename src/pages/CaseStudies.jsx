import React, { useEffect } from 'react';
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { suspend } from 'suspend-react'


const CaseStudies = ({  updateCameraPosition, updateCameraLookAt }) => {


  // useEffect(() => {
  //   // Call the updateCamera function when the component mounts
  //   // updateCameraPosition([-0.5, -8, -28]);
  //   // updateCameraLookAt([-0.5, -2, -36]);
  //   console.log("calling");
  // }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  // function Cube() {
  //   const textRef = useRef()
  //   useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  //   return (
  //     <mesh>
  //       <boxGeometry />
  //       <meshStandardMaterial>
  //         <RenderTexture attach="map" anisotropy={16}>
  //           <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
  //           <color attach="background" args={['orange']} />
  //           <Text ref={textRef} fontSize={4} color="#555">
  //             hello
  //           </Text>
  //         </RenderTexture>
  //       </meshStandardMaterial>
  //     </mesh>
  //   )
  // }

  return (
    <div className='screen' style={{ width: "2560px", height: "1420px", overflow:"hidden"}}>
      <div style={{ transform: "scale(1.77)", transformOrigin: "0 0", imageRendering: "crisp-edges" }}>
        <iframe title="embed" width={1445} height={800} src="https://xinaicathywu.me/portfolio" />
      </div>
      {/* <div className='title'>
        Case studies
      </div>
      <div className='body'>
        Body text 
        <br/>
        asgds gasdf  adfasdfasdgasdg asdgdasgasdg asdgasd g
        <br/><br/>
        <a id="spaces-button"
          className="white-button"
          href="https://drive.google.com/file/d/1V3baQxHDy1BNthDxZu1wgLeL0Z_KNnFy/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          test button
        </a>
        <div style={{ backgroundColor: 'blue', padding: '100px'}}>
          overflow test
        </div>
        <br/>
        <div style={{ backgroundColor: 'blue', padding: '100px'}}>
          overflow test
        </div>
        <div style={{ zoom: 0.5 }}>
        <iframe title="embed" width="100%" height={800} src="https://xinaicathywu.me/portfolio" frameBorder={0} />
        </div>
        <Outlet />
      </div> */}
    </div>
  )
}

export default CaseStudies