import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Outlet, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Room from '../models/Room'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import Navbar from '../components/Navbar';
import Links from '../components/Links';
import { Html, useProgress } from '@react-three/drei'

import HomeInfo from '../components/HomeInfo'
  
// npm run dev

const Home = () => {
  const defaultCamera = useRef(new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000));
  const [cameraPosition, setCameraPosition] = useState([-18, 2, -6]);
  const [cameraLookAt, setCameraRotation] = useState([8, -6, -32]);
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
      updateCameraPosition([-18, 2, -6]);
      updateCameraLookAt([8, -6, -32]);
      navigateTo('/');

    } else if ( focusState === 'table' ) {
      updateCameraPosition([0, -6.8, -20]);
      updateCameraLookAt([0, -6.8, -36]);

    } else if (focusState === 'web-mobile') {
      updateCameraPosition([-0.5, -8, -28]);
      updateCameraLookAt([-0.5, -2, -36]);
      navigateTo('web-mobile');

    } else if ( focusState === 'misc' ) {
      updateCameraPosition([-4, -7, -28]);
      updateCameraLookAt([-25, -4, -36]);

    } else if ( focusState === 'shelf' ) {
      updateCameraPosition([-20, 3, -23]);
      updateCameraLookAt([-0.5, -9, -32]);
      navigateTo('XR');

    } else if ( focusState === 'spaces' ) {
      updateCameraPosition([-16, 6, -28]);
      updateCameraLookAt([4, -10, -32]);
      navigateTo('XR/spaces');

    }else if ( focusState === 'anivision' ) {
      updateCameraPosition([-16, -4, -30]);
      updateCameraLookAt([4, -14, -32]);
      navigateTo('XR/anivision');

    }else if ( focusState === 'drawings' ) {
      updateCameraPosition([12, 0, -40]);
      updateCameraLookAt([-6, -2, -40]);

    } else if ( focusState === 'paintings' ) {
      updateCameraPosition([10, 4, -44]);
      updateCameraLookAt([10, -2, -40]);

    } else if ( focusState === 'models' ) {
      navigateTo('3d-modeling');
      updateCameraPosition([28, -2, -40]);
      updateCameraLookAt([41, -30, -40]);
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

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  }

  const [RoomScale, RoomPosition, RoomRotation] = adjustRoomForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();


  return (
    <section className="w-full h-screen relative"
    style={{
      background: '#FFFFFF',
    }}>
      <div className="header">
        <Navbar setFocusState={setFocusState}/>
      </div>

      <div className="links">
        <Links/>
      </div>

      <Canvas 
      className= {`canvas-content ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={defaultCamera.current}
      >
        <Html>
        <div className="curve-a"></div>
        <div className="curve-b"></div>
      </Html>

        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.25}/>
          <hemisphereLight skyColor="#FFFFFF" groundColor="#000000" intensity={1}/>
          {/* <Bird/> */}
          {/* <Sky isRotating={isRotating}/> */}
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
          {/* <Plane
            isRotating = {isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          /> */}

        </Suspense>

        {/* Fog configuration */}
      <fog attach="fog" args={['#AAABD7', 50, 100]} /> {/* Color, near, far */}
  
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