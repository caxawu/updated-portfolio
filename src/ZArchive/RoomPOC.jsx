import { useRef, useState, useEffect } from 'react'
import { useCursor, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

import roomScene from '../assets/3d/room.glb'

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
            setFocusState('web-mobile');

          } else if ( INTERSECTED.name == 'screen2' ) {
            setFocusState('misc');

          } else if ( INTERSECTED.name == 'shelf' ) {
            setFocusState('shelf');

          } else if ( INTERSECTED.name == 'spaces' ) {
            setFocusState('spaces');

          } else if ( INTERSECTED.name == 'anivision' ) {
            setFocusState('anivision');

          } else if ( INTERSECTED.name == 'drawings' ) {
            setFocusState('drawings');

          } else if ( INTERSECTED.name == 'paintings' ) {
            setFocusState('paintings');

          } else if ( INTERSECTED.name == 'podium' ) {
            setFocusState('models');

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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card1.geometry}
          material={materials.standardSurface1}
          position={[74.353, -20.109, -103.638]}
          rotation={[0, 0, 1.128]}
          scale={[16.37, 16.37, 9.622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.card2.geometry}
          material={materials.standardSurface1}
          position={[74.353, -20.109, -102.657]}
          rotation={[0, 0, 0.627]}
          scale={[16.37, 16.37, 9.622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.circleGround.geometry}
          material={materials.floor}
          scale={440.172}
        />
        <mesh
          ref={handleMeshRef}
          name="spaces"
          castShadow
          receiveShadow
          geometry={nodes.escher1.geometry}
          material={materials.escher}
          position={[204.615, 115.273, -324.928]}
          rotation={[Math.PI, 0, -2.432]}
          scale={1.637}
        />
        <group position={[5.114, -7.986, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.key.geometry}
            material={materials.standardSurface1}
            position={[-84.6, 42.931, -107.969]}
            scale={[6.356, 6.356, 3.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.key1.geometry}
            material={materials.standardSurface1}
            position={[-91.155, 42.931, -107.969]}
            scale={[6.356, 6.356, 3.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.key2.geometry}
            material={materials.standardSurface1}
            position={[-97.922, 42.931, -107.969]}
            scale={[6.356, 6.356, 3.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.key3.geometry}
            material={materials.standardSurface1}
            position={[-104.457, 42.931, -107.969]}
            scale={[6.356, 6.356, 3.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.key4.geometry}
            material={materials.standardSurface1}
            position={[-111.388, 42.931, -107.969]}
            scale={[6.356, 6.356, 3.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.miniScreen.geometry}
            material={materials.standardSurface1}
            position={[-97.857, 39.169, -116.865]}
            scale={[15.003, 9.595, 10.085]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.typeMesh4.geometry}
            material={materials.black}
            position={[-91.018, 49.565, -133.683]}
            rotation={[0, 0, Math.PI]}
            scale={0.23}
          />
        </group>
        <group position={[1.631, -1.585, 0]}>
          <mesh
            ref={handleMeshRef}
            name="paintings"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012.geometry}
            material={materials.paintingsBirds}
          />
          <mesh
            ref={handleMeshRef}
            name="paintings"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_1.geometry}
            material={materials.lambert3}
          />
          <mesh
            ref={handleMeshRef}
            name="paintings"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_2.geometry}
            material={materials.paintingsLandscape}
          />
          <mesh
            ref={handleMeshRef}
            name="paintings"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_3.geometry}
            material={materials.paintingsDoor}
          />
          <mesh
            ref={handleMeshRef}
            name="paintings"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_4.geometry}
            material={materials.paintingsFruit}
          />
        </group>
        <group
          position={[93.667, 27.587, -160.859]}
          rotation={[Math.PI / 2, 0.974, -Math.PI / 2]}
          scale={[37.647, 40.019, 40.019]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh015.geometry}
            material={materials.keycapWhite}
          />
          <mesh
            ref={handleMeshRef}
            name="screen2"
            castShadow
            // receiveShadow
            geometry={nodes.Mesh015_1.geometry}
            material={materials.misc}
          />
        </group>
        <mesh
          ref={handleMeshRef}
          name="table"
          castShadow
          receiveShadow
          geometry={nodes.table1.geometry}
          material={materials.table}
        />
        <group
          position={[213.855, 125.497, -153.036]}
          rotation={[-0.119, -0.541, -1.799]}
          scale={25.346}>
          <mesh
            ref={handleMeshRef}
            name="anivision"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003.geometry}
            material={materials.M_TarsierBody}
          />
          <mesh
            ref={handleMeshRef}
            name="anivision"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_1.geometry}
            material={materials.M_TarsierEyes}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall4.geometry}
          material={materials.wall}
          position={[-146.493, 227.927, -92.512]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={261.344}
        />
        <mesh
          ref={handleMeshRef}
          name="ground"
          castShadow
          receiveShadow
          geometry={nodes.whiteground.geometry}
          material={materials.keycapWhite}
          position={[0, 0, 12.348]}
          scale={3503.968}
        />
        <mesh
          ref={handleMeshRef}
          name="drawings"
          castShadow
          receiveShadow
          geometry={nodes.Mesh013.geometry}
          material={materials.drawingDavid}
        />
        <mesh
          ref={handleMeshRef}
          name="drawings"
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_1.geometry}
          material={materials.drawingFish}
        />
        <mesh
          ref={handleMeshRef}
          name="drawings"
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_2.geometry}
          material={materials.drawingHand}
        />
        <mesh
          ref={handleMeshRef}
          name="drawings"
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_3.geometry}
          material={materials.drawingKing}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials.keycapWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials.keycapPink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_2.geometry}
          material={materials.keycapYellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_3.geometry}
          material={materials.keycapGreen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_4.geometry}
          material={materials.keycapBlue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_5.geometry}
          material={materials.keycapPurple}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_6.geometry}
          material={materials.keyboardBottom}
        />
        <mesh
          ref={handleMeshRef}
          name="podium"
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials.podium3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials.woodPlank}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_2.geometry}
          material={materials.oar1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_3.geometry}
          material={materials.rust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_4.geometry}
          material={materials.lantern1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_5.geometry}
          material={materials.lanternGlass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_6.geometry}
          material={materials.lanternHandle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_7.geometry}
          material={materials.Default_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_8.geometry}
          material={materials.eggshell}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_9.geometry}
          material={materials.insideEgg}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_10.geometry}
          material={materials.eggHolderBot}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_11.geometry}
          material={materials.eggHolderBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_12.geometry}
          material={materials.dioStem}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_13.geometry}
          material={materials.bigLeaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_14.geometry}
          material={materials.twig}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_15.geometry}
          material={materials.twigMatSmall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_16.geometry}
          material={materials.lilyPad4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_17.geometry}
          material={materials.rocks1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_18.geometry}
          material={materials.grass1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_19.geometry}
          material={materials.tallGrass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_20.geometry}
          material={materials.leafSmall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_21.geometry}
          material={materials.grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_22.geometry}
          material={materials.butterflyBlue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_23.geometry}
          material={materials.butterflyYellow1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_24.geometry}
          material={materials.fireflies1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_25.geometry}
          material={materials.dioWater}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_26.geometry}
          material={materials.water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_27.geometry}
          material={materials.pot}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_28.geometry}
          material={materials.flowerCenter}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_29.geometry}
          material={materials.flower1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_30.geometry}
          material={materials.flower}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_31.geometry}
          material={materials.broadLeaf5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_32.geometry}
          material={materials.broadLeaf4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_33.geometry}
          material={materials.leaf4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_34.geometry}
          material={materials.branch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014.geometry}
          material={materials.keycapWhite}
        />
        <mesh
          ref={handleMeshRef}
          name="screen1"
          castShadow
          // receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials.webMobile}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020.geometry}
          material={materials.descSpaces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_1.geometry}
          material={materials.descAnivision}
        />
        <mesh
          ref={handleMeshRef}
          name="shelf"
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_2.geometry}
          material={materials.shelf1}
        />
        </group>
    </a.group>
  )
}

export default Room;
