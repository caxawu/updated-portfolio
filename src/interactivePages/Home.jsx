import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Outlet, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import Loader from '../components/Loader'
import Room from './Room'
import Navbar from '../components/Navbar';
import Links from '../components/Links';
import { Html, useProgress } from '@react-three/drei'

import HomeInfo from '../components/HomeInfo'
  
// npm run dev

const Home = () => {
  const defaultCamera = useRef(new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000));
  const [cameraPosition, setCameraPosition] = useState([-12, 3, -8]);     // starting position
  const [cameraLookAt, setCameraRotation] = useState([16, -7, -32]);      //starting rotation
  const [ focusState, setFocusState ] = useState ('home');
  let navigateTo = useNavigate();

  const updateCameraPosition = (newPosition) => {
    const [x, y, z] = newPosition;
    setCameraPosition(newPosition);
  }

  const updateCameraLookAt = (newRotation) => {
    const [x, y, z] = newRotation;
    setCameraRotation(newRotation);
  }

  useEffect(() => {
    if ( focusState === 'home' ) {
      updateCameraPosition([-12, 3, -8]);         // starting position
      updateCameraLookAt([16, -7, -32]);          //starting rotation
      navigateTo('/');

    } else if ( focusState === 'table' ) {
      updateCameraPosition([8, -6, -46]);
      updateCameraLookAt([0, -18, -35]);

    } else if (focusState === 'screen1') {
      updateCameraPosition([8, -11, -56]);
      updateCameraLookAt([-0.5, -2, -36]);
      // navigateTo('case-studies');        // route only for static web

    } else if ( focusState === 'screen2' ) {
      updateCameraPosition([6, -10.3, -57]);
      updateCameraLookAt([-25, -1.5, -36]);

    } else if ( focusState === 'resume' ) {
      updateCameraPosition([16, -10.5, -58.5]);
      updateCameraLookAt([0, -400, -35]);
    
    } else if ( focusState === 'vrShelf' ) {
      updateCameraPosition([11, 10, -41]);
      updateCameraLookAt([35, -12, -36]);
      navigateTo('XR');

    } else if ( focusState === 'spaces' ) {
      updateCameraPosition([22, 6, -52]);
      updateCameraLookAt([35, -12, -36]);
      // navigateTo('XR/spaces');

    } else if ( focusState === 'anivision' ) {
      updateCameraPosition([22, -4, -52]);
      updateCameraLookAt([35, -12, -36]);
      // navigateTo('XR/anivision');

     } else if ( focusState === 'artWall' ) {
      updateCameraPosition([-2, 6, -40]);
      updateCameraLookAt([0, 0, -40]);

    } else if ( focusState === 'corkboard' ) {
      updateCameraPosition([-21, 6, -52]);
      updateCameraLookAt([0, 0, -40]);

    } else if ( focusState === 'drawingHand' ) {
      updateCameraPosition([-24, 6.7, -58]);
      updateCameraLookAt([0, -3, -40]);

    } else if ( focusState === 'drawingDavid' ) {
      updateCameraPosition([-15, 11, -60]);
      updateCameraLookAt([0, -4, -40]);

    } else if ( focusState === 'drawingFish' ) {
      updateCameraPosition([-19, 4, -60]);
      updateCameraLookAt([0, -4, -40]);

    } else if ( focusState === 'businessCard' ) {
      updateCameraPosition([-14, 3, -65]);
      updateCameraLookAt([0, -5, -40]);

    } else if ( focusState === 'sketchbook' ) {
      updateCameraPosition([-3, 0, -61]);
      updateCameraLookAt([0, -3, -40]);

    } else if ( focusState === 'miniPlayer' ) {
      updateCameraPosition([-9.5, -1.1, -65]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'modelsShelf' ) {
      updateCameraPosition([20, 6, -40]);
      updateCameraLookAt([2000, -500, -36]);
      // navigateTo('3d-modeling');
    } else if ( focusState === 'modelsScreen' ) {
      updateCameraPosition([30, 7, -34]);
      updateCameraLookAt([2000, -50, -36]);
    } else if ( focusState === 'animPlayer' ) {
      updateCameraPosition([33, -2.5, -40]);
      updateCameraLookAt([2000, -800, -36]);
    } else if ( focusState === 'egg' ) {
      updateCameraPosition([33, 4.5, -35]);
      updateCameraLookAt([2000, -1000, -36]);
    } else if ( focusState === 'boat' ) {
      updateCameraPosition([33, 3, -40.5]);
      updateCameraLookAt([2000, -1000, -36]);
    } else if ( focusState === 'plant' ) {
      updateCameraPosition([30, 9, -44]);
      updateCameraLookAt([2000, -500, -36]);
    }
    setFocusState('null');
  });


  const [ isRotating, setIsRotating ] = useState (false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustRoomForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -24, -32];
    let rotation = [0, 9.45, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const [RoomScale, RoomPosition, RoomRotation] = adjustRoomForScreenSize();


  return (
    <section className="w-full h-screen relative" style={{background: '#FFFFFF'}}>
      <div className="header">
        <Navbar setFocusState={setFocusState}/>
      </div>

      {/* <div className="links">
        <Links/>
      </div> */}

      <Canvas 
      className= {`canvas-content ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={defaultCamera.current}
      >
      {/* <Html>
        <div className="curve-a"></div>
        <div className="curve-b"></div>
      </Html> */}

        <Suspense fallback={<Loader />}>
          {/* Expense: ambient < hemisphere < directional */}
          <ambientLight intensity={6}/>
          {/* <directionalLight position={[2, 1, 1]} intensity={0}/> */}
          {/* <hemisphereLight skyColor="#FFFFFF" groundColor="#000000" intensity={1}/> */}
          <Room
            position={RoomPosition}
            scale={RoomScale}
            rotation={RoomRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            updateCameraPosition={updateCameraPosition}
            updateCameraLookAt={updateCameraLookAt}
            defaultCamera={defaultCamera.current}
            setFocusState={setFocusState}
          />

        </Suspense>
  
        <CanvasContent
          defaultCamera={defaultCamera}
          cameraPosition={cameraPosition}
          cameraLookAt={cameraLookAt}
          setCameraPosition={setCameraPosition}
          setCameraRotation={setCameraRotation}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
      </Canvas>
      <Outlet />
    </section>
  )
};

const CanvasContent = ({ defaultCamera, cameraPosition, cameraLookAt }) => {
  useFrame(() => {
    if (defaultCamera.current) {
      defaultCamera.current.position.lerp(new THREE.Vector3(...cameraPosition), 0.05);

      // Calculate the current look-at direction
      const currentDirection = new THREE.Vector3();
      defaultCamera.current.getWorldDirection(currentDirection);

      // Calculate the target look-at direction
      const targetDirection = new THREE.Vector3(...cameraLookAt).normalize();

      // Smoothly interpolate towards the target direction
      const intermediateDirection = new THREE.Vector3();
      intermediateDirection.lerpVectors(currentDirection, targetDirection, 0.05); // Adjust the interpolation factor as needed
      
      // Update the camera's orientation to look towards the intermediate direction
      defaultCamera.current.lookAt(defaultCamera.current.position.clone().add(intermediateDirection));

      // defaultCamera.current.lookAt(x, y, z);
    }
  });

  return null;
};

export default Home