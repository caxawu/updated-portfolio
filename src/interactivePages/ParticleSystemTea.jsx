import { forwardRef, useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import textureURL from '../assets/images/smoke.png';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// ✨ Custom shader for soft transparent particles with alpha control
const SmokeMaterial = shaderMaterial(
    { map: null },
    // Vertex Shader
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
    // Fragment Shader
    `
    uniform sampler2D map;
    varying float vAlpha;

    void main() {
      vec4 color = texture2D(map, gl_PointCoord);
      gl_FragColor = vec4(color.rgb, color.a * vAlpha);
    }
  `
);
extend({ SmokeMaterial });

const ParticleSystemTea = forwardRef(({ origin = [0, 1, 0] }, ref) => {
    const pointsRef = useRef();
    const texture = useLoader(THREE.TextureLoader, textureURL);

    // === 🎛️ APPEARANCE & BEHAVIOR CONTROLS ===
    const count = 40;
    const spread = 7.0;               // Horizontal area where particles spawn
    const rise = 24;                   // Vertical lift speed
    const drift = 0.5;                // Horizontal drift amount
    const maxOpacity = 0.15;          // Max steam opacity
    const minSize = 200;             // Smallest particle size (in pixels)
    const maxSize = 2500;             // Largest particle size
    const speedMultiplier = 0.75;

    // === Particle Data Initialization ===
    const { particles, positions, alphas, sizes } = useMemo(() => {
        const particles = [];
        const positions = new Float32Array(count * 3);
        const alphas = new Float32Array(count);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const pos = new THREE.Vector3(
                origin[0] + (Math.random() - 0.5) * spread,
                origin[1] + Math.random() * 0.3 + 0.2, // Slight random vertical offset
                origin[2] + (Math.random() - 0.5) * spread
            );

            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * drift,           // Horizontal drift
                0.015 + Math.random() * rise * 0.4,      // Vertical speed
                (Math.random() - 0.5) * drift
            );

            const initialLife = 5 + Math.random() * 5;  // Lifetime in seconds (5 - 10)
            const life = initialLife * Math.random();   // Random start phase
            const size = minSize + Math.random() * (maxSize - minSize);

            particles.push({
                position: pos,
                velocity,
                life,
                initialLife,
                wobblePhase: Math.random() * Math.PI * 2,
                wobbleSpeed: 1.2 + Math.random(),               // How fast it wobbles
                wobbleAmplitude: 0.1 + Math.random() * 0.7    // How wide the wobble is
            });

            positions.set([pos.x, pos.y, pos.z], i * 3);
            alphas[i] = 0;
            sizes[i] = size;
        }

        return { particles, positions, alphas, sizes };
    }, [count, origin]);

    // === Update Logic Every Frame ===
    useFrame((_, delta) => {
        const posArray = pointsRef.current.geometry.attributes.position.array;
        const alphaArray = pointsRef.current.geometry.attributes.aAlpha.array;
        const sizeArray = pointsRef.current.geometry.attributes.aSize.array;

        for (let i = 0; i < count; i++) {
            const p = particles[i];
            p.position.addScaledVector(p.velocity, delta * speedMultiplier); // Move upward

            const t = 1.0 - p.life / p.initialLife; // 0 to 1 over life

            // Wobble logic (sine/cosine offsets)
            const wobbleAngle = p.wobblePhase + p.wobbleSpeed * t * Math.PI * 2;
            const offsetX = Math.sin(wobbleAngle) * p.wobbleAmplitude;
            const offsetZ = Math.cos(wobbleAngle) * p.wobbleAmplitude;

            // Update particle position
            posArray[i * 3] = p.position.x + offsetX;
            posArray[i * 3 + 1] = p.position.y;
            posArray[i * 3 + 2] = p.position.z + offsetZ;

            // Smooth fade in/out
            const fadeIn = Math.min(1, Math.pow(t, 2.5));
            const fadeOut = Math.max(0, 1 - (t - 0.5) * 2);  // Second half
            alphaArray[i] = maxOpacity * Math.min(fadeIn, fadeOut);

            // Shrink over time
            sizeArray[i] *= 0.995;

            // Countdown life
            p.life -= delta;

            // Reset dead particles
            if (p.life <= 0 || alphaArray[i] <= 0.01) {
                const initialLife = 5 + Math.random() * 2;
                p.life = initialLife * Math.random();
                p.initialLife = initialLife;

                p.position.set(
                    origin[0] + (Math.random() - 0.5) * spread,
                    origin[1] + Math.random() * 0.3 + 0.2,
                    origin[2] + (Math.random() - 0.5) * spread
                );
                p.velocity.set(
                    (Math.random() - 0.5) * drift,
                    0.015 + Math.random() * rise * 0.4,
                    (Math.random() - 0.5) * drift
                );

                p.wobblePhase = Math.random() * Math.PI * 2;
                p.wobbleSpeed = 1 + Math.random();
                p.wobbleAmplitude = 0.1 + Math.random() * 0.2;

                sizeArray[i] = minSize + Math.random() * (maxSize - minSize);
            }
        }

        // Trigger re-render
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.geometry.attributes.aAlpha.needsUpdate = true;
        pointsRef.current.geometry.attributes.aSize.needsUpdate = true;
    });

    // === Final Particle Renderer ===
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
            <smokeMaterial
                map={texture}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
});

export default ParticleSystemTea;