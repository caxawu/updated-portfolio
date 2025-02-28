import { useRef, useState, useEffect } from 'react'
import { useCursor, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Html, Environment, ContactShadows, OrbitControls } from '@react-three/drei'

import roomScene from '../assets/3d/desk5.glb'
import CaseStudies from '../pages/CaseStudies';
import { OtherProjects } from '../pages';

const Room = ({isRotating, setIsRotating, setCurrentStage, updateCameraPosition, updateCameraLookAt, defaultCamera, setFocusState, ...props}) => {
  const roomRef = useRef();
  const [meshes, setMeshes] = useState([]);

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(roomScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  const currCamera = defaultCamera;
  let INTERSECTED;

  // Add each mesh reference to the meshes array
  const handleMeshRef = (mesh) => {
    if (mesh && !meshes.includes(mesh)) {
       setMeshes(prevMeshes => [...prevMeshes, mesh]);
    }
  };

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
           
           if ( INTERSECTED.name == 'table' ) {
            setFocusState('table');

          } else if ( INTERSECTED.name == 'screen1' ) {
            setFocusState('screen1');

          } else if ( INTERSECTED.name == 'screen2' ) {
            setFocusState('screen2');

          } else if ( INTERSECTED.name == 'vrShelf' ) {
            setFocusState('vrShelf');

          } else if ( INTERSECTED.name == 'spaces' ) {
            setFocusState('spaces');

          } else if ( INTERSECTED.name == 'anivision' ) {
            setFocusState('anivision');

          } else if ( INTERSECTED.name == 'artWall' ) {
            setFocusState('artWall');

          } else if ( INTERSECTED.name == 'businessCard' ) {
            setFocusState('businessCard');

          } else if ( INTERSECTED.name == 'modelsShelf' ) {
            setFocusState('modelsShelf');

          } else if ( INTERSECTED.name == 'ground' ) {
            setFocusState('home');
          }
         }
       } else {
         INTERSECTED = null;
         setFocusState('home');
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
    if (e.key === 'ArrowLeft') {
        if (!isRotating) setIsRotating(true);
        // roomRef.current.rotation.y = 9.43;

    } else if (e.key === 'ArrowRight') {
        if (!isRotating) setIsRotating(true);
        // roomRef.current.rotation.y -= 0.01 * Math.PI;
        updateCameraPosition([-18, 2, -6]);
        updateCameraLookAt([8, -6, -32]);
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsRotating(false);
    }
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
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp])

  return (
    <a.group ref={roomRef}{...props}>
      <group rotation={[0, -0.02, 0]} scale={0.1}>
      <mesh
        ref={handleMeshRef}
        name="table"
        castShadow
        receiveShadow
        geometry={nodes.table_1.geometry}
        material={materials.m_whiteSpecularBaked}
        position={[0, 1.114, 0]}
      />
      <mesh   
        ref={handleMeshRef}
        name="screen1"
        castShadow
        receiveShadow
        geometry={nodes.screen1.geometry}
        material={materials.m_blackFlat}
        position={[-91.419, 124.834, 330.657]}
        scale={[54.879, 58.336, 58.336]}
      >

<Html  style={{ 
    backgroundColor: 'red', padding: '1px', color: 'white', 
    width : '50%', 
    height : '5%',
    }}
    rotation-y={-Math.PI} position={[0, 0.02, -0.07]} transform occlude>
  <div style={{ backgroundColor: 'red', padding: '1px', color: 'white', }}>
    <iframe 
      title="embed" 
      // width={60} 
      // height={50} 
      style={{ 
        // transform: "scale(0.1)",
        // zoom: 0.2,
        // transformOrigin: "0 0", 
        width: "100%",  // Adjust width based on scale
        height: "100%"   // Adjust height based on scale
      }} 
      src="https://xinaicathywu.me/"
    />
  </div>
</Html>

        <Html scale={0.1} rotation-y={-Math.PI} position={[0, 0.03, -0.07]} transform occlude>
        <div>
          <CaseStudies/>
        </div>
        </Html>
      </mesh>
      
      position={[-91.419, 124.834, 330.657]}
      scale={[54.879, 58.336, 58.336]}

      <mesh   
              ref={handleMeshRef}
              name="screen1"
              castShadow
              receiveShadow
              geometry={nodes.screen1.geometry}
              material={materials.m_blackFlat}
              position={[-91.419, 124.834, 330.657]}
              scale={[54.879, 58.336, 58.336]}
            >
              <Html scale={0.1} rotation-y={-Math.PI} position={[0, 0.03, -0.07]} transform occlude>
                <div>
                  <CaseStudies/>
                </div>
              </Html>
            </mesh>
            <mesh
              ref={handleMeshRef}
              name="screen1"
              castShadow
              receiveShadow
              geometry={nodes.screen1Shape_1.geometry}
              material={materials.m_whiteMonitorBaked}
            />
          </group>
          <group name="screen2">
          <mesh
        ref={handleMeshRef}
        name="screen2"
        castShadow
        receiveShadow
        geometry={nodes.screen2.geometry}
        material={materials.m_blackFlat}
        position={[2.249, 133.534, 313.078]}
        rotation={[0, 0.597, Math.PI / 2]}
        scale={[37.647, 40.019, 40.019]}
      >
        <Html scale={0.05} rotation-y={-Math.PI} rotation-z={Math.PI/2} position={[0, 0.03, -0.07]} transform occlude>
        <div>
          <OtherProjects/>
        </div>
        </Html>
      </mesh>




      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape.geometry}
        material={materials.m_woodShelfBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_1.geometry}
        material={materials.m_floorBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_2.geometry}
        material={materials.m_rugBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_3.geometry}
        material={materials.m_wallBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_4.geometry}
        material={materials.m_cushionBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitorWhiteCombined.geometry}
        material={materials.m_whiteFlatBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapWhiteCombined1.geometry}
        material={materials.m_keycapWhiteBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapBlueCombined1.geometry}
        material={materials.m_keycapBlueBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapPurpleCombined1.geometry}
        material={materials.m_keycapPurpleBaked}
        position={[-109.499, 79.456, 257.574]}
        scale={[4.671, 2.207, 4.671]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapGreenCombined1.geometry}
        material={materials.m_keycapGreenBaked}
        position={[-124.057, 79.456, 267.27]}
        scale={[4.671, 2.207, 4.671]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapYellowCombined1.geometry}
        material={materials.m_keycapYellowBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keycapPinkCombined1.geometry}
        material={materials.m_keycapPinkBaked}
        position={[-56.695, 79.456, 276.885]}
        scale={[4.671, 2.207, 4.671]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboardBottomCombined1.geometry}
        material={materials.m_keyboardBottomBaked}
        position={[-90.138, 77.453, 267.842]}
        scale={[29.994, 18.589, 20.924]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.resume2.geometry}
        material={materials.testResumeBaked}
        position={[-201.075, 77.247, 269.451]}
        scale={[44.769, 7.701, 44.769]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.resume1Top.geometry}
        material={materials.m_resumeBaked}
        position={[-159.133, 77.247, 269.451]}
        scale={[44.769, 7.701, 44.769]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.resume1Paper.geometry}
        material={materials.m_whitePaperBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.corkFrame1.geometry}
        material={materials.m_whiteFrameBaked}
        position={[207.921, 320.416, 376.773]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.196, 0.005, 14.284]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drawing6.geometry}
        material={materials.m_artDrawingHandBaked}
        position={[258.045, 93.144, 373.493]}
        rotation={[Math.PI / 2, 0.021, Math.PI]}
        scale={[81.023, 81.023, 115.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drawing5.geometry}
        material={materials.m_artDrawingFishBaked}
        position={[184.242, 133.823, 373.165]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[50.416, 54.923, 71.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drawing4.geometry}
        material={materials.m_artDrawingDavidBaked}
        position={[148.119, 211.543, 375.008]}
        rotation={[Math.PI / 2, -0.013, -Math.PI]}
        scale={[50.416, 54.923, 71.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door.geometry}
        material={materials.m_artPaintingDoorBaked}
        position={[42.265, 368.078, 377.898]}
        rotation={[0, -0.002, 0]}
        scale={[81.534, 53.913, 7.583]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fruit.geometry}
        material={materials.m_artPaintingFruitBaked}
        position={[-70.836, 275.544, 377.325]}
        rotation={[0, -0.001, 0]}
        scale={[60.063, 60.063, 6.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.birds.geometry}
        material={materials.m_artPaintingBirdsBaked}
        position={[-167.33, 276.713, 376.772]}
        rotation={[0, -0.006, 0]}
        scale={[59.589, 26.962, 5.711]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.landscape.geometry}
        material={materials.m_artPaintingLandscapeBaked}
        position={[-127.556, 404.241, 377.507]}
        rotation={[0, -0.003, 0]}
        scale={[69.651, 30.58, 6.477]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paintingFrameCombined.geometry}
        material={materials.m_paintingFrameBaked}
      />
      <mesh
      ref={handleMeshRef}
        name="businessCard"
        castShadow
        receiveShadow
        geometry={nodes.businessCard2.geometry}
        material={materials.m_artBusinessCardBaked}
        position={[133.634, 244.941, 374.941]}
        rotation={[Math.PI / 2, -0.031, -Math.PI]}
        scale={[25.739, 84.174, 14.145]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pinGrouped1.geometry}
        material={materials.m_keycapYellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inkCombined.geometry}
        material={materials.m_inkBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.waxCombined.geometry}
        material={materials.m_inkWaxBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container1.geometry}
        material={materials.m_ceramicCupBaked}
        position={[141.306, 224.04, 367.223]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[8.235, 7.722, 8.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handleBrown2.geometry}
        material={materials.m_paintbrushHandleBrownBaked}
        position={[137.647, 250.089, 372.274]}
        rotation={[0.191, 0.07, 0.252]}
        scale={[0.837, 18.63, 0.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handleWhiteGrouped1.geometry}
        material={materials.m_paintbrushHandleBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.goldMetalGrouped1.geometry}
        material={materials.m_paintbrushMetalGoldBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bristlesBrownGrouped1.geometry}
        material={materials.m_paintbrushHairBrownBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.silverMetal2.geometry}
        material={materials.m_paintbrushMetalSilverBaked}
        position={[133.566, 250.898, 373.437]}
        rotation={[0.2, 0.058, 0.101]}
        scale={[0.837, 18.63, 0.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bristlesDark2.geometry}
        material={materials.m_paintbrushHairDarkBrownBaked}
        position={[133.566, 250.898, 373.437]}
        rotation={[0.2, 0.058, 0.101]}
        scale={[0.837, 18.63, 0.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ribbonCombined1.geometry}
        material={materials.m_inkRibbonBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handleBrown1.geometry}
        material={materials.m_paintbrushHandleBrownBaked}
        position={[137.647, 250.089, 372.274]}
        rotation={[0.191, 0.07, 0.252]}
        scale={[0.837, 18.63, 0.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass1.geometry}
        material={materials.m_glassBaked}
        position={[123.102, 222.466, 354.179]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.014, 0.016, 1.457]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.corkSurface1.geometry}
        material={materials.m_corkSurfaceBaked}
        position={[207.921, 320.416, 376.773]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.196, 0.005, 14.284]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.artShelfWood.geometry}
        material={materials.m_woodShelfBaked}
        position={[64.396, 212.258, 359.733]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.182, 0.039, 0.602]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sketchbookOuter1.geometry}
        material={materials.m_blackBaked}
        position={[28.813, 230.351, 357.779]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.099, 0.004, 2.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.playerFace.geometry}
        material={materials.m_miniPlayerFaceBaked}
        position={[94.516, 228.97, 355.565]}
        scale={[22.172, 22.172, 3.708]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.playerWoodCombined1.geometry}
        material={materials.m_miniPlayerWoodBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.playerFrontDecoHeadsetRubber1.geometry}
        material={materials.m_blackRubberBaked}
        position={[0, 1.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.decoShape.geometry}
        material={materials.m_miniPlayerWoodBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.decoShape_1.geometry}
        material={materials.m_blackRubberBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.decoShape_2.geometry}
        material={materials.m_blackBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.decoShape_3.geometry}
        material={materials.m_miniPlayerFaceBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sketchbookImg1.geometry}
        material={materials.m_artTidalBasinBaked}
        position={[28.813, 230.351, 357.779]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.099, 0.004, 2.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sketchbookPaper.geometry}
        material={materials.m_whitePaperBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface2.geometry}
        material={materials.m_blackBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cushion.geometry}
        material={materials.m_cushionBaked}
        position={[-88.166, 17.409, 158.702]}
        scale={0.898}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug.geometry}
        material={materials.m_rugBaked}
        position={[-88.671, 4.383, 161.29]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.816}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.m_floorBaked}
        position={[1.922, -2.739, 52.869]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.785, 0.658, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wallCombined.geometry}
        material={materials.m_wallBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorWood.geometry}
        material={materials.m_woodShelfBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vrShelfWood.geometry}
        material={materials.m_woodShelfBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.escher1.geometry}
        material={materials.m_escherBaked}
        position={[-301.734, 322.289, 301.257]}
        rotation={[0, 1.57, Math.PI]}
        scale={[1.775, 1.775, -1.775]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.headsetStandCombined1.geometry}
        material={materials.m_blackBaked}
        position={[0, 0.792, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.headsetStrapCombined.geometry}
        material={materials.m_headsetStrapBaked}
        position={[0, 1.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.headsetFront.geometry}
        material={materials.m_whiteSpecularBaked}
        position={[0, 1.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.modelsShelfWood.geometry}
        material={materials.m_woodShelfBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.animPlayer.geometry}
        material={materials.m_animPlayerBaked}
      />
      </group>
    </a.group>
  )
}

export default Room;
