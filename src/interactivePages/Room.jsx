import { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three';
import { a, useSpring } from '@react-spring/three';  // Import 'a' for animated mesh
import { motion } from "framer-motion";
import ParticleSystemTea from "./ParticleSystemTea";
import ParticleSystemFloaties from "./ParticleSystemFloaties";

import roomScene from '../assets/3d/deskFinalInt1.glb'
import CaseStudies from './CaseStudies3D';
import MiniPlayer from './MiniPlayer3D';
import AnimPlayer from './AnimPlayer3D';
import ModelsScreen from './ModelsScreen3D';
import MiniProjects from './MiniProjects3D';
import Spaces3D from './VRSpaces3D';
import Resume from './Resume3D';

const Room = ({isRotating, setIsRotating, setCurrentStage, updateCameraPosition, updateCameraLookAt, defaultCamera, setFocusState, ...props}) => {
  const roomRef = useRef();
  const [meshes, setMeshes] = useState([]);

  const { gl } = useThree(); 
  const { nodes, materials, animations } = useGLTF(roomScene);
  const { actions } = useAnimations(animations, roomRef);

  const lastX = useRef(0);
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const currCamera = defaultCamera;
  let INTERSECTED;

  const [ currState, setCurrState ] = useState ('home');    // To pass into HTML children to turn off interactivity before zooming in
  const [isArrowPressed, setIsArrowPressed] = useState(false);

  const [showSpacesBlock, setShowSpacesBlock] = useState(false);
  const [startVRAnim, setStartVRAnim] = useState(false);
    const [showHtmlUI, setShowHtmlUI] = useState(false);
    const [blackWipeDone, setBlackWipeDone] = useState(false);
const [htmlReady, setHtmlReady] = useState(false);


  const particleSystemRef = useRef();  // Keep the reference of the ParticleSystem

   // Animate the mesh position when the buttons are pressed
   const { positionLeft, positionRight, positionBallBounce, positionTwoBalls, positionWalkCycle, positionWalkForward, positionJump, positionRun, keycap1, keycap2 } = useSpring({
    positionLeft: isArrowPressed === 'left' ? [0, 0, 0.6] : [0, 0, 0],
    positionRight: isArrowPressed === 'right' ? [0, 0, 0.6] : [0, 0, 0],
    positionBallBounce: isArrowPressed === 'ballBounce' ? [0, -2, 0] : [0, 0, 0],
    positionTwoBalls: isArrowPressed === 'twoBalls' ? [0, -2, 0] : [0, 0, 0],
    positionWalkCycle: isArrowPressed === 'walkCycle' ? [0, -2, 0] : [0, 0, 0],
    positionWalkForward: isArrowPressed === 'walkForward' ? [0, -2, 0] : [0, 0, 0],
    positionJump: isArrowPressed === 'jump' ? [0, -2, 0] : [0, 0, 0],
    positionRun: isArrowPressed === 'run' ? [0, -2, 0] : [0, 0, 0],
    keycap1: isArrowPressed === 'keycap1' ? [0, -2, 0] : [0, 0, 0],
    keycap2: isArrowPressed === 'keycap2' ? [0, -2, 0] : [0, 0, 0],
    config: { tension: 170, friction: 26 },  // Smooth animation config
  });

  const handleButtonAnimation = (arrow) => {
    setIsArrowPressed(arrow); // Set the state to either 'left' or 'right'
    setTimeout(() => {
      setIsArrowPressed(false);  // Reset the animation after 200ms
    }, 100);
  };

  // loop animations in scene
useEffect(() => {
  // Play all relevant animations
  if (animations.length > 0 && actions) {
    animations.forEach((clip) => {
      if (clip.name !== 'tail1' && actions[clip.name]) {
        actions[clip.name].play();
      }
    });
  }
  // Start or resume the particle system if it exists
  particleSystemRef.current?.play();
}, [actions, animations]);

  const handleMeshRef = (mesh) => {
    if (mesh && !meshes.includes(mesh)) {
       setMeshes(prevMeshes => [...prevMeshes, mesh]);
    }
  };

    // handles clicks on 2d objs: html blocks, iFrames, etc. (Variable passed in from child jsx)
    const handleScreenClick = (location) => {
      setCurrState((prevState) => {

        // table screen zooms
        if (location === 'screen1' || location === 'screen2' || location === 'resume') {
          if (prevState === 'home') {  // if clicking from home, zoom to the table
            setFocusState('table');
            return 'table';
          } else if (prevState === 'table') {   // if clicking from table, zoom to clicked screen
            setFocusState(location);
            return location;
          }
        }
        if (location === 'screen2' && prevState === 'screen1') {   // If you're on screen1 and click on screen2, or vice versa, switch directly between them
          setFocusState('screen2');
          return 'screen2';
        }
        if (location === 'screen1' && prevState === 'screen2') {
          setFocusState('screen1');
          return 'screen1';
        }
        // models shelf screen zooms
        if (location === 'modelsScreen' || location === 'animPlayer') {
          if (prevState === 'home') { 
            setFocusState('modelsShelf');
            return 'modelsShelf';
          } else if (prevState === 'modelsShelf') { 
            setFocusState(location);
            return location;
          }
        }
        // models shelf screen zooms
        if (location === 'miniPlayer') {
          if (prevState === 'home') { 
            setFocusState('artWall');
            return 'artWall';
          } else if (prevState === 'artWall') { 
            setFocusState(location);
            return location;
          }
        }
        // If already focused on the same screen, do nothing
        if (prevState === location) {
          return prevState;  // Stay on the current screen
        }
        // Default: return the previous state if no condition matched
        return prevState;
      });
    };

  // handles clicks on 3d objs: meshes in 3d model
  const handlePointerDown = (e) => {
    pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

       // find intersections
       raycaster.setFromCamera( pointer, currCamera );
       // Use meshes array for raycasting
       const intersects = raycaster.intersectObjects(meshes, false);
   
       if ( intersects.length > 0 ) {
         if ( INTERSECTED != intersects[ 0 ].object) {
           INTERSECTED = intersects[ 0 ].object;
           
           if (INTERSECTED.name === 'table') {
            // If clicking on the table, zoom out to the table
            setFocusState('table');
            setCurrState('table');
          } else if (INTERSECTED.name === 'screen1') {
            setCurrState((prevState) => {
              if (prevState === 'table' || prevState === 'screen2') {
                setFocusState('screen1');
                return 'screen1';
              } else if (prevState === 'screen1') {
                return 'screen1';
              }
              return prevState; // Stay on the current state if no change is needed
            });
          } else if (INTERSECTED.name === 'screen2') {
            setCurrState((prevState) => {
              if (prevState === 'table' || prevState === 'screen1') {
                setFocusState('screen2'); // Zoom into screen2
                return 'screen2';
              }
              return prevState; // Stay on screen2 if already there
            });
          } else if (INTERSECTED.name === 'resume') {
            setCurrState((prevState) => {
              if (prevState === 'table') {
                setFocusState('resume'); // Zoom into resume
                return 'resume';
              }
              return prevState; // Stay on resume if already there
            });
          } else if (INTERSECTED.name === 'keycap1' || INTERSECTED.name === 'keycap2') {
            handleButtonAnimation(INTERSECTED.name); // Animate keycap1 or keycap2
          }
          
          else if ( INTERSECTED.name == 'vrShelf' ) {
            setFocusState('vrShelf');
          } else if ( INTERSECTED.name == 'spaces' ) {
            setFocusState('spaces');
          } else if (INTERSECTED.name == 'descSpacesButton') {
            setFocusState('spacesScreen');
            setShowSpacesBlock(true);
            setStartVRAnim(true);
          }
          else if ( INTERSECTED.name == 'anivision' ) {
            setFocusState('anivision');
          } else if ( INTERSECTED.name == 'artWall' ) {
            setFocusState('artWall');
          } else if ( INTERSECTED.name == 'corkboard' ) {
            setFocusState('corkboard');
          } else if ( INTERSECTED.name == 'drawingHand' ) {
            setFocusState('drawingHand');
          } else if ( INTERSECTED.name == 'drawingDavid' ) {
            setFocusState('drawingDavid');
          } else if ( INTERSECTED.name == 'drawingFish' ) {
            setFocusState('drawingFish');
          } else if ( INTERSECTED.name == 'businessCard' ) {
            setFocusState('businessCard');
          } else if ( INTERSECTED.name == 'sketchbook' ) {
            setFocusState('sketchbook');
          } else if ( INTERSECTED.name == 'miniPlayer' ) {
            setFocusState('miniPlayer');
          } else if ( INTERSECTED.name == 'arrowRight' ) {
            setFocusState('miniPlayer');
            setCurrState('nextImage');
            handleButtonAnimation('right');
          } else if ( INTERSECTED.name == 'arrowLeft' ) {
            setFocusState('miniPlayer');
            setCurrState('prevImage');
            handleButtonAnimation('left');
          } else if ( INTERSECTED.name == 'modelsShelf' ) {
            setFocusState('modelsShelf');
          } else if ( INTERSECTED.name == 'modelsScreen' ) {
            setFocusState('modelsScreen');
          } else if ( INTERSECTED.name == 'animPlayer' ) {
            setFocusState('animPlayer');
          } else if ( INTERSECTED.name == 'keyBallBounce' ) {
            setFocusState('animPlayer');
            setCurrState('ballBounce');
            handleButtonAnimation('ballBounce');
          } else if ( INTERSECTED.name == 'keyTwoBalls' ) {
            setFocusState('animPlayer');
            setCurrState('twoBalls');
            handleButtonAnimation('twoBalls');
          } else if ( INTERSECTED.name == 'keyWalkCycle' ) {
            setFocusState('animPlayer');
            setCurrState('walkCycle');
            handleButtonAnimation('walkCycle');
          } else if ( INTERSECTED.name == 'keyWalkForward' ) {
            setFocusState('animPlayer');
            setCurrState('walkForward');
            handleButtonAnimation('walkForward');
          } else if ( INTERSECTED.name == 'keyJump' ) {
            setFocusState('animPlayer');
            setCurrState('jump');
            handleButtonAnimation('jump');
          } else if ( INTERSECTED.name == 'keyRun' ) {
            setFocusState('animPlayer');
            setCurrState('run');
            handleButtonAnimation('run'); 
          } else if ( INTERSECTED.name == 'egg' ) {
            setFocusState('egg');
          } else if ( INTERSECTED.name == 'boat' ) {
            setFocusState('boat');
          } else if ( INTERSECTED.name == 'flower' ) {
            setFocusState('flower');
          } else if ( INTERSECTED.name == 'home' ) {
            setFocusState('home');
            setCurrState('home');
          } else {
            setFocusState('none');
            setCurrState('none');
          }
        }
      } else {
         INTERSECTED = null;
      }
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches 
        ? e.touches[0].clientX 
        : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setFocusState("home");
      setCurrState('home');
    }
  };
  const handleKeyUp = (e) => {
  }


  useEffect (() => {
      if (startVRAnim) {
    const timeout = setTimeout(() => setShowHtmlUI(true), 1000); // match transition duration
    return () => clearTimeout(timeout);
  }

    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handleKeyDown, startVRAnim])

  return (
    <>
    {/* {!showHtmlUI && (
      <Html
        center
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 100,
        }}
      >
<motion.div
  initial={{ opacity: 1, clipPath: "circle(0% at 50% 50%)" }}
  animate={{ opacity: 0, clipPath: "circle(150% at 50% 50%)" }}
  transition={{ duration: 2, ease: "easeInOut" }}
  style={{
    backgroundColor: "red",
    width: "100vw",
    height: "100vh",
    position: "absolute",  // Ensure it fills the viewport
    top: 0, 
    left: 0,
    borderRadius: "50%",   // Adding border radius for the circular effect
  }}
/>
      </Html>
    )} */}
    <a.group ref={roomRef}{...props}>
      <group rotation={[0, -0.02, 0]} scale={0.1}>
        <ParticleSystemFloaties origin={[-20, 200, -30]} />

<group name="Scene">
        <group name="table">
          <mesh
            name="table" ref={handleMeshRef}
            geometry={nodes.cushion.geometry}
            material={materials.m_cushionBaked}
          />
          <group name="monitor1">
            <mesh
              ref={handleMeshRef}
              name="screen1"
              geometry={nodes.monitor1Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              ref={handleMeshRef}
              name="screen1"
              geometry={nodes.monitor1Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
            <Html scale={2} rotation-y={-Math.PI} position={[-91.4, 126.4, 327]} transform occlude>
              <CaseStudies onScreenClick={handleScreenClick} currState={currState} />
            </Html>
          </group>
          <group name="monitor2">
            <mesh
              ref={handleMeshRef}
              name="screen2"
              geometry={nodes.monitor2Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              ref={handleMeshRef}
              name="screen2"
              geometry={nodes.monitor2Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
            <Html scale={[1.5, -1.5, -1.5]} rotation={[0, 0.597, -Math.PI]} position={[5.7, 133.534, 306.7]} transform occlude>
              <MiniProjects onScreenClick={handleScreenClick} currState={currState} />
            </Html>
          </group>
          <mesh
            name="resume" ref={handleMeshRef}
            geometry={nodes.resume.geometry}
            material={materials.m_whitePaperBaked}
          />
          <Html scale={1} rotation-x={Math.PI / 2} rotation-y={Math.PI} rotation-z={-0.02} position={[-165, 77, 270]} transform occlude>
            <Resume onScreenClick={handleScreenClick} currState={currState} setCurrState={setCurrState} />
          </Html>
          <mesh
            name="table" ref={handleMeshRef}
            geometry={nodes.table_1.geometry}
            material={materials.m_tableHeadsetWhiteBaked}
            position={[0, 1.114, 0]}
          />
          <mesh
            name="keyboardBottom"
            geometry={nodes.keyboardBottom.geometry}
            material={materials.m_keyboardBottomBaked}
            position={[-90.138, 77.453, 267.842]}
            scale={[29.994, 18.589, 20.924]}
          />
          <group name="keycaps">
            <mesh
              name="key1"
              castShadow
              receiveShadow
              geometry={nodes.key1.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key2"
              castShadow
              receiveShadow
              geometry={nodes.key2.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key3"
              castShadow
              receiveShadow
              geometry={nodes.key3.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key4"
              castShadow
              receiveShadow
              geometry={nodes.key4.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key5"
              castShadow
              receiveShadow
              geometry={nodes.key5.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key6"
              castShadow
              receiveShadow
              geometry={nodes.key6.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key7"
              castShadow
              receiveShadow
              geometry={nodes.key7.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key8"
              castShadow
              receiveShadow
              geometry={nodes.key8.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key9"
              castShadow
              receiveShadow
              geometry={nodes.key9.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key10"
              castShadow
              receiveShadow
              geometry={nodes.key10.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key11"
              castShadow
              receiveShadow
              geometry={nodes.key11.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key12"
              castShadow
              receiveShadow
              geometry={nodes.key12.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key13"
              castShadow
              receiveShadow
              geometry={nodes.key13.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key14"
              castShadow
              receiveShadow
              geometry={nodes.key14.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key15"
              castShadow
              receiveShadow
              geometry={nodes.key15.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key16"
              castShadow
              receiveShadow
              geometry={nodes.key16.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key17"
              castShadow
              receiveShadow
              geometry={nodes.key17.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key18"
              castShadow
              receiveShadow
              geometry={nodes.key18.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key19"
              castShadow
              receiveShadow
              geometry={nodes.key19.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key20"
              castShadow
              receiveShadow
              geometry={nodes.key20.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key21"
              castShadow
              receiveShadow
              geometry={nodes.key21.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key22"
              castShadow
              receiveShadow
              geometry={nodes.key22.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key23"
              castShadow
              receiveShadow
              geometry={nodes.key23.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key24"
              castShadow
              receiveShadow
              geometry={nodes.key24.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key25"
              castShadow
              receiveShadow
              geometry={nodes.key25.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key26"
              castShadow
              receiveShadow
              geometry={nodes.key26.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key27"
              castShadow
              receiveShadow
              geometry={nodes.key27.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key28"
              castShadow
              receiveShadow
              geometry={nodes.key28.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key29"
              castShadow
              receiveShadow
              geometry={nodes.key29.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key30"
              castShadow
              receiveShadow
              geometry={nodes.key30.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key31"
              castShadow
              receiveShadow
              geometry={nodes.key31.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key32"
              castShadow
              receiveShadow
              geometry={nodes.key32.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key33"
              castShadow
              receiveShadow
              geometry={nodes.key33.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key34"
              castShadow
              receiveShadow
              geometry={nodes.key34.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key35"
              castShadow
              receiveShadow
              geometry={nodes.key35.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key36"
              castShadow
              receiveShadow
              geometry={nodes.key36.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key37"
              castShadow
              receiveShadow
              geometry={nodes.key37.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key38"
              castShadow
              receiveShadow
              geometry={nodes.key38.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key39"
              castShadow
              receiveShadow
              geometry={nodes.key39.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key40"
              castShadow
              receiveShadow
              geometry={nodes.key40.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key41"
              castShadow
              receiveShadow
              geometry={nodes.key41.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key42"
              castShadow
              receiveShadow
              geometry={nodes.key42.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key43"
              castShadow
              receiveShadow
              geometry={nodes.key43.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key44"
              castShadow
              receiveShadow
              geometry={nodes.key44.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key45"
              castShadow
              receiveShadow
              geometry={nodes.key45.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key46"
              castShadow
              receiveShadow
              geometry={nodes.key46.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key47"
              castShadow
              receiveShadow
              geometry={nodes.key47.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key48"
              castShadow
              receiveShadow
              geometry={nodes.key48.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key49"
              castShadow
              receiveShadow
              geometry={nodes.key49.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key50"
              castShadow
              receiveShadow
              geometry={nodes.key50.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key51"
              castShadow
              receiveShadow
              geometry={nodes.key51.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key52"
              castShadow
              receiveShadow
              geometry={nodes.key52.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key53"
              castShadow
              receiveShadow
              geometry={nodes.key53.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key54"
              castShadow
              receiveShadow
              geometry={nodes.key54.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key55"
              castShadow
              receiveShadow
              geometry={nodes.key55.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key56"
              castShadow
              receiveShadow
              geometry={nodes.key56.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key57"
              castShadow
              receiveShadow
              geometry={nodes.key57.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <mesh
              name="key58"
              castShadow
              receiveShadow
              geometry={nodes.key58.geometry}
              material={materials.m_keycapPinkBaked}
              position={[-56.695, 79.456, 276.885]}
              scale={[4.671, 2.207, 4.671]}
            />
            <mesh
              name="key59"
              castShadow
              receiveShadow
              geometry={nodes.key59.geometry}
              material={materials.m_keycapYellowBaked}
            />
            <mesh
              name="key60"
              castShadow
              receiveShadow
              geometry={nodes.key60.geometry}
              material={materials.m_keycapGreenBaked}
              position={[-124.057, 79.456, 267.27]}
              scale={[4.671, 2.207, 4.671]}
            />
            <mesh
              name="key61"
              castShadow
              receiveShadow
              geometry={nodes.key61.geometry}
              material={materials.m_keycapPurpleBaked}
              position={[-109.499, 79.456, 257.574]}
              scale={[4.671, 2.207, 4.671]}
            />
            <mesh
              name="key62"
              castShadow
              receiveShadow
              geometry={nodes.key62.geometry}
              material={materials.m_keycapBlueBaked}
            />
          </group>
          <mesh
            name="teacup"
            castShadow
            receiveShadow
            geometry={nodes.teacup.geometry}
            material={materials.m_teacupBaked}
            position={[-20.124, 84.674, 278.185]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[5.672, 6.76, 5.672]}
          />
          <ParticleSystemTea origin={[-20.124, 95, 278.185]} ref={particleSystemRef} />
        </group>
        <group name="modelsShelf">
          <mesh
            name="modelsShelf" ref={handleMeshRef}
            geometry={nodes.modelsHitbox.geometry}
            material={materials.m_hitbox1}
            position={[-389.412, 207.232, 119.528]}
            scale={[2.977, 112.544, 141.696]}
          />
          <mesh
            name="modelsShelf" ref={handleMeshRef}
            geometry={nodes._modelsShelf.geometry}
            material={materials.m_woodShelfBaked}
          />
          <mesh
            name="modelsScreen" ref={handleMeshRef}
            geometry={nodes.modelsScreen.geometry}
            material={materials.m_digitalFrameBaked}
            position={[-386.894, 312.47, 26.769]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.108, 0.004, 4.959]}
          />
          <Html scale={1} rotation-y={Math.PI / 2} position={[-387, 314.8, 26.7]} transform occlude>
            <ModelsScreen onScreenClick={handleScreenClick} currState={currState} />
          </Html>
          <mesh
            name="flower" ref={handleMeshRef}
            geometry={nodes.flowerHitbox.geometry}
            material={materials.m_hitbox1}
            position={[-370.295, 293.418, 155.738]}
            scale={3.793}
          />
          <group name="flower">
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape.geometry}
              material={materials.m_lily1Baked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_1.geometry}
              material={materials.m_plantStemBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_2.geometry}
              material={materials.m_plantBroadLeafBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_3.geometry}
              material={materials.m_flowerCenterBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_4.geometry}
              material={materials.m_flowerLeafsBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_5.geometry}
              material={materials.m_lilyBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_6.geometry}
              material={materials.m_plantPotBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_7.geometry}
              material={materials.m_lilyWater}
            />
          </group>
          <group name="boat">
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape.geometry}
              material={materials.m_oarBaked}
            />
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_1.geometry}
              material={materials.m_boatRust}
            />
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_2.geometry}
              material={materials.m_lanternGlass}
            />
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_3.geometry}
              material={materials.m_lanternBaked}
            />
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_4.geometry}
              material={materials.m_boatBaked}
            />
            <mesh
              mesh name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_5.geometry}
              material={materials.m_lanternHandleBaked}
            />
          </group>
          <group name="egg">
            <mesh
              name="eggShape"
              castShadow
              receiveShadow
              geometry={nodes.eggShape.geometry}
              material={materials.m_dioOarBaked}
            />
            <mesh
              name="eggShape_1"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_1.geometry}
              material={materials.m_eggShellBaked}
            />
            <mesh
              name="eggShape_2"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_2.geometry}
              material={materials.m_butterflyYellowBaked}
            />
            <mesh
              name="eggShape_3"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_3.geometry}
              material={materials.m_dioLeafBigBaked1}
            />
            <mesh
              name="eggShape_4"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_4.geometry}
              material={materials.m_dioWaterBaked}
            />
            <mesh
              name="eggShape_5"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_5.geometry}
              material={materials.m_dioLeafSmallBaked}
            />
            <mesh
              name="eggShape_6"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_6.geometry}
              material={materials.m_dioStemBaked}
            />
            <mesh
              name="eggShape_7"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_7.geometry}
              material={materials.m_dioRockBaked}
            />
            <mesh
              name="eggShape_8"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_8.geometry}
              material={materials.m_eggHolderBaked}
            />
            <mesh
              name="eggShape_9"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_9.geometry}
              material={materials.m_eggInsideBaked}
            />
            <mesh
              name="eggShape_10"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_10.geometry}
              material={materials.m_dioTwigBaked}
            />
            <mesh
              name="eggShape_11"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_11.geometry}
              material={materials.m_butterflyBlueBaked}
            />
            <mesh
              name="eggShape_12"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_12.geometry}
              material={materials.m_dioLilyPadBaked}
            />
            <mesh
              name="eggShape_13"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_13.geometry}
              material={materials.m_dioGrass1Baked1}
            />
            <mesh
              name="eggShape_14"
              castShadow
              receiveShadow
              geometry={nodes.eggShape_14.geometry}
              material={materials.m_dioBoatBaked}
            />
          </group>
          <mesh
            name="egg" ref={handleMeshRef}
            geometry={nodes.eggHitbox.geometry}
            material={materials.m_hitbox1}
            position={[-364.516, 255.032, 25.599]}
            scale={0.846}
          />
          <group name="animPlayer">
            <mesh
              mesh name="animPlayer" ref={handleMeshRef}
              geometry={nodes.animPlayerShape.geometry}
              material={materials.m_keycapYellowBaked}
            />
            <mesh
              mesh name="animPlayer" ref={handleMeshRef}
              geometry={nodes.animPlayerShape_1.geometry}
              material={materials.m_animPlayerBaked}
            />
            <mesh
              mesh name="animPlayer" ref={handleMeshRef}
              geometry={nodes.animPlayerShape_2.geometry}
              material={materials.m_keycapYellowBaked1}
            />
          </group>
            <group name="AnimKeys">
              <a.mesh name="keyWalkForward" ref={handleMeshRef} position={positionWalkForward} geometry={nodes.keyWalkForward.geometry} material={materials.m_controlButtonsBaked} />
              <a.mesh name="keyRun" ref={handleMeshRef} position={positionRun} geometry={nodes.keyRun.geometry} material={materials.m_controlButtonsBaked} />
              <a.mesh name="keyTwoBalls" ref={handleMeshRef} position={positionTwoBalls} geometry={nodes.keyTwoBalls.geometry} material={materials.m_controlButtonsBaked} />
              <a.mesh name="keyJump" ref={handleMeshRef} position={positionJump} geometry={nodes.keyJump.geometry} material={materials.m_controlButtonsBaked} />
              <a.mesh name="keyWalkCycle" ref={handleMeshRef} position={positionWalkCycle} geometry={nodes.keyWalkCycle.geometry} material={materials.m_controlButtonsBaked} />
              <a.mesh name="keyBallBounce" ref={handleMeshRef} position={positionBallBounce} geometry={nodes.keyBallBounce.geometry} material={materials.m_controlButtonsBaked} />
              <Html scale={0.4} rotation-y={Math.PI / 2} position={[-366.1, 206.8, 80.25]} transform occlude>
                <AnimPlayer onScreenClick={handleScreenClick} currState={currState} />
              </Html>
            </group>
        </group>
        <group name="artWall">
          <mesh
            name="_shelf1"
            castShadow
            receiveShadow
            geometry={nodes._shelf1.geometry}
            material={materials.m_woodShelfBaked}
            position={[64.396, 212.258, 359.733]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.182, 0.039, 0.602]}
          />
          <group name="miniPlayer">
            <group name="miniPlayer_1">
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape.geometry}
                material={materials.m_miniPlayerWoodBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_1.geometry}
                material={materials.m_miniPlayerFaceBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_2.geometry}
                material={materials.m_blackBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_3.geometry}
                material={materials.m_blackRubberBaked}
              />
            </group>
            <a.mesh
              name="arrowLeft" ref={handleMeshRef} position={positionLeft} onPointerDown={handlePointerDown}
              geometry={nodes.arrowLeft.geometry}
              material={materials.m_controlButtonsBaked}
            />
            <a.mesh
              name="arrowRight" ref={handleMeshRef} position={positionRight} onPointerDown={handlePointerDown}
              geometry={nodes.arrowRight.geometry}
              material={materials.m_controlButtonsBaked}
            />
            <Html scale={0.4} rotation-y={-Math.PI} position={[94.47, 232.21, 354]} transform occlude>
              <MiniPlayer onScreenClick={handleScreenClick} currState={currState} setCurrState={setCurrState} />
            </Html>
          </group>
          <group name="inkwell">
            <mesh
              name="inkwellShape"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape.geometry}
              material={materials.m_inkBaked}
            />
            <mesh
              name="inkwellShape_1"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_1.geometry}
              material={materials.m_glass}
            />
            <mesh
              name="inkwellShape_2"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_2.geometry}
              material={materials.m_inkWaxBaked}
            />
            <mesh
              name="inkwellShape_3"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_3.geometry}
              material={materials.m_inkRibbonBaked}
            />
          </group>
          <group name="brushes">
            <mesh
              name="brushesShape"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape.geometry}
              material={materials.m_paintbrushMetalGoldBaked}
            />
            <mesh
              name="brushesShape_1"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_1.geometry}
              material={materials.m_paintbrushHandleBrownBaked}
            />
            <mesh
              name="brushesShape_2"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_2.geometry}
              material={materials.m_paintbrushHairDarkBrownBaked}
            />
            <mesh
              name="brushesShape_3"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_3.geometry}
              material={materials.m_ceramicCupBaked}
            />
            <mesh
              name="brushesShape_4"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_4.geometry}
              material={materials.m_paintbrushMetalSilverBaked}
            />
            <mesh
              name="brushesShape_5"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_5.geometry}
              material={materials.m_paintbrushHairBrownBaked}
            />
            <mesh
              name="brushesShape_6"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_6.geometry}
              material={materials.m_paintbrushHandleBaked}
            />
            <mesh
              name="brushesShape_7"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_7.geometry}
              material={materials.m_blackBaked}
            />
          </group>
          <group name="tidalBasin">
            <mesh
              name="sketchbook" ref={handleMeshRef}
              geometry={nodes.tidalBasinShape.geometry}
              material={materials.m_artTidalBasin}
            />
            <mesh
              name="sketchbook" ref={handleMeshRef}
              geometry={nodes.tidalBasinShape_1.geometry}
              material={materials.m_whitePaperBaked}
            />
            <mesh
              name="sketchbook" ref={handleMeshRef}
              geometry={nodes.tidalBasinShape_2.geometry}
              material={materials.m_blackBaked}
            />
          </group>
          <group name="door">
            <mesh
              name="doorShape"
              castShadow
              receiveShadow
              geometry={nodes.doorShape.geometry}
              material={materials.m_artPaintingDoor}
            />
            <mesh
              name="doorShape_1"
              castShadow
              receiveShadow
              geometry={nodes.doorShape_1.geometry}
              material={materials.m_paintingFrameBaked}
            />
          </group>
          <group name="fruit">
            <mesh
              name="fruitShape"
              castShadow
              receiveShadow
              geometry={nodes.fruitShape.geometry}
              material={materials.m_artPaintingFruit}
            />
            <mesh
              name="fruitShape_1"
              castShadow
              receiveShadow
              geometry={nodes.fruitShape_1.geometry}
              material={materials.m_paintingFrameBaked}
            />
          </group>
          <group name="landscape">
            <mesh
              name="landscapeShape"
              castShadow
              receiveShadow
              geometry={nodes.landscapeShape.geometry}
              material={materials.m_artPaintingLandscape}
            />
            <mesh
              name="landscapeShape_1"
              castShadow
              receiveShadow
              geometry={nodes.landscapeShape_1.geometry}
              material={materials.m_paintingFrameBaked}
            />
          </group>
          <group name="birds">
            <mesh
              name="birdsShape"
              castShadow
              receiveShadow
              geometry={nodes.birdsShape.geometry}
              material={materials.m_artPaintingBirds}
            />
            <mesh
              name="birdsShape_1"
              castShadow
              receiveShadow
              geometry={nodes.birdsShape_1.geometry}
              material={materials.m_paintingFrameBaked}
            />
          </group>
          <group name="corkboard">
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.corkboardShape.geometry}
              material={materials.m_keycapYellowBaked}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.corkboardShape_1.geometry}
              material={materials.m_corkSurfaceBaked}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.corkboardShape_2.geometry}
              material={materials.m_whiteFrameBaked}
            />
          </group>
          <mesh
            name="businessCard" ref={handleMeshRef}
            geometry={nodes.businessCard.geometry}
            material={materials.m_artBusinessCard}
            position={[133.634, 244.941, 374.941]}
            rotation={[Math.PI / 2, -0.031, -Math.PI]}
            scale={[25.739, 84.174, 14.145]}
          />
          <mesh
            name="drawingFish" ref={handleMeshRef}
            geometry={nodes.fish.geometry}
            material={materials.m_artDrawingFish}
            position={[184.242, 133.823, 373.165]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[50.416, 54.923, 71.539]}
          />
          <mesh
            name="drawingHand" ref={handleMeshRef}
            geometry={nodes.hand.geometry}
            material={materials.m_artDrawingHand}
            position={[258.045, 93.144, 373.493]}
            rotation={[Math.PI / 2, 0.021, Math.PI]}
            scale={[81.023, 81.023, 115.7]}
          />
          <mesh
            name="drawingDavid" ref={handleMeshRef}
            geometry={nodes.david.geometry}
            material={materials.m_artDrawingDavid}
            position={[148.119, 211.543, 375.008]}
            rotation={[Math.PI / 2, -0.013, -Math.PI]}
            scale={[50.416, 54.923, 71.539]}
          />
        </group>
        <group name="vrShelf">
          <mesh
            name="vrShelf" ref={handleMeshRef}
            geometry={nodes.vrShelfHitbox.geometry}
            material={materials.m_hitbox1}
            position={[-383.315, 84.175, 325.738]}
            scale={[7.79, 321.456, 100.227]}
          />
          <mesh
            name="vrShelf" ref={handleMeshRef}
            geometry={nodes.vrShelf_1.geometry}
            material={materials.m_woodShelfBaked}
          />
          <mesh
            name="spaces" ref={handleMeshRef}
            geometry={nodes.descSpaces.geometry}
            material={materials.m_descSpacesBaked}
            position={[-308.872, 288.354, 269.525]}
            rotation={[1.93, 0.338, -2.418]}
            scale={[65.029, 23.66, 21.305]}
          />
          <mesh
            name="descSpacesButton" ref={handleMeshRef}
            geometry={nodes.descSpacesButton.geometry}
            material={materials.m_descSpacesButtonBaked}
            position={[-273.87, 239.114, 265.207]}
            rotation={[0.673, -0.664, 0.451]}
            scale={1.566}
          />
          {showHtmlUI && (
            <Html
              scale={[2, -2, -2]}
              rotation={[0, -0.78, -Math.PI]}
              position={[-214, 302, 283]}
              transform
              occlude
              zIndexRange={[1, 0]}
            >
              {/* 1. Full black wipe */}
              {!blackWipeDone && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "300vh" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    width: "1000vw",
                    backgroundColor: "black",
                    top: 0,
                    left: -1000,
                    zIndex: 30,
                  }}
                  onAnimationComplete={() => setBlackWipeDone(true)}
                />
              )}
          
              {/* 2. Masked content with expanding circles as mask */}
              {blackWipeDone && (
                <>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 3000 2000"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 20,
                      pointerEvents: "none",
                    }}
                  >
                    <defs>
                      <mask id="vrMask">
                        {/* Start fully black */}
                        <rect width="500vw" height="100%" fill="black" />
                        {/* Animated holes (revealing content) */}
                        <motion.circle
                          cx="30%"
                          cy="50%"
                          r="0"
                          fill="white"
                          animate={{ r: 2000 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.circle
                          cx="70%"
                          cy="50%"
                          r="0"
                          fill="white"
                          animate={{ r: 2000 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          onAnimationComplete={() => setHtmlReady(true)}
                        />
                      </mask>
                    </defs>
                  </svg>
          
                  {/* Final UI masked by the animated holes */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      mask: "url(#vrMask)",
                      WebkitMask: "url(#vrMask)",
                      zIndex: 10,
                    }}
                  >
                    <Spaces3D onScreenClick={handleScreenClick} currState={currState} />
                  </motion.div>
                </>
              )}
            </Html>
          )}
          <mesh
            name="spaces" ref={handleMeshRef}
            geometry={nodes.escher.geometry}
            material={materials.m_escherBaked}
            position={[-295.653, 322.289, 291.297]}
            rotation={[0, 1.57, Math.PI]}
            scale={[1.775, 1.775, -1.775]}
          />
          <mesh
            name="anivision" ref={handleMeshRef}
            geometry={nodes.descAnivision.geometry}
            material={materials.m_descAnivisionBaked}
            position={[-309.018, 184.957, 269.937]}
            rotation={[1.93, 0.338, -2.418]}
            scale={[65.029, 23.66, 21.305]}
          />
          <mesh
            name="descAnivisionButton"
            castShadow
            receiveShadow
            geometry={nodes.descAnivisionButton.geometry}
            material={materials.m_descAnivisionButtonBaked}
            position={[-273.87, 135.326, 265.207]}
            rotation={[0.673, -0.664, 0.451]}
            scale={1.566}
          />
          <group name="anivision" position={[37.445, 0, 43.159]} rotation={[0, -0.126, 0]}>
            <group
              name="snake"
              position={[-216, 164, 348]}
              rotation={[-Math.PI, 0.552, -Math.PI]}
              scale={1.241}>
              <group
                name="anivision" ref={handleMeshRef}
                position={[-3.494, -131.207, 336.739]}
                rotation={[-Math.PI, -0.552, -Math.PI]}
                scale={0.806}>
                <skinnedMesh
                  name="anivision" ref={handleMeshRef}
                  geometry={nodes.snakeMeshShape.geometry}
                  material={materials.m_snakeSkinBaked}
                  skeleton={nodes.snakeMeshShape.skeleton}
                />
                <skinnedMesh
                  name="anivision" ref={handleMeshRef}
                  geometry={nodes.snakeMeshShape_1.geometry}
                  material={materials.m_snake_eyesBaked}
                  skeleton={nodes.snakeMeshShape_1.skeleton}
                />
              </group>
              <primitive object={nodes.joint69} />
            </group>
            <group name="tarsier" position={[-35, 9.257, -40]} rotation={[0, 0.104, 0]}>
              <group
                name="anivision" ref={handleMeshRef}
                position={[-323.004, 174.374, 298.423]}
                rotation={[1.452, 1.013, -1.432]}
                scale={25.346}>
                <skinnedMesh
                  name="anivision" ref={handleMeshRef}
                  geometry={nodes.tarsierBody.geometry}
                  material={materials.m_TarsierBodyBaked}
                  skeleton={nodes.tarsierBody.skeleton}
                />
                <mesh
                  name="anivision" ref={handleMeshRef}
                  geometry={nodes.tarsierEyes.geometry}
                  material={materials.m_TarsierEyes}
                  position={[9.65, 1.38, 15.865]}
                  rotation={[2.589, -1.426, -Math.PI]}
                  scale={0.039}
                />
              </group>
              <primitive object={nodes.hips} />
            </group>
            <group name="anivisionModel" position={[-38, -1.1, -46]} rotation={[0, 0.126, 0]} scale={[1.01, 1.01, 1.01]}>
              <mesh
                name="anivision" ref={handleMeshRef}
                geometry={nodes.anivisionModelShape.geometry}
                material={materials.m_dioramaBase}
              />
              <mesh
                name="anivision" ref={handleMeshRef}
                geometry={nodes.anivisionModelShape_1.geometry}
                material={materials.m_mushroomBaked}
              />
            </group>
          </group>
          <group name="headset">
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape.geometry}
              material={materials.m_blackRubberBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_1.geometry}
              material={materials.m_headsetStrapBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_2.geometry}
              material={materials.m_tableHeadsetWhiteBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_3.geometry}
              material={materials.m_headsetStandBaked}
            />
          </group>
        </group>
        <group name="architecture">
          <group name="room">
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape.geometry}
              material={materials.m_rugBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_1.geometry}
              material={materials.m_wallBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_2.geometry}
              material={materials.m_woodShelfBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_3.geometry}
              material={materials.m_floorBaked}
            />
          </group>
          <mesh
            name="home" ref={handleMeshRef}
            geometry={nodes.wallLeft.geometry}
            material={materials.m_wallBaked}
            position={[16.411, 0, -794.885]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1, 1, -1]}
          />
          <mesh
            name="home" ref={handleMeshRef}
            geometry={nodes.ceilingBlock.geometry}
            material={materials.m_wallBaked}
          />
        </group>
      </group>
      </group>
    </a.group>
    </>
  )
}

export default Room;
