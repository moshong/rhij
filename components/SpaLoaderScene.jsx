'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Soft, muted palette so the motion reads as ambient texture, not decoration.
const ORB_COLORS = ['#FF9A8B', '#E7879B', '#FFC3A0', '#F5E1DA'];

const Orbs = ({ count = 24 }) => {
  const groupRef = useRef(null);

  const orbs = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        basePosition: [
          (Math.random() - 0.5) * 11,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4,
        ],
        scale: 0.07 + Math.random() * 0.18,
        speed: 0.12 + Math.random() * 0.22,
        offset: Math.random() * Math.PI * 2,
        color: ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)],
      })),
    [count]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.children.forEach((mesh, i) => {
      const orb = orbs[i];
      const [x, y] = orb.basePosition;
      mesh.position.y = y + Math.sin(t * orb.speed + orb.offset) * 0.7;
      mesh.position.x = x + Math.cos(t * orb.speed * 0.6 + orb.offset) * 0.35;
    });

    groupRef.current.rotation.y = t * 0.015;
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.basePosition} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.32} />
        </mesh>
      ))}
    </group>
  );
};

const SpaLoaderScene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 45 }}
    gl={{ alpha: true, antialias: true }}
    dpr={[1, 1.5]}
    style={{ position: 'absolute', inset: 0 }}
  >
    <Orbs />
  </Canvas>
);

export default SpaLoaderScene;
