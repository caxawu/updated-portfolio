import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);
    
    useEffect (() => {
        actions[ 'Take 001' ].play();
    }, []);

    useFrame (({ clock, camera }) => {
        // Update the Y pos to simulate motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.5 + 2

        // Check if bird reached certain endpoint relative to camera
        if (birdRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate 180 degrees on y-axis
            birdRef.current.rotation.y = Math.PI;
            // camera.setViewOffset( 1980, 1080, 500, 0, 1980, 1080 );
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset rotation
            birdRef.current.rotation.y = 0;
            // camera.setViewOffset( 1980, 1080,  0, 0, 1980, 1080 );
        }
        
        if (birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.11;
            birdRef.current.position.z -= 0.11;
        } else {
            birdRef.current.position.x -= 0.1;
            birdRef.current.position.z += 0.1;
        }

    })

    return (
        <mesh 
        position={[-5, 2, 1]} 
        scale={[0.003, 0.003, 0.003]} 
        ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
      )
    }

export default Bird

import React from 'react'