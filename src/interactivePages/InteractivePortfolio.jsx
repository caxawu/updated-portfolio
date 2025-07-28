import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Outlet, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import Loader from '../components/Loader'
import Room from './Room'
  
// npm run dev
//gltfjsx C:\Users\cathy\Desktop\Programs\react\updated-portfolio\src\assets\3d\deskFinal.glb

const InteractivePortfolio = () => {
  const defaultCamera = useRef(new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000));
  const [cameraPosition, setCameraPosition] = useState([-11, 3, -11]);     // starting position
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
      updateCameraPosition([-11, 3, -11]);         // starting position
      updateCameraLookAt([16, -7, -32]);           //starting rotation

    } else if ( focusState === 'table' ) {
      updateCameraPosition([8, -6, -46]);
      updateCameraLookAt([0, -18, -35]);

    } else if (focusState === 'screen1') {
      updateCameraPosition([8.5, -11.3, -57]);
      updateCameraLookAt([0, -1, -36]);

    } else if ( focusState === 'screen2' ) {
      updateCameraPosition([6, -10.3, -57]);
      updateCameraLookAt([-25, -1.5, -36]);

    } else if ( focusState === 'resume' ) {
      updateCameraPosition([16, -10.5, -58.5]);
      updateCameraLookAt([0, -400, -35]);
    
    } else if ( focusState === 'vrShelf' ) {
      updateCameraPosition([11, 10, -41]);
      updateCameraLookAt([35, -12, -36]);

    } else if ( focusState === 'spaces' ) {
      updateCameraPosition([22, 6, -52]);
      updateCameraLookAt([35, -10, -36]);

    } else if ( focusState === 'spacesScreen' ) {
      updateCameraPosition([22, 3, -52]);
      updateCameraLookAt([35, -0, -36]);

    } else if ( focusState === 'anivision' ) {
      updateCameraPosition([22, -4, -52]);
      updateCameraLookAt([35, -12, -36]);

     } else if ( focusState === 'artWall' ) {
      updateCameraPosition([-2, 6, -40]);
      updateCameraLookAt([0, 0, -40]);

    } else if ( focusState === 'corkboard' ) {
      updateCameraPosition([-21, 6, -52]);
      updateCameraLookAt([0, 0, -40]);

    } else if ( focusState === 'drawingHand' ) {
      updateCameraPosition([-25, 6.7, -58]);
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

    } else if ( focusState === 'paintingDoor' ) {
      updateCameraPosition([-4, 10.5, -56]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'paintingFruit' ) {
      updateCameraPosition([6.5, 1, -56]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'paintingBirds' ) {
      updateCameraPosition([16, 2.25, -61]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'paintingLandscape' ) {
      updateCameraPosition([10, 13.75, -59]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'sketchbook' ) {
      updateCameraPosition([-3, 0, -61]);
      updateCameraLookAt([0, -3, -40]);

    } else if ( focusState === 'miniPlayer' ) {
      updateCameraPosition([-9.5, -1.1, -65]);
      updateCameraLookAt([0, -1, -40]);

    } else if ( focusState === 'modelsShelf' ) {
      updateCameraPosition([20, 6, -40]);
      updateCameraLookAt([2000, -500, -36]);
    } else if ( focusState === 'modelsScreen' ) {
      updateCameraPosition([32, 7, -36]);
      updateCameraLookAt([10000, -500, -36]);
    } else if ( focusState === 'animPlayer' ) {
      updateCameraPosition([33, -2.5, -40]);
      updateCameraLookAt([2000, -900, -36]);
    } else if ( focusState === 'egg' ) {
      updateCameraPosition([33, 4.25, -34.75]);
      updateCameraLookAt([2000, -900, -36]);
    } else if ( focusState === 'boat' ) {
      updateCameraPosition([33, 3, -40.5]);
      updateCameraLookAt([2000, -1100, -36]);
    } else if ( focusState === 'flower' ) {
      updateCameraPosition([30.5, 9.25, -44.55]);
      updateCameraLookAt([10000, -3800, -36]);
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
    <div>
          <div className='paper-effect' />
      <div className='interactive-back-container'>
        <div className="link-button text-secondary" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
          back
        </div>
      </div>
    <section className="room" style={{ background: '#FFFFFF' }}>

      <Canvas
        className={`canvas-content ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={defaultCamera.current}
      >
        <Suspense fallback={<Loader />}>
          {/* Expense: ambient < hemisphere < directional */}
          {/* <directionalLight position={[2, 1, 1]} intensity={0}/> */}
          {/* <hemisphereLight skyColor="#FFFFFF" groundColor="#000000" intensity={1}/> */}
          <ambientLight intensity={4.5} color="#ffffff" />
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
    </div>
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

export default InteractivePortfolio;