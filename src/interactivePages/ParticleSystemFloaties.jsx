import { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Soft custom shader for ambient floaties
const FloatiesMaterial = shaderMaterial(
  {},
  `
    attribute float aAlpha;
    attribute float aSize;
    varying float vAlpha;

    void main() {
      vAlpha = aAlpha;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize / -mvPosition.z;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  `
    varying float vAlpha;

    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);

      // Create a hard circular mask
      if (dist > 0.5) discard;

      // Smooth fade near the edges
      float circle = smoothstep(0.5, 0.4, dist);

      vec3 yellowTint = vec3(1.1, 1.0, 0.85);
      gl_FragColor = vec4(yellowTint, circle * vAlpha);
    }
  `
);
extend({ FloatiesMaterial });

const ParticleSystemFloaties = forwardRef(({ origin = [0, 2, 0] }, ref) => {
  const pointsRef = useRef();

  // === ✨ Floaties Config ===
  const count = 200;
  const spread = 500.0;
  const baseAlpha = 0.1;
  const flickerAmplitude = 0.15;
  const flickerSpeed = 2;
  const minSize = 500;
  const maxSize = 700;
  const speed = 5;

  // Lock-in particle data
  const particlesData = useRef(null);
  if (!particlesData.current) {
    const particles = [];
    const positions = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(
        origin[0] + (Math.random() - 0.5) * spread,
        origin[1] + (Math.random() - 0.5) * spread,
        origin[2] + (Math.random() - 0.5) * spread
      );

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed
      );

      particles.push({
        position: pos,
        velocity,
        flickerOffset: Math.random() * Math.PI * 2,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.25 + Math.random() * 0.5,
        wobbleAmplitude: 0.005 + Math.random() * 0.005
      });

      positions.set([pos.x, pos.y, pos.z], i * 3);
      alphas[i] = baseAlpha;
      sizes[i] = minSize + Math.random() * (maxSize - minSize);
    }

    particlesData.current = { particles, positions, alphas, sizes };
  }

  const { particles, positions, alphas, sizes } = particlesData.current;

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    const alphaArray = pointsRef.current.geometry.attributes.aAlpha.array;

    for (let i = 0; i < count; i++) {
      const p = particles[i];

      const wobble = Math.sin(p.wobblePhase + time * p.wobbleSpeed) * p.wobbleAmplitude;

      p.position.addScaledVector(p.velocity, delta);
      posArray[i * 3 + 0] = p.position.x + wobble;
      posArray[i * 3 + 1] = p.position.y + wobble;
      posArray[i * 3 + 2] = p.position.z + wobble;

      alphaArray[i] = baseAlpha + Math.sin(time * flickerSpeed + p.flickerOffset) * flickerAmplitude;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.aAlpha.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aAlpha"
          array={alphas}
          count={count}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <floatiesMaterial
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
});

export default ParticleSystemFloaties;
