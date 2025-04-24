
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

function Coin() {
  const coinRef = useRef<THREE.Group>(null);

  // Обертання анімації
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={coinRef}>
      {/* Тіло монети */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 64]} />
        <meshStandardMaterial metalness={1} roughness={0.2} color="rgba(0, 255, 255, 0.7)" />
      </mesh>

      {/* Борт монети */}
      <mesh position={[0, 0.055, 0]} rotation={[-Math.PI / 1, 0, 0]}>
        <torusGeometry args={[1.5, 0.15, 18, 10]} />
        <meshStandardMaterial metalness={1} roughness={0.2} color="rgba(0, 255, 255, 0.7)" />
      </mesh>

      {/* Гравірування */}
      <Text
        position={[0, 0.05, -0.055]}
        rotation={[-Math.PI / 1, 0, 3.14]}
        fontSize={0.6}
        strokeOpacity={0.7}
        strokeWidth={0.5}
        depthOffset={-1}
      >
        KOPI
        <meshStandardMaterial metalness={1} roughness={0.2} color="rgba(0, 255, 255, 0.7)" />
      </Text>
      <Text
        position={[0, 0.05, 0.055]}
        rotation={[-Math.PI / 1, 3.14, 3.14]}
        fontSize={0.6}
        strokeOpacity={0.7}
        strokeWidth={0.5}
        depthOffset={-1}
      >
        KOPI
      </Text>
    </group>
  );
}

export default function CoinScene() {
    return (
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ height: '100px', width: '100px' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.1} />
          <pointLight position={[2, 2, 2]} intensity={1.5} color='rgb(160, 32, 240)'/>
          <pointLight position={[-2, -2, -2]} intensity={1.5} color='rgb(160, 32, 240)'/>
          <Stage environment="city" intensity={0.1} shadows={false} castShadow>
            <Coin />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    );
  }

