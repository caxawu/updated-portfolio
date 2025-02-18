import { useRef, useState, useEffect } from 'react'
import { useCursor, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

import roomScene from '../assets/3d/desk4.glb'

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
        name="screen1"
        castShadow
        receiveShadow
        geometry={nodes.screen1.geometry}
        material={materials.m_blackFlat}
        position={[-91.419, 124.834, 330.657]}
        scale={[54.879, 58.336, 58.336]}
      />
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
        ref={handleMeshRef}
        name="modelsShelf"
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape.geometry}
        material={materials.m_cushionBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_1.geometry}
        material={materials.m_rugBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_2.geometry}
        material={materials.m_woodShelfBaked}
      />{/* wood door frame */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_3.geometry}
        material={materials.m_floorBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_roomArchitectureShape_4.geometry}
        material={materials.m_wallBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape.geometry}
        material={materials.m_keycapYellowBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_1.geometry}
        material={materials.m_keycapPurpleBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_2.geometry}
        material={materials.m_keycapGreenBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_3.geometry}
        material={materials.m_keyboardBottomBaked}
      />
      <mesh
        ref={handleMeshRef}
        name="table"
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_4.geometry}
        material={materials.m_whiteSpecularBaked}
      />{/* desk */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_5.geometry}
        material={materials.m_whiteFlatBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_6.geometry}
        material={materials.m_keycapBlueBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_7.geometry}
        material={materials.m_keycapPinkBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_deskShape_8.geometry}
        material={materials.m_keycapWhiteBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape.geometry}
        material={materials.m_blackRubberBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape_1.geometry}
        material={materials.m_escherBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape_2.geometry}
        material={materials.m_blackBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape_3.geometry}
        material={materials.m_whiteSpecularBaked}
      />
      <mesh
        ref={handleMeshRef}
        name="vrShelf"
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape_4.geometry}
        material={materials.m_woodShelfBaked}
      />{/* VR shelf */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_vrShelfShape_5.geometry}
        material={materials.m_headsetStrapBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_miniPlayerShape.geometry}
        material={materials.m_miniPlayerWoodBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_miniPlayerShape_1.geometry}
        material={materials.m_blackBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_miniPlayerShape_2.geometry}
        material={materials.m_miniPlayerFaceBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_miniPlayerShape_3.geometry}
        material={materials.m_blackRubberBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape.geometry}
        material={materials.m_artPaintingLandscapeBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_1.geometry}
        material={materials.m_artPaintingFruitBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_2.geometry}
        material={materials.m_whitePaperBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_3.geometry}
        material={materials.m_inkBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_4.geometry}
        material={materials.m_paintbrushHairDarkBrownBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_5.geometry}
        material={materials.m_blackBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_6.geometry}
        material={materials.m_corkSurfaceBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_7.geometry}
        material={materials.m_inkRibbonBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_8.geometry}
        material={materials.m_ceramicCupBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_9.geometry}
        material={materials.m_artPaintingDoorBaked}
      />
      <mesh
        ref={handleMeshRef}
        name="businessCard"
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_10.geometry}
        material={materials.m_artBusinessCardBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_11.geometry}
        material={materials.m_glassBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_12.geometry}
        material={materials.m_inkWaxBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_13.geometry}
        material={materials.m_paintbrushHairBrownBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_14.geometry}
        material={materials.m_artPaintingBirdsBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_15.geometry}
        material={materials.m_whiteFrameBaked}
      />
      <mesh
        ref={handleMeshRef}
        name="artWall"
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_16.geometry}
        material={materials.m_artTidalBasinBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_17.geometry}
        material={materials.m_artDrawingFishBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_18.geometry}
        material={materials.m_paintbrushMetalSilverBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_19.geometry}
        material={materials.m_artDrawingDavidBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_20.geometry}
        material={materials.m_keycapYellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_21.geometry}
        material={materials.m_woodShelfBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_22.geometry}
        material={materials.m_paintbrushHandleBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_23.geometry}
        material={materials.m_paintbrushMetalGoldBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_24.geometry}
        material={materials.m_artDrawingHandBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_25.geometry}
        material={materials.m_paintbrushHandleBrownBaked}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.f_artWallShape_26.geometry}
        material={materials.m_paintingFrameBaked}
      />
        </group>
    </a.group>
  )
}

export default Room;
