import { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three';
import { a, useSpring } from '@react-spring/three';  // Import 'a' for animated mesh

import roomScene from '../assets/3d/desk8.glb'
import CaseStudies from './CaseStudies';
import MiniPlayer from './MiniPlayer';
import AnimPlayer from './AnimPlayer';
import ModelsScreen from './ModelsScreen';
import OtherProjects from './OtherProjects';
import Resume from './Resume';

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
    if (animations.length > 0 && actions) {
      animations.forEach((clip) => {
        if (clip.name !== 'tail1' && actions[clip.name]) {
          actions[clip.name].play();
        }
      });
    }
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
          } else if ( INTERSECTED.name == 'anivision' ) {
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
          } else if ( INTERSECTED.name == 'rightArrow' ) {
            setFocusState('miniPlayer');
            setCurrState('nextImage');
            handleButtonAnimation('right');
          } else if ( INTERSECTED.name == 'leftArrow' ) {
            setFocusState('miniPlayer');
            setCurrState('prevImage');
            handleButtonAnimation('left');

          } else if ( INTERSECTED.name == 'modelsShelf' ) {
            setFocusState('modelsShelf');
          } else if ( INTERSECTED.name == 'modelsScreen' ) {
            setFocusState('modelsScreen');
          } else if ( INTERSECTED.name == 'animPlayer' ) {
            setFocusState('animPlayer');
          } else if ( INTERSECTED.name == 'keyBounce' ) {
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
          } else if ( INTERSECTED.name == 'plant' ) {
            setFocusState('plant');

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
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
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
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown])

  return (
    <a.group ref={roomRef}{...props}>
      <group rotation={[0, -0.02, 0]} scale={0.1}>
        <group name="table">
          <group name="screen1">
            <mesh
              ref={handleMeshRef}
              name="screen1"
              castShadow
              receiveShadow
              geometry={nodes.screen1Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              ref={handleMeshRef}
              name="screen1"
              castShadow
              receiveShadow
              geometry={nodes.screen1Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
            <Html scale={2} rotation-y={-Math.PI} position={[-91.4, 126.1, 327]} transform occlude>
              <CaseStudies onScreenClick={handleScreenClick} currState={currState}/>
            </Html>
          </group>
          <group name="screen2">
            <mesh
              ref={handleMeshRef}
              name="screen2"
              castShadow
              receiveShadow
              geometry={nodes.screen2Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              ref={handleMeshRef}
              name="screen2"
              castShadow
              receiveShadow
              geometry={nodes.screen2Shape_1.geometry}
              material={materials.m_whiteMonitor}
            />
            <Html scale={[1.5, -1.5, -1.5]} rotation={[0, 0.597, -Math.PI]} position={[5.7, 133.534, 306.7]} transform occlude>
              <OtherProjects onScreenClick={handleScreenClick} currState={currState}/>
            </Html>
          </group>
          <mesh
            ref={handleMeshRef}
            name="resume"
            castShadow
            receiveShadow
            geometry={nodes.resume1Top.geometry}
            material={materials.m_resumeBaked}
            position={[-159.133, 77.247, 269.451]}
            scale={[44.769, 7.701, 44.769]}
          />
          <mesh
            name="resume1Paper"
            castShadow
            receiveShadow
            geometry={nodes.resume1Paper.geometry}
            material={materials.m_whitePaperBaked}
          />
          <Html scale={1} rotation-x={Math.PI/2} rotation-y={Math.PI} position={[-160, 80, 270]} transform occlude>
              <Resume onScreenClick={handleScreenClick} currState={currState} setCurrState={setCurrState}/>
            </Html>
          <group name="keyboard">
            <mesh
              name="keyboardShape"
              castShadow
              receiveShadow
              geometry={nodes.keyboardShape.geometry}
              material={materials.m_keyboardBottomBaked}
            />
            <a.mesh
              ref={handleMeshRef}
              name="keycap1"
              onPointerDown={handlePointerDown}
              position={keycap1}
              geometry={nodes.keyboardShape_1.geometry}
              material={materials.m_keycapYellowBaked}
            />
            <a.mesh
              ref={handleMeshRef}
              name="keycap2"
              onPointerDown={handlePointerDown}
              position={keycap2}
              geometry={nodes.keyboardShape_2.geometry}
              material={materials.m_keycapGreenBaked}
            />
            <mesh
              name="keyboardShape_3"
              castShadow
              receiveShadow
              geometry={nodes.keyboardShape_3.geometry}
              material={materials.m_keycapWhiteBaked}
            />
            <a.mesh
              ref={handleMeshRef}
              name="keycap1"
              onPointerDown={handlePointerDown}
              position={keycap1}
              castShadow
              receiveShadow
              geometry={nodes.keyboardShape_4.geometry}
              material={materials.m_keycapBlueBaked}
            />
            <mesh
              name="keyboardShape_5"
              castShadow
              receiveShadow
              geometry={nodes.keyboardShape_5.geometry}
              material={materials.m_keycapPurpleBaked}
            />
            <mesh
              name="keyboardShape_6"
              castShadow
              receiveShadow
              geometry={nodes.keyboardShape_6.geometry}
              material={materials.m_keycapPinkBaked}
            />
          </group>
          <mesh
            ref={handleMeshRef}
            name="table"
            castShadow
            receiveShadow
            geometry={nodes.table_1.geometry}
            material={materials.m_whiteSpecularBaked}
            position={[0, 1.114, 0]}
          />
        </group>
        <group name="art">
          <group name="miniPlayer">
            <mesh
              ref={handleMeshRef}
              name="miniPlayer"
              castShadow
              receiveShadow
              geometry={nodes.miniPlayerShape.geometry}
              material={materials.m_miniPlayerFaceBaked}
            />
            <mesh
              ref={handleMeshRef}
              name="miniPlayer"
              castShadow
              receiveShadow
              geometry={nodes.miniPlayerShape_1.geometry}
              material={materials.m_blackRubberBaked}
            />
            <mesh
              ref={handleMeshRef}
              name="miniPlayer"
              castShadow
              receiveShadow
              geometry={nodes.miniPlayerShape_2.geometry}
              material={materials.m_miniPlayerWoodBaked}
            />
            <mesh
              ref={handleMeshRef}
              name="miniPlayer"
              castShadow
              receiveShadow
              geometry={nodes.miniPlayerShape_3.geometry}
              material={materials.m_blackBaked}
            />
            <Html scale={0.4} rotation-y={-Math.PI} position={[94.47, 232.21, 354]} transform occlude>
              <MiniPlayer onScreenClick={handleScreenClick} currState={currState} setCurrState={setCurrState}/>
            </Html>
          </group>

          <a.mesh
            ref={handleMeshRef}
            name="leftArrow"
            onPointerDown={handlePointerDown}
            position={positionLeft}
            castShadow
            receiveShadow
            geometry={nodes.leftArrow.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="rightArrow"
            onPointerDown={handlePointerDown}
            position={positionRight}
            castShadow
            receiveShadow
            geometry={nodes.rightArrow.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="drawingHand"
            castShadow
            receiveShadow
            geometry={nodes.drawingHand.geometry}
            material={materials.m_artDrawingHandBaked}
            position={[258.045, 93.144, 373.493]}
            rotation={[Math.PI / 2, 0.021, Math.PI]}
            scale={[81.023, 81.023, 115.7]}
          />
          <mesh
            ref={handleMeshRef}
            name="drawingFish"
            castShadow
            receiveShadow
            geometry={nodes.drawingFish.geometry}
            material={materials.m_artDrawingFishBaked}
            position={[184.242, 133.823, 373.165]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[50.416, 54.923, 71.539]}
          />
          <mesh
            ref={handleMeshRef}
            name="drawingDavid"
            castShadow
            receiveShadow
            geometry={nodes.drawingDavid.geometry}
            material={materials.m_artDrawingDavidBaked}
            position={[148.119, 211.543, 375.008]}
            rotation={[Math.PI / 2, -0.013, -Math.PI]}
            scale={[50.416, 54.923, 71.539]}
          />
          <mesh
            ref={handleMeshRef}
            name="businessCard"
            castShadow
            receiveShadow
            geometry={nodes.businessCard.geometry}
            material={materials.m_artBusinessCardBaked}
            position={[133.634, 244.941, 374.941]}
            rotation={[Math.PI / 2, -0.031, -Math.PI]}
            scale={[25.739, 84.174, 14.145]}
          />
          <group name="brushes">
            <mesh
              name="brushesShape"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape.geometry}
              material={materials.m_paintbrushHandleBrownBaked}
            />
            <mesh
              name="brushesShape_1"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_1.geometry}
              material={materials.m_paintbrushMetalGoldBaked}
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
              material={materials.m_blackBaked}
            />
            <mesh
              name="brushesShape_4"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_4.geometry}
              material={materials.m_paintbrushHairBrownBaked}
            />
            <mesh
              name="brushesShape_5"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_5.geometry}
              material={materials.m_paintbrushHandleBaked}
            />
            <mesh
              name="brushesShape_6"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_6.geometry}
              material={materials.m_paintbrushMetalSilverBaked}
            />
          </group>
          <mesh
            name="container"
            castShadow
            receiveShadow
            geometry={nodes.container.geometry}
            material={materials.m_ceramicCupBaked}
            position={[141.306, 224.04, 367.223]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[8.235, 7.722, 8.235]}
          />
          <group name="inkwell">
            <mesh
              name="inkwellShape"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape.geometry}
              material={materials.m_glassBaked}
            />
            <mesh
              name="inkwellShape_1"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_1.geometry}
              material={materials.m_inkWaxBaked}
            />
            <mesh
              name="inkwellShape_2"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_2.geometry}
              material={materials.m_inkBaked}
            />
            <mesh
              name="inkwellShape_3"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_3.geometry}
              material={materials.m_inkRibbonBaked}
            />
          </group>
          <group name="paintingDoor">
            <mesh
              name="paintingDoorShape"
              castShadow
              receiveShadow
              geometry={nodes.paintingDoorShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingDoorShape_1"
              castShadow
              receiveShadow
              geometry={nodes.paintingDoorShape_1.geometry}
              material={materials.m_artPaintingDoorBaked}
            />
            <mesh
              name="paintingDoorShape_2"
              castShadow
              receiveShadow
              geometry={nodes.paintingDoorShape_2.geometry}
              material={materials.m_artPaintingBirds}
            />
          </group>
          <group name="paintingLandscape">
            <mesh
              name="paintingLandscapeShape"
              castShadow
              receiveShadow
              geometry={nodes.paintingLandscapeShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingLandscapeShape_1"
              castShadow
              receiveShadow
              geometry={nodes.paintingLandscapeShape_1.geometry}
              material={materials.m_artPaintingLandscapeBaked}
            />
            <mesh
              name="paintingLandscapeShape_2"
              castShadow
              receiveShadow
              geometry={nodes.paintingLandscapeShape_2.geometry}
              material={nodes.paintingLandscapeShape_2.material}
            />
          </group>
          <group name="paintingFruit">
            <mesh
              name="paintingFruitShape"
              castShadow
              receiveShadow
              geometry={nodes.paintingFruitShape.geometry}
              material={nodes.paintingFruitShape.material}
            />
            <mesh
              name="paintingFruitShape_1"
              castShadow
              receiveShadow
              geometry={nodes.paintingFruitShape_1.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingFruitShape_2"
              castShadow
              receiveShadow
              geometry={nodes.paintingFruitShape_2.geometry}
              material={materials.m_artPaintingFruitBaked}
            />
          </group>
          <group name="paintingBirds">
            <mesh
              name="paintingBirdsShape"
              castShadow
              receiveShadow
              geometry={nodes.paintingBirdsShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingBirdsShape_1"
              castShadow
              receiveShadow
              geometry={nodes.paintingBirdsShape_1.geometry}
              material={materials.m_artPaintingBirdsBaked}
            />
          </group>
          <group name="sketchbook">
            <mesh
              ref={handleMeshRef}
              name="sketchbook"
              castShadow
              receiveShadow
              geometry={nodes.sketchbookShape.geometry}
              material={materials.m_whitePaperBaked}
            />
            <mesh
              ref={handleMeshRef}
              name="sketchbook"
              castShadow
              receiveShadow
              geometry={nodes.sketchbookShape_1.geometry}
              material={materials.m_artTidalBasinBaked}
            />
            <mesh
              ref={handleMeshRef}
              name="sketchbook"
              castShadow
              receiveShadow
              geometry={nodes.sketchbookShape_2.geometry}
              material={materials.m_blackBaked}
            />
          </group>
          <mesh
            name="pinGrouped"
            castShadow
            receiveShadow
            geometry={nodes.pinGrouped.geometry}
            material={materials.m_keycapYellow}
          />
          <mesh
            ref={handleMeshRef}
            name="corkboard"
            castShadow
            receiveShadow
            geometry={nodes.corkboard.geometry}
            material={materials.m_corkSurfaceBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="artWall"
            castShadow
            receiveShadow
            geometry={nodes.artShelfWood.geometry}
            material={materials.m_woodShelfBaked}
            position={[64.396, 212.258, 359.733]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.182, 0.039, 0.602]}
          />
          <mesh
            ref={handleMeshRef}
            name="corkboard"
            castShadow
            receiveShadow
            geometry={nodes.whiteFrame.geometry}
            material={materials.m_whiteFrameBaked}
            position={[207.921, 320.416, 376.773]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.196, 0.005, 14.284]}
          />
        </group>
        <group name="vrShelf">
          <mesh
            ref={handleMeshRef}
            name="spaces"
            castShadow
            receiveShadow
            geometry={nodes.escher.geometry}
            material={materials.m_escherBaked}
            position={[-301.734, 322.289, 301.257]}
            rotation={[0, 1.57, Math.PI]}
            scale={[1.775, 1.775, -1.775]}
          />
          <mesh
            name="descAnivision"
            castShadow
            receiveShadow
            geometry={nodes.descAnivision.geometry}
            material={materials.m_descAnivisionBaked}
            position={[-311.281, 182.914, 272.2]}
            rotation={[2.031, 0.418, -2.455]}
            scale={[65.029, 23.66, 21.305]}
          />
          <mesh
            name="descSpaces"
            castShadow
            receiveShadow
            geometry={nodes.descSpaces.geometry}
            material={materials.m_descSpacesBaked}
            position={[-310.484, 286.795, 271.136]}
            rotation={[2.031, 0.418, -2.455]}
            scale={[65.029, 23.66, 21.305]}
          />
          <mesh
            ref={handleMeshRef}
            name="vrShelf"
            castShadow
            receiveShadow
            geometry={nodes.vrShelfWood.geometry}
            material={materials.m_woodShelfBaked}
          />
          <group name="anivision">
            <group
              name="snake"
              position={[-222.788, 162.804, 353.509]}
              rotation={[-Math.PI, 0.552, -Math.PI]}
              scale={1.241}>
              <group
                name="snakeMesh"
                position={[-3.494, -131.207, 336.739]}
                rotation={[-Math.PI, -0.552, -Math.PI]}
                scale={0.806}>
                <skinnedMesh
                  name="snakeMeshShape"
                  geometry={nodes.snakeMeshShape.geometry}
                  material={materials.m_snake_eyesBaked}
                  skeleton={nodes.snakeMeshShape.skeleton}
                />
                <skinnedMesh
                  name="snakeMeshShape_1"
                  geometry={nodes.snakeMeshShape_1.geometry}
                  material={materials.m_snakeSkinBaked}
                  skeleton={nodes.snakeMeshShape_1.skeleton}
                />
              </group>
              <primitive object={nodes.joint69} />
            </group>
            <group name="tarsier" position={[-32.071, 9.257, -32.657]} rotation={[0, 0.104, 0]}>
              <group
                name="tarsierMesh"
                position={[-323.004, 174.374, 298.423]}
                rotation={[1.452, 1.013, -1.432]}
                scale={25.346}>
                <skinnedMesh
                  name="tarsierBody"
                  geometry={nodes.tarsierBody.geometry}
                  material={materials.m_TarsierBodyBaked}
                  skeleton={nodes.tarsierBody.skeleton}
                />
                <mesh
                  name="tarsierEyes"
                  castShadow
                  receiveShadow
                  geometry={nodes.tarsierEyes.geometry}
                  material={materials.m_TarsierEyesBaked}
                  position={[11.212, 0.7, 14.748]}
                  rotation={[2.589, -1.541, Math.PI]}
                  scale={0.039}
                />
              </group>
              <primitive object={nodes.hips} />
            </group>
            <group name="anivisionDiorama">
              <mesh
                name="mushroom"
                castShadow
                receiveShadow
                geometry={nodes.mushroom.geometry}
                material={materials.m_mushroomBaked}
              />
              <mesh
                name="tarsierBranch"
                castShadow
                receiveShadow
                geometry={nodes.tarsierBranch.geometry}
                material={materials.m_jungleTexturesBaked2}
                position={[-303.789, 21.121, 245.94]}
                rotation={[-2.935, -0.541, 2.638]}
                scale={53.392}
              />
              <mesh
                name="snakeBranch"
                castShadow
                receiveShadow
                geometry={nodes.snakeBranch.geometry}
                material={materials.m_jungleTexturesBaked1}
                position={[-315.258, 180.541, 346.896]}
                rotation={[2.529, 0.13, -3.116]}
                scale={0.089}
              />
              <mesh
                ref={handleMeshRef}
                name="anivision"
                castShadow
                receiveShadow
                geometry={nodes.baseCombined.geometry}
                material={materials.m_jungleTexturesBaked}
              />
            </group>
          </group>
          <group name="headset">
            <mesh
              name="headsetShape"
              castShadow
              receiveShadow
              geometry={nodes.headsetShape.geometry}
              material={materials.m_headsetStrapBaked}
            />
            <mesh
              name="headsetShape_1"
              castShadow
              receiveShadow
              geometry={nodes.headsetShape_1.geometry}
              material={materials.m_whiteSpecularBaked}
            />
            <mesh
              name="headsetShape_2"
              castShadow
              receiveShadow
              geometry={nodes.headsetShape_2.geometry}
              material={materials.m_blackRubberBaked}
            />
            <mesh
              name="headsetShape_3"
              castShadow
              receiveShadow
              geometry={nodes.headsetShape_3.geometry}
              material={materials.m_blackBaked}
            />
          </group>
        </group>
        <group name="modelsShelf">
          <mesh
            ref={handleMeshRef}
            name="modelsScreen"
            castShadow
            receiveShadow
            geometry={nodes.modelsScreen.geometry}
            material={materials.m_digitalFrameBaked}
            position={[-386.894, 312.47, 26.769]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.108, 0.004, 4.959]}
          />
          <Html scale={1} rotation-y={Math.PI/2} position={[-387, 313.6, 27]} transform occlude>
            <ModelsScreen onScreenClick={handleScreenClick} currState={currState}/>

          </Html>
          <a.mesh
            ref={handleMeshRef}
            name="keyBounce"
            onPointerDown={handlePointerDown}
            position={positionBallBounce}
            castShadow
            receiveShadow
            geometry={nodes.keyBounce.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="keyWalkCycle"
            onPointerDown={handlePointerDown}
            position={positionWalkCycle}
            castShadow
            receiveShadow
            geometry={nodes.keyWalkCycle.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="keyJump"
            onPointerDown={handlePointerDown}
            position={positionJump}
            castShadow
            receiveShadow
            geometry={nodes.keyJump.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="keyTwoBalls"
            onPointerDown={handlePointerDown}
            position={positionTwoBalls}
            castShadow
            receiveShadow
            geometry={nodes.keyTwoBalls.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="keyWalkForward"
            onPointerDown={handlePointerDown}
            position={positionWalkForward}
            castShadow
            receiveShadow
            geometry={nodes.keyWalkForward.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <a.mesh
            ref={handleMeshRef}
            name="keyRun"
            onPointerDown={handlePointerDown}
            position={positionRun}
            castShadow
            receiveShadow
            geometry={nodes.keyRun.geometry}
            material={materials.m_controlButtonsBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="animPlayer"
            castShadow
            receiveShadow
            geometry={nodes.animPlayer.geometry}
            material={materials.m_animPlayerBaked}
          />

          <Html scale={0.4} rotation-y={Math.PI/2} position={[-365, 207, 80]} transform occlude>
              <AnimPlayer onScreenClick={handleScreenClick} currState={currState} />
            </Html>
          <mesh
            ref={handleMeshRef}
            name="modelsShelf"
            castShadow
            receiveShadow
            geometry={nodes.modelsShelfWood.geometry}
            material={materials.m_woodShelfBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="plant"
            castShadow
            receiveShadow
            geometry={nodes.pot1.geometry}
            material={materials.m_plantPotBaked}
            position={[-505.862, -0.66, -205.952]}
            rotation={[0, 1.414, 0]}
          />
          <group name="plant">
            <mesh
              name="plantShape"
              castShadow
              receiveShadow
              geometry={nodes.plantShape.geometry}
              material={materials.m_plantStemBaked}
            />
            <mesh
              name="plantShape_1"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_1.geometry}
              material={materials.m_flowerCenterBaked}
            />
            <mesh
              name="plantShape_2"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_2.geometry}
              material={materials.m_lilyBaked}
            />
            <mesh
            ref={handleMeshRef}
              name="plant"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_3.geometry}
              material={materials.m_flowerLeafsBaked}
            />
            <mesh
              name="plantShape_4"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_4.geometry}
              material={materials.m_lilyWaterBaked2}
            />
            <mesh
              name="plantShape_5"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_5.geometry}
              material={materials.m_plantBroadLeafBaked}
            />
            <mesh
              name="plantShape_6"
              castShadow
              receiveShadow
              geometry={nodes.plantShape_6.geometry}
              material={materials.m_lilyBaked1}
            />
          </group>
          <group name="boat">
            <mesh
              name="boatShape"
              castShadow
              receiveShadow
              geometry={nodes.boatShape.geometry}
              material={materials.m_lanternBaked}
            />
            <mesh
              name="boatShape_1"
              castShadow
              receiveShadow
              geometry={nodes.boatShape_1.geometry}
              material={materials.m_lanternGlass}
            />
            <mesh
              ref={handleMeshRef}
              name="boat"
              castShadow
              receiveShadow
              geometry={nodes.boatShape_2.geometry}
              material={materials.m_boatBaked}
            />
            <mesh
              name="boatShape_3"
              castShadow
              receiveShadow
              geometry={nodes.boatShape_3.geometry}
              material={materials.m_lanternHandle}
            />
            <mesh
              name="boatShape_4"
              castShadow
              receiveShadow
              geometry={nodes.boatShape_4.geometry}
              material={materials.m_oarBaked}
            />
          </group>
          <group name="egg1" position={[-416.381, 97.913, -475.147]} rotation={[0, -1.005, 0]}>
            <mesh
              name="wingL1"
              castShadow
              receiveShadow
              geometry={nodes.wingL1.geometry}
              material={materials.m_butterflyBlue}
              position={[447.832, 171.841, 222.496]}
              rotation={[2.597, -0.054, 2.796]}
              scale={1.554}
            />
            <mesh
              name="firefly3"
              castShadow
              receiveShadow
              geometry={nodes.firefly3.geometry}
              material={materials.m_dioFireflies}
              position={[442.983, 174.429, 225.936]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="firefly4"
              castShadow
              receiveShadow
              geometry={nodes.firefly4.geometry}
              material={materials.m_dioFireflies}
              position={[454.027, 165.973, 228.63]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="grassMed3"
              castShadow
              receiveShadow
              geometry={nodes.grassMed3.geometry}
              material={nodes.grassMed3.material}
              position={[445.711, 153.858, 223.551]}
              rotation={[3.119, 0.381, 3.038]}
              scale={[0.185, 1.369, 0.185]}
            />
            <mesh
              name="grassMed16"
              castShadow
              receiveShadow
              geometry={nodes.grassMed16.geometry}
              material={nodes.grassMed16.material}
              position={[456.545, 158.177, 223.078]}
              rotation={[0.09, 0.86, 0.173]}
              scale={[0.09, 0.746, 0.09]}
            />
            <mesh
              name="YwingL_"
              castShadow
              receiveShadow
              geometry={nodes.YwingL_.geometry}
              material={materials.m_butterflyYellow}
              position={[448.316, 169.687, 231.465]}
              rotation={[2.744, 1.277, 2.82]}
              scale={0.293}
            />
            <mesh
              name="leaf"
              castShadow
              receiveShadow
              geometry={nodes.leaf.geometry}
              material={materials.m_dioLeafBig}
              position={[449.972, 176.86, 226.692]}
              rotation={[2.673, 0.881, -2.709]}
              scale={8.526}
            />
            <mesh
              name="grassMed15"
              castShadow
              receiveShadow
              geometry={nodes.grassMed15.geometry}
              material={nodes.grassMed15.material}
              position={[456.359, 157.953, 222.664]}
              rotation={[-2.903, 0.465, 3.06]}
              scale={[0.099, 0.728, 0.099]}
            />
            <mesh
              name="grassMed5"
              castShadow
              receiveShadow
              geometry={nodes.grassMed5.geometry}
              material={nodes.grassMed5.material}
              position={[446.458, 157.552, 222.358]}
              rotation={[-2.753, 1.195, 2.767]}
              scale={[0.119, 0.876, 0.119]}
            />
            <mesh
              name="stem2"
              castShadow
              receiveShadow
              geometry={nodes.stem2.geometry}
              material={materials.m_dioStem}
              position={[448.624, 165.607, 229.505]}
              rotation={[0, 0.103, 0.028]}
              scale={[0.082, 0.188, 0.082]}
            />
            <mesh
              name="twist2"
              castShadow
              receiveShadow
              geometry={nodes.twist2.geometry}
              material={materials.m_dioTwig}
              position={[449.455, 161.399, 226.959]}
              rotation={[0, 0.823, 0]}
              scale={0.146}
            />
            <mesh
              name="grassShort1"
              castShadow
              receiveShadow
              geometry={nodes.grassShort1.geometry}
              material={materials.m_dioGrass1}
              position={[450.285, 163.026, 220.847]}
              rotation={[0, 0.203, 0]}
              scale={[0.073, 0.181, 0.073]}
            />
            <mesh
              name="pCylinder4"
              castShadow
              receiveShadow
              geometry={nodes.pCylinder4.geometry}
              material={materials.m_dioStem}
              position={[448.012, 163.114, 219.701]}
              rotation={[2.907, -1.282, 3.058]}
              scale={[0.111, 0.324, 0.111]}
            />
            <mesh
              name="stem"
              castShadow
              receiveShadow
              geometry={nodes.stem.geometry}
              material={materials.m_dioStem}
              position={[450.533, 163.89, 218.017]}
              rotation={[-2.22, 0.072, 2.961]}
              scale={[0.041, 0.305, 0.041]}
            />
            <mesh
              name="grassMed7"
              castShadow
              receiveShadow
              geometry={nodes.grassMed7.geometry}
              material={materials.m_dioGrass1}
              position={[451.173, 160.444, 226.165]}
              rotation={[-0.095, 0.774, 0.061]}
              scale={[0.067, 0.341, 0.067]}
            />
            <mesh
              name="smallLeaf2"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf2.geometry}
              material={materials.m_dioLeafSmall}
              position={[453.796, 167.494, 225.616]}
              rotation={[2.725, 0.426, -3.073]}
              scale={[0.237, 0.237, 0.197]}
            />
            <mesh
              name="pCylinder6"
              castShadow
              receiveShadow
              geometry={nodes.pCylinder6.geometry}
              material={materials.m_dioStem}
              position={[447.751, 166.218, 220.707]}
              rotation={[0.43, 1.185, -0.342]}
              scale={[0.038, 1.324, 0.038]}
            />
            <mesh
              name="tall1"
              castShadow
              receiveShadow
              geometry={nodes.tall1.geometry}
              material={materials.m_dioTwigSmall}
              position={[444.64, 158.998, 225.748]}
              rotation={[-Math.PI, 0.841, -Math.PI]}
              scale={0.33}
            />
            <mesh
              name="botBranch"
              castShadow
              receiveShadow
              geometry={nodes.botBranch.geometry}
              material={materials.m_dioStem}
              position={[448.264, 162.907, 220.349]}
              rotation={[-2.835, 0.818, -2.778]}
              scale={[0.05, 0.187, 0.05]}
            />
            <mesh
              name="grassMed6"
              castShadow
              receiveShadow
              geometry={nodes.grassMed6.geometry}
              material={materials.m_dioGrass1}
              position={[451.493, 159.28, 225.912]}
              rotation={[-2.753, 1.195, 2.767]}
              scale={[0.074, 0.548, 0.074]}
            />
            <mesh
              name="wingL2"
              castShadow
              receiveShadow
              geometry={nodes.wingL2.geometry}
              material={materials.m_butterflyBlue}
              position={[445.32, 172.599, 222.132]}
              rotation={[-0.544, 0.054, -0.936]}
              scale={[1.804, 1.554, -1.554]}
            />
            <mesh
              name="smallLeaf9"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf9.geometry}
              material={materials.m_dioLeafSmall}
              position={[448.452, 164.459, 220.578]}
              rotation={[1.156, 0.595, -1.516]}
              scale={[0.157, 0.157, 0.131]}
            />
            <mesh
              name="grassShort4"
              castShadow
              receiveShadow
              geometry={nodes.grassShort4.geometry}
              material={materials.m_dioGrass1}
              position={[450.591, 162.652, 221.984]}
              rotation={[-0.189, -0.757, -0.038]}
              scale={[0.024, 0.059, 0.024]}
            />
            <mesh
              name="stem5"
              castShadow
              receiveShadow
              geometry={nodes.stem5.geometry}
              material={materials.m_dioStem}
              position={[449.073, 166.357, 227.156]}
              rotation={[-0.137, -0.991, -0.118]}
              scale={[0.227, 1.639, 0.194]}
            />
            <mesh
              name="lilyPad3"
              castShadow
              receiveShadow
              geometry={nodes.lilyPad3.geometry}
              material={nodes.lilyPad3.material}
              position={[451.085, 162.555, 224.097]}
              rotation={[-Math.PI, 0.153, -Math.PI]}
              scale={[0.098, 0.051, 0.112]}
            />
            <mesh
              name="smallLeaf"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf.geometry}
              material={materials.m_dioLeafSmall}
              position={[447.94, 164.652, 219.284]}
              rotation={[2.92, -0.114, -3.12]}
              scale={[0.309, 0.309, 0.258]}
            />
            <mesh
              name="firefly5"
              castShadow
              receiveShadow
              geometry={nodes.firefly5.geometry}
              material={materials.m_dioFireflies}
              position={[448.776, 164.036, 228.457]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="botBranch1"
              castShadow
              receiveShadow
              geometry={nodes.botBranch1.geometry}
              material={materials.m_dioStem}
              position={[448.684, 166.877, 224.167]}
              rotation={[-3.135, 0.687, -2.294]}
              scale={[0.05, 0.27, 0.05]}
            />
            <mesh
              name="twist1"
              castShadow
              receiveShadow
              geometry={nodes.twist1.geometry}
              material={materials.m_dioTwig}
              position={[452.879, 159.84, 228.965]}
              rotation={[-3.027, -0.901, -3.068]}
              scale={[0.193, 0.299, 0.193]}
            />
            <mesh
              name="smallLeaf7"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf7.geometry}
              material={materials.m_dioLeafSmall}
              position={[447.266, 165.852, 220.348]}
              rotation={[2.305, -0.793, 2.66]}
              scale={[0.255, 0.255, 0.213]}
            />
            <mesh
              name="grassMed12"
              castShadow
              receiveShadow
              geometry={nodes.grassMed12.geometry}
              material={nodes.grassMed12.material}
              position={[448.619, 160.35, 224.167]}
              rotation={[-0.029, 1.011, 0.081]}
              scale={[0.069, 0.366, 0.069]}
            />
            <mesh
              name="firefly7"
              castShadow
              receiveShadow
              geometry={nodes.firefly7.geometry}
              material={materials.m_dioFireflies}
              position={[443.392, 165.167, 221.152]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="grassTall3"
              castShadow
              receiveShadow
              geometry={nodes.grassTall3.geometry}
              material={nodes.grassTall3.material}
              position={[453.168, 164.647, 229.541]}
              rotation={[-Math.PI, -0.039, -Math.PI]}
              scale={[0.085, 0.636, 0.085]}
            />
            <mesh
              name="pasted__grassShort14"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort14.geometry}
              material={materials.m_dioGrass}
              position={[451.17, 163.108, 225.157]}
              rotation={[0, -1.168, 0]}
              scale={[0.112, 0.279, 0.112]}
            />
            <mesh
              name="smallLeaf4"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf4.geometry}
              material={materials.m_dioLeafSmall}
              position={[450.752, 163.4, 216.923]}
              rotation={[2.938, 0.199, -3.137]}
              scale={[0.203, 0.203, 0.169]}
            />
            <mesh
              name="wingL"
              castShadow
              receiveShadow
              geometry={nodes.wingL.geometry}
              material={materials.m_butterflyBlue}
              position={[447.832, 171.841, 222.496]}
              rotation={[2.597, -0.054, 2.796]}
              scale={1.554}
            />
            <mesh
              name="grassMed2"
              castShadow
              receiveShadow
              geometry={nodes.grassMed2.geometry}
              material={nodes.grassMed2.material}
              position={[447.742, 168.693, 227.642]}
              rotation={[3.129, 0.16, 3.115]}
              scale={[0.349, 0.912, 0.349]}
            />
            <mesh
              name="tall"
              castShadow
              receiveShadow
              geometry={nodes.tall.geometry}
              material={materials.m_dioTwig}
              position={[445.489, 158.103, 224.426]}
              rotation={[-3.028, 0.837, 3.057]}
              scale={0.33}
            />
            <mesh
              name="pasted__grassShort20"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort20.geometry}
              material={materials.m_dioGrass}
              position={[451.326, 163.73, 225.114]}
              rotation={[0, 1.34, 0]}
              scale={[0.164, 0.408, 0.164]}
            />
            <mesh
              name="grassMed4"
              castShadow
              receiveShadow
              geometry={nodes.grassMed4.geometry}
              material={nodes.grassMed4.material}
              position={[444.772, 156.206, 223.306]}
              rotation={[2.97, -0.41, -3.072]}
              scale={[0.143, 1.056, 0.143]}
            />
            <mesh
              name="leaf2"
              castShadow
              receiveShadow
              geometry={nodes.leaf2.geometry}
              material={materials.m_dioLeafBig}
              position={[448.907, 169.144, 229.296]}
              rotation={[2.869, 0.721, -2.665]}
              scale={[5.262, 6.912, 5.256]}
            />
            <mesh
              name="rock"
              castShadow
              receiveShadow
              geometry={nodes.rock.geometry}
              material={materials.m_dioRock}
              position={[451.138, 162.943, 228.705]}
              rotation={[-Math.PI, -1.038, -Math.PI]}
              scale={[0.095, 0.066, 0.095]}
            />
            <mesh
              name="firefly2"
              castShadow
              receiveShadow
              geometry={nodes.firefly2.geometry}
              material={materials.m_dioFireflies}
              position={[453.159, 173.019, 230.724]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="grassMed"
              castShadow
              receiveShadow
              geometry={nodes.grassMed.geometry}
              material={nodes.grassMed.material}
              position={[451.666, 153.11, 229.303]}
              rotation={[-Math.PI, 0.342, -Math.PI]}
              scale={[0.261, 1.551, 0.261]}
            />
            <mesh
              name="lilyPad1"
              castShadow
              receiveShadow
              geometry={nodes.lilyPad1.geometry}
              material={nodes.lilyPad1.material}
              position={[450.788, 162.568, 224.446]}
              rotation={[2.963, 1.14, -2.877]}
              scale={0.146}
            />
            <mesh
              name="firefly1"
              castShadow
              receiveShadow
              geometry={nodes.firefly1.geometry}
              material={materials.m_dioFireflies}
              position={[443.387, 182.599, 226.852]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="grassMed1"
              castShadow
              receiveShadow
              geometry={nodes.grassMed1.geometry}
              material={nodes.grassMed1.material}
              position={[453.364, 166.891, 229.134]}
              rotation={[-Math.PI, 0.569, 3.11]}
              scale={[0.246, 0.643, 0.246]}
            />
            <mesh
              name="waterOutZoom"
              castShadow
              receiveShadow
              geometry={nodes.waterOutZoom.geometry}
              material={materials.m_dioWater}
              position={[365.772, 147.722, 170.532]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={[0.981, 0.992, 0.981]}
            />
            <mesh
              name="body1"
              castShadow
              receiveShadow
              geometry={nodes.body1.geometry}
              material={materials.m_butterflyYellow}
              position={[448.178, 169.308, 230.999]}
              rotation={[1.37, -0.059, -1.859]}
              scale={[0.906, 5.699, 0.906]}
            />
            <mesh
              name="twist5"
              castShadow
              receiveShadow
              geometry={nodes.twist5.geometry}
              material={materials.m_dioTwigSmall}
              position={[453.03, 159.769, 228.811]}
              rotation={[-1.085, -1.397, -1.296]}
              scale={[0.075, 0.088, 0.075]}
            />
            <mesh
              name="pasted__grassShort21"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort21.geometry}
              material={materials.m_dioGrass}
              position={[452.481, 163.108, 228.036]}
              rotation={[0, -0.182, 0]}
              scale={[0.148, 0.369, 0.148]}
            />
            <mesh
              name="pasted__grassShort13"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort13.geometry}
              material={materials.m_dioGrass}
              position={[452.452, 163.73, 228.145]}
              rotation={[-Math.PI, 0.816, -Math.PI]}
              scale={[0.201, 0.632, 0.201]}
            />
            <mesh
              name="grassShort8"
              castShadow
              receiveShadow
              geometry={nodes.grassShort8.geometry}
              material={materials.m_dioStem}
              position={[449.665, 162.9, 223.485]}
              rotation={[0, 1.204, 0]}
              scale={[0.074, 0.185, 0.074]}
            />
            <mesh
              ref={handleMeshRef}
              name="egg"
              castShadow
              receiveShadow
              geometry={nodes.eggHolder.geometry}
              material={materials.m_eggHolderBaked}
              position={[450.494, 147.637, 224.698]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
            />
            <mesh
              name="smallLeaf10"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf10.geometry}
              material={materials.m_dioLeafSmall}
              position={[449.641, 168.643, 224.792]}
              rotation={[0.814, 1.174, -0.901]}
              scale={0.235}
            />
            <mesh
              name="pasted__grassShort8"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort8.geometry}
              material={materials.m_dioGrass}
              position={[449.665, 162.9, 223.485]}
              rotation={[0, 1.204, 0]}
              scale={[0.074, 0.185, 0.074]}
            />
            <mesh
              name="oar2"
              castShadow
              receiveShadow
              geometry={nodes.oar2.geometry}
              material={materials.m_oar}
              position={[450.747, 162.98, 222.324]}
              rotation={[-0.51, 0.221, 0.194]}
              scale={[1.783, 0.092, 0.092]}
            />
            <mesh
              name="smallLeaf12"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf12.geometry}
              material={materials.m_dioLeafSmall}
              position={[450.041, 164.054, 218.102]}
              rotation={[-0.119, 1.363, -0.419]}
              scale={[0.085, 0.037, -0.078]}
            />
            <mesh
              name="stem4"
              castShadow
              receiveShadow
              geometry={nodes.stem4.geometry}
              material={materials.m_dioStem}
              position={[454.004, 164.098, 226.16]}
              rotation={[Math.PI, 1.259, -3.122]}
              scale={[0.077, 0.204, 0.062]}
            />
            <mesh
              name="pCylinder5"
              castShadow
              receiveShadow
              geometry={nodes.pCylinder5.geometry}
              material={materials.m_dioStem}
              position={[448.01, 163.215, 219.685]}
              rotation={[2.907, -1.282, 3.058]}
              scale={[0.111, 0.303, 0.111]}
            />
            <mesh
              name="grassShort10"
              castShadow
              receiveShadow
              geometry={nodes.grassShort10.geometry}
              material={materials.m_dioGrass1}
              position={[450.663, 163.026, 226.026]}
              rotation={[2.97, -0.043, 2.91]}
              scale={[0.073, 0.181, 0.073]}
            />
            <mesh
              name="leaf3"
              castShadow
              receiveShadow
              geometry={nodes.leaf3.geometry}
              material={materials.m_dioLeafBig}
              position={[446.269, 171.406, 223.78]}
              rotation={[2.579, -0.5, -2.949]}
              scale={8.113}
            />
            <mesh
              name="grassTall1"
              castShadow
              receiveShadow
              geometry={nodes.grassTall1.geometry}
              material={nodes.grassTall1.material}
              position={[451.945, 164.647, 228.76]}
              rotation={[0, -0.76, 0]}
              scale={[0.075, 0.563, 0.075]}
            />
            <mesh
              name="stem1"
              castShadow
              receiveShadow
              geometry={nodes.stem1.geometry}
              material={materials.m_dioStem}
              position={[447.876, 165.638, 225.293]}
              rotation={[Math.PI, 1.259, -3.122]}
              scale={[0.149, 0.325, 0.149]}
            />
            <mesh
              name="eggOutside"
              castShadow
              receiveShadow
              geometry={nodes.eggOutside.geometry}
              material={materials.m_eggShellBaked}
              position={[450.494, 147.643, 224.698]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
            />
            <mesh
              name="grassMed13"
              castShadow
              receiveShadow
              geometry={nodes.grassMed13.geometry}
              material={nodes.grassMed13.material}
              position={[448.792, 161.134, 224.374]}
              rotation={[-2.887, 1.124, 2.752]}
              scale={[0.045, 0.239, 0.045]}
            />
            <mesh
              name="lilyPad2"
              castShadow
              receiveShadow
              geometry={nodes.lilyPad2.geometry}
              material={nodes.lilyPad2.material}
              position={[450.804, 162.55, 221.162]}
              rotation={[0, 1.439, 0]}
              scale={0.146}
            />
            <mesh
              name="grassTall2"
              castShadow
              receiveShadow
              geometry={nodes.grassTall2.geometry}
              material={nodes.grassTall2.material}
              position={[446.064, 164.647, 225.129]}
              rotation={[-Math.PI, 0.441, -Math.PI]}
              scale={[0.06, 0.45, 0.06]}
            />
            <mesh
              name="smallLeaf11"
              castShadow
              receiveShadow
              geometry={nodes.smallLeaf11.geometry}
              material={materials.m_dioLeafSmall}
              position={[450.814, 164.191, 218.34]}
              rotation={[-0.527, 1.314, -0.207]}
              scale={[0.124, 0.041, 0.104]}
            />
            <mesh
              name="pasted__grassShort19"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort19.geometry}
              material={materials.m_dioGrass}
              position={[450.431, 163.105, 228.746]}
              rotation={[2.873, -0.555, 3.009]}
              scale={[0.084, 0.209, 0.084]}
            />
            <mesh
              name="firefly"
              castShadow
              receiveShadow
              geometry={nodes.firefly.geometry}
              material={materials.m_dioFireflies}
              position={[448.783, 178.336, 224.599]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.068}
            />
            <mesh
              name="boat1"
              castShadow
              receiveShadow
              geometry={nodes.boat1.geometry}
              material={materials.m_boat}
              position={[451.243, 162.215, 222.924]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.109}
            />
            <mesh
              name="stem3"
              castShadow
              receiveShadow
              geometry={nodes.stem3.geometry}
              material={materials.m_dioStem}
              position={[448.434, 164.124, 224.117]}
              rotation={[Math.PI, 1.259, -3.122]}
              scale={[0.09, 0.197, 0.09]}
            />
            <mesh
              name="body"
              castShadow
              receiveShadow
              geometry={nodes.body.geometry}
              material={materials.m_butterflyBlue}
              position={[446.383, 171.516, 222.906]}
              rotation={[1.016, -0.187, 3.087]}
              scale={[1.205, 7.58, 1.205]}
            />
            <mesh
              name="eggInside"
              castShadow
              receiveShadow
              geometry={nodes.eggInside.geometry}
              material={materials.m_eggInsideBaked}
              position={[450.494, 147.815, 224.698]}
              rotation={[-Math.PI, 0.569, -Math.PI]}
              scale={0.988}
            />
            <mesh
              name="rock3"
              castShadow
              receiveShadow
              geometry={nodes.rock3.geometry}
              material={materials.m_dioRock}
              position={[471.866, 147.637, 113.544]}
              rotation={[0, 1.351, 0]}
            />
            <mesh
              name="grassShort3"
              castShadow
              receiveShadow
              geometry={nodes.grassShort3.geometry}
              material={materials.m_dioGrass1}
              position={[450.591, 162.827, 221.983]}
              rotation={[-Math.PI, 0.846, -Math.PI]}
              scale={[0.04, 0.101, 0.04]}
            />
            <mesh
              name="pasted__grassShort18"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort18.geometry}
              material={materials.m_dioGrass}
              position={[450.352, 163.108, 225.229]}
              rotation={[0, -1.168, 0.157]}
              scale={[0.112, 0.279, 0.112]}
            />
            <mesh
              name="pasted__grassShort12"
              castShadow
              receiveShadow
              geometry={nodes.pasted__grassShort12.geometry}
              material={materials.m_dioGrass}
              position={[452.32, 163.28, 228.024]}
              rotation={[-0.281, 1.114, 0.254]}
              scale={[0.1, 0.25, 0.1]}
            />
            <mesh
              name="YwingL_1"
              castShadow
              receiveShadow
              geometry={nodes.YwingL_1.geometry}
              material={materials.m_butterflyYellow}
              position={[448.042, 169.594, 230.444]}
              rotation={[-0.397, -1.277, -0.909]}
              scale={[0.293, 0.293, -0.293]}
            />
          </group>
        </group>
        <group name="roomArchitecture">
          <mesh
            ref={handleMeshRef}
            name="home"
            castShadow
            receiveShadow
            geometry={nodes.roomArchitectureShape.geometry}
            material={materials.m_cushionBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="home"
            castShadow
            receiveShadow
            geometry={nodes.roomArchitectureShape_1.geometry}
            material={materials.m_wallBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="home"
            castShadow
            receiveShadow
            geometry={nodes.roomArchitectureShape_2.geometry}
            material={materials.m_floorBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="home"
            castShadow
            receiveShadow
            geometry={nodes.roomArchitectureShape_3.geometry}
            material={materials.m_woodShelfBaked}
          />
          <mesh
            ref={handleMeshRef}
            name="home"
            castShadow
            receiveShadow
            geometry={nodes.roomArchitectureShape_4.geometry}
            material={materials.m_rugBaked}
          />
        </group>
      </group>
    </a.group>
  )
}

export default Room;
