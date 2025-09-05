import { useRef, useState, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three';
import { trackEvent } from '../staticPages/Analytics';
import { a, useSpring } from '@react-spring/three';

import ParticleSystemTea from "./ParticleSystemTea";
import ParticleSystemFloaties from "./ParticleSystemFloaties";

import keyClickSound from "../assets/audio/key-click2.mp3";
import ambientSound from "../assets/audio/birds3.mp3";

import roomScene from '../assets/3d/deskFinal5.glb'
import CaseStudies from './CaseStudies3D';
import MiniPlayer from './MiniPlayer3D';
import AnimPlayer from './AnimPlayer3D';
import ModelsScreen from './ModelsScreen3D';
import MiniProjects from './MiniProjects3D';
import Resume from './Resume3D';

const Room = ({ updateCameraPosition, updateCameraLookAt, defaultCamera, setFocusState, ...props }) => {
  const isIPad = /iPad|Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;
  const htmlY = useMemo(() => {
  return isIPad ? 204.1 : 206.65; // Adjust iPad values
}, []);

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

  const [currState, setCurrState] = useState('home');    // To pass into HTML children to turn off interactivity before zooming in
  const [imgState, setImgState] = useState('none');
  const [animState, setAnimState] = useState('none');
  const [isArrowPressed, setIsArrowPressed] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("https://xinaicathywu.me/static/case-studies");    // set screen1 when clicking VR buttons

  const particleSystemRef = useRef();
  const clickAudioRef = useRef(null);
  const ambientAudioRef = useRef(null);

  const keycapCount = 64;

  // Animate the mesh position when the buttons are pressed
  const springConfig = useMemo(() => {
    const base = {
      positionLeft: isArrowPressed === 'arrowLeft' ? [0, 0, 0.6] : [0, 0, 0],
      positionRight: isArrowPressed === 'arrowRight' ? [0, 0, 0.6] : [0, 0, 0],
      positionBallBounce: isArrowPressed === 'keyBallBounce' ? [0, -2, 0] : [0, 0, 0],
      positionTwoBalls: isArrowPressed === 'keyTwoBalls' ? [0, -2, 0] : [0, 0, 0],
      positionWalkCycle: isArrowPressed === 'keyWalkCycle' ? [0, -2, 0] : [0, 0, 0],
      positionWalkForward: isArrowPressed === 'keyWalkForward' ? [0, -2, 0] : [0, 0, 0],
      positionJump: isArrowPressed === 'keyJump' ? [0, -2, 0] : [0, 0, 0],
      positionRun: isArrowPressed === 'keyRun' ? [0, -2, 0] : [0, 0, 0],
    };

    for (let i = 1; i <= keycapCount; i++) {
      const key = `keycap${i}`;
      base[key] = isArrowPressed === key ? [0, -2, 0] : [0, 0, 0];
    }

    return base;
  }, [isArrowPressed]);

  const springs = useSpring({
    ...springConfig,
    config: { tension: 170, friction: 26 },
  });

  const handleButtonAnimation = (arrow) => {
    setIsArrowPressed(arrow);
    setTimeout(() => {
      setIsArrowPressed(false);  // Reset the animation after X ms
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
    particleSystemRef.current?.play();
  }, [actions, animations]);


  // audio 
  useEffect(() => {
    // Setup click sound
    clickAudioRef.current = new Audio(keyClickSound);
    clickAudioRef.current.volume = 1.0;

    // Setup ambient sound
    const ambientAudio = new Audio(ambientSound);
    ambientAudio.loop = true;
    ambientAudio.volume = 0.4;
    ambientAudioRef.current = ambientAudio;

    const playAmbient = () => {
      ambientAudio.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction.");
      });
    };

    playAmbient();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ambientAudio.pause();
      ambientAudio.currentTime = 0;
    };
  }, []);

  // Define a function to play the click sound
  const playClickSound = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0; // Restart sound if already playing
      clickAudioRef.current.play(); // Play the click sound
    }
  };

  useEffect(() => {
    const handleKeyDown = () => {
      playClickSound(); // Play click sound on key press
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);



  const handleMeshRef = (mesh) => {
    if (mesh && !meshes.includes(mesh)) {
      setMeshes(prevMeshes => [...prevMeshes, mesh]);
    }
  };


  // **handles clicks on 2d objs: html blocks, iFrames, etc. (Variable passed in from child jsx)**

  const handleScreenClick = (location) => {
    // trackEvent('InteractivePortfolio', location, '3D Room Interaction');
    setCurrState((prevState) => {
      // table screen zooms
      if (location === 'screen1' || location === 'screen2' || location === 'resume') {
        if (prevState === 'home' || prevState === 'artWall') {
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
      if (location === 'modelsScreen' || location === 'animPlayer' || location === 'modelsShelf') {
        if (prevState === 'home' || prevState === 'vrShelf') {
          setFocusState('modelsShelf');
          return 'modelsShelf';
        } else if (prevState === 'modelsShelf' || prevState === 'modelsScreen' || prevState === 'animPlayer' || prevState === 'flower') {
          setFocusState(location);
          return location;
        }
      }
      // art shelf screen zooms
      if (location === 'miniPlayer' || location === 'artWall') {
        if (prevState === 'home') {
          setFocusState('artWall');
          return 'artWall';
        } else if (prevState === 'artWall' || prevState === 'miniPlayer' || prevState === 'corkboard' || prevState === 'sketchbook') {
          setFocusState(location);
          return location;
        }
      }
      if (prevState === location) { // If already focused on the same screen, do nothing
        return prevState;
      }
      return prevState; // Default: return the previous state if no condition matched
    });
  };


  // **handles clicks on 3d objs: meshes in 3d model**
  const handlePointerDown = (e) => {
    // 👇 Skip if click/tap is on an iframe or any HTML overlay
    if (e.target.closest('iframe') || e.target.closest('.html-overlay')) {
      return;
    }

    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (e.clientY / window.innerHeight) * 2 + 1;

    // find intersections
    raycaster.setFromCamera(pointer, currCamera);
    // Use meshes array for raycasting
    const intersects = raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      if (INTERSECTED != intersects[0].object) {
        INTERSECTED = intersects[0].object;

        trackEvent('InteractivePortfolio', INTERSECTED.name, '3D Room Interaction');

        if (INTERSECTED.name === 'descSpacesButton') {
          setCurrState((prevState) => {
            if (prevState === 'spaces') {
              setFocusState('screen1');
              setCurrState('screen1');
              setIframeSrc("");
              setTimeout(() => {
                setIframeSrc("https://xinaicathywu.me/static/case-studies/spaces");
              }, 50); // Small delay
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }
        if (INTERSECTED.name === 'descAnivisionButton') {
          setCurrState((prevState) => {
            if (prevState === 'anivision') {
              setFocusState('screen1');
              setCurrState('screen1');
              setIframeSrc("");
              setTimeout(() => {
                setIframeSrc("https://xinaicathywu.me/static/case-studies/anivision");
              }, 50); // Small delay
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }

        if (INTERSECTED.name === 'table') {
          setFocusState('table');
          setCurrState('table');
        }
        else if (INTERSECTED.name === 'screen1' || INTERSECTED.name === 'screen2' || INTERSECTED.name === 'resume') {
          setCurrState((prevState) => {
            if (prevState === 'home' || prevState === 'artWall' || prevState === 'vrShelf') {
              setFocusState('table');
              setCurrState('table');
            }
            if (prevState === 'table' || prevState === 'screen1' || prevState === 'screen2' || prevState === 'resume') {
              setFocusState(INTERSECTED.name);
              return INTERSECTED.name;
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }
        else if (/^keycap\d+$/.test(INTERSECTED.name)) {
          handleButtonAnimation(INTERSECTED.name);
          playClickSound();
          setCurrState((prevState) => {
            if (prevState === 'home') {
              setFocusState('table');
              return 'table';
            }
            return prevState;
          });
        }

        else if (INTERSECTED.name == 'vrShelf') {
          setFocusState('vrShelf');
          setCurrState('vrShelf');
        } 
        else if (INTERSECTED.name == 'vrHitbox') {
          setCurrState((prevState) => {
            if (prevState === 'vrShelf') {
              setFocusState('home');
              setCurrState('home');
            } else {
              setFocusState('vrShelf');
              setCurrState('vrShelf');
            }
          });
        }
        else if (INTERSECTED.name == 'spaces' || INTERSECTED.name == 'anivision' || INTERSECTED.name == 'descSpacesButton' || INTERSECTED.name == 'descAnivisionButton') {
          setCurrState((prevState) => {
            if (prevState === 'home' || prevState === 'table' || prevState === 'artWall') {
              setFocusState('vrShelf');
              setCurrState('vrShelf');
            }
            else if (prevState === 'vrShelf') {
              if (INTERSECTED.name == 'descSpacesButton') {
                console.log('hit');
                setFocusState('spaces');
                setCurrState('spaces');
              } else if (INTERSECTED.name == 'descAnivisionButton') {
                setFocusState('anivision');
                setCurrState('anivision');
              } else {
                setFocusState(INTERSECTED.name);
                setCurrState(INTERSECTED.name);
              }
              return INTERSECTED.name;
            }
            return prevState; // Stay on the current state if no change is needed
          });
        } 
        else if (INTERSECTED.name == 'corkboard') {
          setFocusState('corkboard');
          setCurrState('corkboard');
        }
        else if (INTERSECTED.name == 'drawingHand' || INTERSECTED.name === 'drawingDavid' || INTERSECTED.name === 'drawingFish' || INTERSECTED.name === 'businessCard') {
          setCurrState((prevState) => {
            if (prevState === 'home' || prevState === 'artWall' || prevState === 'paintingDoor' || prevState === 'paintingFruit' || prevState === 'paintingLandscape' || prevState === 'paintingBirds' || prevState === 'sketchbook' || prevState == 'miniPlayer') {
              setFocusState('corkboard');
              setCurrState('corkboard');
            }
            else if (prevState === 'corkboard' || prevState === 'drawingHand' || prevState === 'drawingDavid' || prevState === 'drawingFish' || prevState === 'businessCard') {
              setFocusState(INTERSECTED.name);
              return INTERSECTED.name;
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }
        else if (INTERSECTED.name == 'artWall') {
          setFocusState('artWall');
          setCurrState('artWall');
        }
        else if (INTERSECTED.name == 'artWallHitbox') {
          setCurrState((prevState) => {
            if (prevState === 'artWall') {
              setFocusState('home');
              setCurrState('home');
            } else {
              setFocusState('artWall');
              setCurrState('artWall');
            }
          });
        }
        else if (INTERSECTED.name == 'paintingDoor' || INTERSECTED.name == 'paintingFruit' || INTERSECTED.name == 'paintingLandscape' || INTERSECTED.name == 'paintingBirds' || INTERSECTED.name == 'sketchbook' ||
          INTERSECTED.name == 'miniPlayer' || INTERSECTED.name == 'arrowRight' || INTERSECTED.name == 'arrowLeft') {

          setCurrState((prevState) => {
            if (prevState === 'home' || prevState === 'table' || prevState === 'screen1' || prevState === 'screen2' || prevState === 'vrShelf') {
              setFocusState('artWall');
              setCurrState('artWall');
            }
            else if (prevState === 'artWall' || prevState === 'paintingDoor' || prevState === 'paintingFruit' || prevState === 'paintingLandscape' || prevState === 'paintingBirds' || prevState === 'sketchbook' || prevState == 'miniPlayer' || prevState === 'corkboard' || prevState === 'drawingDavid' || prevState === 'drawingFish' || prevState === 'businessCard' ||
              prevState === 'miniPlayer') {
              if (INTERSECTED.name === 'arrowRight' || INTERSECTED.name === 'arrowLeft') {
                if (prevState === 'miniPlayer') {
                  setImgState(INTERSECTED.name);
                  handleButtonAnimation(INTERSECTED.name);
                  setFocusState('miniPlayer');
                  return 'miniPlayer';
                } else {
                  setFocusState('miniPlayer');
                  return 'miniPlayer';
                }
              }
              setFocusState(INTERSECTED.name);
              return INTERSECTED.name;
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }
        else if (INTERSECTED.name == 'modelsShelf') {
          setFocusState('modelsShelf');
          setCurrState('modelsShelf');
        }
        else if (INTERSECTED.name == 'modelsHitbox') {
          setCurrState((prevState) => {
            if (prevState === 'modelsShelf') {
              setFocusState('home');
              setCurrState('home');
            } else {
              setFocusState('modelsShelf');
              setCurrState('modelsShelf');
            }
          });
        }
        else if (INTERSECTED.name == 'flower' || INTERSECTED.name == 'boat' || INTERSECTED.name == 'egg' || INTERSECTED.name == 'animPlayer' || INTERSECTED.name == 'modelsScreen' ||
          INTERSECTED.name == 'keyRun' || INTERSECTED.name == 'keyWalkForward' || INTERSECTED.name == 'keyTwoBalls' || INTERSECTED.name == 'keyJump' || INTERSECTED.name == 'keyWalkCycle' || INTERSECTED.name == 'keyBallBounce') {
          setCurrState((prevState) => {
            if (prevState === 'home' || prevState === 'vrShelf') {
              setFocusState('modelsShelf');
              setCurrState('modelsShelf');
            }
            else if (prevState === 'modelsShelf' || prevState === 'flower' || prevState === 'egg' || prevState === 'boat' || prevState === 'animPlayer' || prevState == 'modelsScreen') {
              if (INTERSECTED.name == 'keyRun' || INTERSECTED.name == 'keyWalkForward' || INTERSECTED.name == 'keyTwoBalls' || INTERSECTED.name == 'keyJump' || INTERSECTED.name == 'keyWalkCycle' || INTERSECTED.name == 'keyBallBounce') {
                if (prevState === 'animPlayer') {
                  setAnimState(INTERSECTED.name);
                  handleButtonAnimation(INTERSECTED.name);
                  playClickSound();
                  setFocusState('animPlayer');
                  return 'animPlayer';
                }
                else {
                  setFocusState('animPlayer');
                  return 'animPlayer';
                }
              }
              setFocusState(INTERSECTED.name);
              setCurrState(INTERSECTED.name);
            }
            return prevState; // Stay on the current state if no change is needed
          });
        }
        else if (INTERSECTED.name == 'home') {
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

    const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
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


  useEffect(() => {
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
  }, [gl, handlePointerDown, handlePointerUp, handleKeyDown])

  return (
    <>
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
              name="screen1" ref={handleMeshRef}
              geometry={nodes.monitor1Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              name="screen1" ref={handleMeshRef}
              geometry={nodes.monitor1Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
            <Html scale={2} rotation-y={-Math.PI} position={[-91.4, 126.5, 326.5]} transform occlude>
              <CaseStudies onScreenClick={handleScreenClick} currState={currState} iframeSrc={iframeSrc} />
            </Html>
          </group>
          <group name="monitor2">
            <mesh
              name="screen2" ref={handleMeshRef}
              geometry={nodes.monitor2Shape.geometry}
              material={materials.m_blackFlat}
            />
            <mesh
              name="screen2" ref={handleMeshRef}
              geometry={nodes.monitor2Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
            <Html scale={[1.5, 1.5, 1.5]} rotation={[Math.PI, -0.597, Math.PI]} position={[5.9, 133.534, 306.9]} transform>
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
            position={[-90.384, 77.453, 267.816]}
            scale={[29.994, 18.589, 20.924]}
          />
          <group name="keycaps">
                <a.mesh name="keycap1" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap1}
                  geometry={nodes.key1.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap2" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap2}
                  geometry={nodes.key2.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap3" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap3}
                  geometry={nodes.key3.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap4" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap4}
                  geometry={nodes.key4.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap5" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap5}
                  geometry={nodes.key5.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap6" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap6}
                  geometry={nodes.key6.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap7" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap7}
                  geometry={nodes.key7.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap8" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap8}
                  geometry={nodes.key8.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap9" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap9}
                  geometry={nodes.key9.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap10" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap10}
                  geometry={nodes.key10.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap11" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap11}
                  geometry={nodes.key11.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap12" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap12}
                  geometry={nodes.key12.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap13" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap13}
                  geometry={nodes.key13.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap14" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap14}
                  geometry={nodes.key14.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap15" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap15}
                  geometry={nodes.key15.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap16" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap16}
                  geometry={nodes.key16.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap17" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap17}
                  geometry={nodes.key17.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap18" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap18}
                  geometry={nodes.key18.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap19" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap19}
                  geometry={nodes.key19.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap20" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap20}
                  geometry={nodes.key20.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap21" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap21}
                  geometry={nodes.key21.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap22" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap22}
                  geometry={nodes.key22.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap23" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap23}
                  geometry={nodes.key23.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap24" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap24}
                  geometry={nodes.key24.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap25" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap25}
                  geometry={nodes.key25.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap26" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap26}
                  geometry={nodes.key26.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap27" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap27}
                  geometry={nodes.key27.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap28" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap28}
                  geometry={nodes.key28.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap29" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap29}
                  geometry={nodes.key29.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap30" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap30}
                  geometry={nodes.key30.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap31" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap31}
                  geometry={nodes.key31.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap32" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap32}
                  geometry={nodes.key32.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap33" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap33}
                  geometry={nodes.key33.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap34" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap34}
                  geometry={nodes.key34.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap35" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap35}
                  geometry={nodes.key35.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap36" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap36}
                  geometry={nodes.key36.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap37" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap37}
                  geometry={nodes.key37.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap38" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap38}
                  geometry={nodes.key38.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap39" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap39}
                  geometry={nodes.key39.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap40" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap40}
                  geometry={nodes.key40.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap41" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap41}
                  geometry={nodes.key41.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap42" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap42}
                  geometry={nodes.key42.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap43" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap43}
                  geometry={nodes.key43.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap44" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap44}
                  geometry={nodes.key44.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap45" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap45}
                  geometry={nodes.key45.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap46" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap46}
                  geometry={nodes.key46.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap47" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap47}
                  geometry={nodes.key47.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap48" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap48}
                  geometry={nodes.key48.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap49" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap49}
                  geometry={nodes.key49.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap50" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap50}
                  geometry={nodes.key50.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap51" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap51}
                  geometry={nodes.key51.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap52" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap52}
                  geometry={nodes.key52.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap53" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap53}
                  geometry={nodes.key53.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap54" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap54}
                  geometry={nodes.key54.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap55" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap55}
                  geometry={nodes.key55.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap56" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap56}
                  geometry={nodes.key56.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <a.mesh name="keycap57" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap57}
                  geometry={nodes.key57.geometry}
                  material={materials.m_keycapWhiteBaked}
                />
                <group position={[-56.695, 79.456, 276.885]}>
                  <a.mesh name="keycap58" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap58}
                    geometry={nodes.key58.geometry}
                    material={materials.m_keycapPinkBaked}
                    scale={[4.671, 2.207, 4.671]}
                  />
                </group>
                <a.mesh name="keycap59" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap59}
                  geometry={nodes.key59.geometry}
                  material={materials.m_keycapYellowBaked}
                />
                <group position={[-124.057, 79.456, 267.27]}>
                  <a.mesh name="keycap60" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap60}
                    geometry={nodes.key60.geometry}
                    material={materials.m_keycapGreenBaked}
                    scale={[4.671, 2.207, 4.671]}
                  />
                </group>
                <group position={[-109.499, 79.456, 257.574]}>
                  <a.mesh name="keycap61" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap61}
                    geometry={nodes.key61.geometry}
                    material={materials.m_keycapPurpleBaked}
                    scale={[4.671, 2.207, 4.671]}
                  />
                </group>
                <a.mesh name="keycap63" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap63}
                  geometry={nodes.key63.geometry}
                  material={materials.m_keycapBlueBaked}
                />
                <a.mesh name="keycap64" ref={handleMeshRef} onPointerDown={handlePointerDown} position={springs.keycap64}
                  geometry={nodes.key64.geometry}
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
            name="modelsHitbox" ref={handleMeshRef}
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
          <Html scale={0.94} rotation-y={Math.PI / 2} position={[-386, 314.8, 27]} transform occlude>
            <ModelsScreen onScreenClick={handleScreenClick} />
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
              material={materials.m_plantBroadLeafBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_1.geometry}
              material={materials.m_flowerLeafsBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_2.geometry}
              material={materials.m_lilyWater}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_3.geometry}
              material={materials.m_plantStemBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_4.geometry}
              material={materials.m_flowerCenterBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_5.geometry}
              material={materials.m_lily1Baked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_6.geometry}
              material={materials.m_lilyBaked}
            />
            <mesh
              name="flower" ref={handleMeshRef}
              geometry={nodes.flowerShape_7.geometry}
              material={materials.m_plantPotBaked}
            />
          </group>
          <group name="boat">
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape.geometry}
              material={materials.m_lanternBaked}
            />
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_1.geometry}
              material={materials.m_boatRust}
            />
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_2.geometry}
              material={materials.m_boatBaked}
            />
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_3.geometry}
              material={materials.m_lanternGlass}
            />
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_4.geometry}
              material={materials.m_lanternHandleBaked}
            />
            <mesh
              name="boat" ref={handleMeshRef}
              geometry={nodes.boatShape_5.geometry}
              material={materials.m_oarBaked}
            />
          </group>
          <group name="egg">
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape.geometry}
              material={materials.m_dioGrass1Baked1}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_1.geometry}
              material={materials.m_dioStemBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_2.geometry}
              material={materials.m_dioRockBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_3.geometry}
              material={materials.m_dioLeafSmallBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_4.geometry}
              material={materials.m_eggInsideBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_5.geometry}
              material={materials.m_dioOarBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_6.geometry}
              material={materials.m_butterflyYellowBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_7.geometry}
              material={materials.m_butterflyBlueBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_8.geometry}
              material={materials.m_dioLeafBigBaked1}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_9.geometry}
              material={materials.m_dioBoatBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_10.geometry}
              material={materials.m_dioWaterBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_11.geometry}
              material={materials.m_dioLilyPadBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_12.geometry}
              material={materials.m_dioTwigBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_13.geometry}
              material={materials.m_eggHolderBaked}
            />
            <mesh
              name="egg" ref={handleMeshRef}
              geometry={nodes.eggShape_14.geometry}
              material={materials.m_eggShellBaked}
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
              material={materials.m_keycapYellowBaked1}
            />
            <mesh
              mesh name="animPlayer" ref={handleMeshRef}
              geometry={nodes.animPlayerShape_2.geometry}
              material={materials.m_animPlayerBaked}
            />
          </group>
          <group name="AnimKeys">
            <a.mesh name="keyWalkForward" ref={handleMeshRef} position={springs.positionWalkForward} geometry={nodes.keyWalkForward.geometry} material={materials.m_controlButtonsBaked} />
            <a.mesh name="keyRun" ref={handleMeshRef} position={springs.positionRun} geometry={nodes.keyRun.geometry} material={materials.m_controlButtonsBaked} />
            <a.mesh name="keyTwoBalls" ref={handleMeshRef} position={springs.positionTwoBalls} geometry={nodes.keyTwoBalls.geometry} material={materials.m_controlButtonsBaked} />
            <a.mesh name="keyJump" ref={handleMeshRef} position={springs.positionJump} geometry={nodes.keyJump.geometry} material={materials.m_controlButtonsBaked} />
            <a.mesh name="keyWalkCycle" ref={handleMeshRef} position={springs.positionWalkCycle} geometry={nodes.keyWalkCycle.geometry} material={materials.m_controlButtonsBaked} />
            <a.mesh name="keyBallBounce" ref={handleMeshRef} position={springs.positionBallBounce} geometry={nodes.keyBallBounce.geometry} material={materials.m_controlButtonsBaked} />
            <Html scale={1.9} rotation-y={Math.PI / 2} position={[-366, htmlY, 80.25]} transform occlude>
              <AnimPlayer onScreenClick={handleScreenClick} animState={animState} />
            </Html>
          </group>
          <mesh
            name="artWallHitbox" ref={handleMeshRef}
            geometry={nodes.modelsHitbox1.geometry}
            material={materials.m_hitbox1}
            position={[-11.824, 343.732, 376.4]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[2.977, 112.544, 141.696]}
          />
        </group>
        <group name="artWall">
          <mesh
            name="artWall" ref={handleMeshRef}
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
                material={materials.m_blackRubberBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_1.geometry}
                material={materials.m_miniPlayerWoodBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_2.geometry}
                material={materials.m_blackBaked}
              />
              <mesh
                name="miniPlayer" ref={handleMeshRef}
                geometry={nodes.miniPlayerShape_3.geometry}
                material={materials.m_miniPlayerFaceBaked}
              />
            </group>
            <a.mesh
              name="arrowLeft" ref={handleMeshRef} position={springs.positionLeft} onPointerDown={handlePointerDown}
              geometry={nodes.arrowLeft.geometry}
              material={materials.m_controlButtonsBaked}
            />
            <a.mesh
              name="arrowRight" ref={handleMeshRef} position={springs.positionRight} onPointerDown={handlePointerDown}
              geometry={nodes.arrowRight.geometry}
              material={materials.m_controlButtonsBaked}
            />
            <Html scale={0.44} rotation-y={-Math.PI} position={[94.47, 232.21, 354]} transform occlude>
              <MiniPlayer onScreenClick={handleScreenClick} imgState={imgState} setImgState={setImgState} />
            </Html>
          </group>
          <group name="inkwell">
            <mesh
              name="inkwellShape"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape.geometry}
              material={materials.m_inkRibbonBaked}
            />
            <mesh
              name="inkwellShape_1"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_1.geometry}
              material={materials.m_inkBaked}
            />
            <mesh
              name="inkwellShape_2"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_2.geometry}
              material={materials.m_glass}
            />
            <mesh
              name="inkwellShape_3"
              castShadow
              receiveShadow
              geometry={nodes.inkwellShape_3.geometry}
              material={materials.m_inkWaxBaked}
            />
          </group>
          <group name="brushes">
            <mesh
              name="brushesShape"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape.geometry}
              material={materials.m_paintbrushHairDarkBrownBaked}
            />
            <mesh
              name="brushesShape_1"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_1.geometry}
              material={materials.m_ceramicCupBaked}
            />
            <mesh
              name="brushesShape_2"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_2.geometry}
              material={materials.m_paintbrushHairBrownBaked}
            />
            <mesh
              name="brushesShape_3"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_3.geometry}
              material={materials.m_paintbrushHandleBaked}
            />
            <mesh
              name="brushesShape_4"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_4.geometry}
              material={materials.m_paintbrushHandleBrownBaked}
            />
            <mesh
              name="brushesShape_5"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_5.geometry}
              material={materials.m_paintbrushMetalSilverBaked}
            />
            <mesh
              name="brushesShape_6"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_6.geometry}
              material={materials.m_blackBaked}
            />
            <mesh
              name="brushesShape_7"
              castShadow
              receiveShadow
              geometry={nodes.brushesShape_7.geometry}
              material={materials.m_paintbrushMetalGoldBaked}
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
              material={materials.m_blackBaked}
            />
            <mesh
              name="sketchbook" ref={handleMeshRef}
              geometry={nodes.tidalBasinShape_2.geometry}
              material={materials.m_whitePaperBaked}
            />
          </group>
          <group name="door">
            <mesh
              name="paintingDoor" ref={handleMeshRef}
              geometry={nodes.doorShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingDoor" ref={handleMeshRef}
              geometry={nodes.doorShape_1.geometry}
              material={materials.m_artPaintingDoor}
            />
          </group>
          <group name="fruit">
            <mesh
              name="paintingFruit" ref={handleMeshRef}
              geometry={nodes.fruitShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingFruit" ref={handleMeshRef}
              geometry={nodes.fruitShape_1.geometry}
              material={materials.m_artPaintingFruit}
            />
          </group>
          <group name="landscape">
            <mesh
              name="paintingLandscape" ref={handleMeshRef}
              geometry={nodes.landscapeShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingLandscape" ref={handleMeshRef}
              geometry={nodes.landscapeShape_1.geometry}
              material={materials.m_artPaintingLandscape}
            />
          </group>
          <group name="birds">
            <mesh
              name="paintingBirds" ref={handleMeshRef}
              geometry={nodes.birdsShape.geometry}
              material={materials.m_paintingFrameBaked}
            />
            <mesh
              name="paintingBirds" ref={handleMeshRef}
              geometry={nodes.birdsShape_1.geometry}
              material={materials.m_artPaintingBirds}
            />
          </group>
          <group name="corkboard1">
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.corkboard1Shape.geometry}
              material={materials.m_whiteFrameBaked}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.corkboard1Shape_1.geometry}
              material={materials.m_keycapYellowBaked}
            />
          </group>
          <group name="pins">
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.polySurface5.geometry}
              material={materials.m_corkSurfaceBaked}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.polySurface6.geometry}
              material={materials.m_keycapPurplePins}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.polySurface7.geometry}
              material={materials.m_keycapPurplePins}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.polySurface8.geometry}
              material={materials.m_keycapPurplePins}
              position={[0, 0, 0.14]}
            />
            <mesh
              name="corkboard" ref={handleMeshRef}
              geometry={nodes.polySurface9.geometry}
              material={materials.m_keycapPurplePins}
            />
          </group>
          <mesh
            name="businessCard" ref={handleMeshRef}
            geometry={nodes.businessCard.geometry}
            material={materials.m_artBusinessCard}
            position={[133.634, 244.941, 374.5]}
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
            position={[258.045, 93.144, 374.5]}
            rotation={[Math.PI / 2, 0.021, Math.PI]}
            scale={[81.023, 81.023, 115.7]}
          />
          <mesh
            name="drawingDavid" ref={handleMeshRef}
            geometry={nodes.david.geometry}
            material={materials.m_artDrawingDavid}
            position={[148.119, 211.543, 374.5]}
            rotation={[Math.PI / 2, -0.013, -Math.PI]}
            scale={[50.416, 54.923, 71.539]}
          />
        </group>
        <group name="vrShelf">
          <mesh
            name="vrHitbox" ref={handleMeshRef}
            geometry={nodes.vrShelfHitbox.geometry}
            material={materials.m_hitbox1}
            position={[-383.315, 84.175, 325.5]}
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
            name="descAnivisionButton" ref={handleMeshRef}
            geometry={nodes.descAnivisionButton.geometry}
            material={materials.m_descAnivisionButtonBaked}
            position={[-273.87, 135.326, 265.207]}
            rotation={[0.673, -0.664, 0.451]}
            scale={1.566}
          />
          <group name="anivision" position={[40.484, 0.215, 38.195]} rotation={[0, -0.126, 0]}>
            <group
              name="snake"
              position={[-222.788, 162.804, 353.509]}
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
            <group name="tarsier" position={[-36, 10.5, -32.657]} rotation={[0, 0.104, 0]}>
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
                  position={[9.84, 1.46, 15.97]}
                  rotation={[2.589, -1.426, -Math.PI]}
                  scale={0.039}
                />
              </group>
              <primitive object={nodes.hips} />
            </group>
            <group name="anivisionModel" position={[-42.589, 0, -38.092]} rotation={[0, 0.126, 0]}>
              <mesh
                name="anivision" ref={handleMeshRef}
                geometry={nodes.anivisionModelShape.geometry}
                material={materials.m_mushroomBaked}
              />
              <mesh
                name="anivision" ref={handleMeshRef}
                geometry={nodes.anivisionModelShape_1.geometry}
                material={materials.m_dioramaBase}
              />
            </group>
          </group>
          <group name="headset">
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape.geometry}
              material={materials.m_headsetStandBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_1.geometry}
              material={materials.m_tableHeadsetWhiteBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_2.geometry}
              material={materials.m_headsetStrapBaked}
            />
            <mesh
              name="vrShelf" ref={handleMeshRef}
              geometry={nodes.headsetShape_3.geometry}
              material={materials.m_blackRubberBaked}
            />
          </group>
        </group>
        <group name="architecture">
          <group name="room">
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape.geometry}
              material={materials.m_floorBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_1.geometry}
              material={materials.m_wallBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_2.geometry}
              material={materials.m_rugBaked}
            />
            <mesh
              name="home" ref={handleMeshRef}
              geometry={nodes.roomShape_3.geometry}
              material={materials.m_woodShelfBaked}
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
