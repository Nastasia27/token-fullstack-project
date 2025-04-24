
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import type { JSX } from 'react';

interface CoffeeCupProps {
  step?: number;
}

export default function CoffeeCup({ step, ...props }: CoffeeCupProps) {
    const groupRef = useRef<THREE.Group>(null);
    const cupRef = useRef<THREE.Mesh>(null);
    const coffeeRef = useRef<THREE.Mesh>(null);
    const loopAnimationRef = useRef<gsap.core.Tween | null>(null);
    const { nodes, materials } = useGLTF('/modules/scene.gltf')
    const [isGroundsGenerated, setIsGroundsGenerated] = useState<JSX.Element[]>([]);
    const texterures = useLoader(THREE.TextureLoader, '/modules/textures/coffee_diffuse.png');
    
    useEffect(() => {
        if (!groupRef.current)  return;
        
        groupRef.current.position.set(0, 0, -3);
        groupRef.current.rotation.y = Math.PI / 4;

        gsap.to(groupRef.current.position, {
            z: 0,
            duration: 3,
            ease: 'power2.inOut',
        });

        gsap.to(groupRef.current.rotation, {

            x: 1.5,
            duration: 3,
            ease: 'power2.inOut',
        });

        gsap.to(groupRef.current.rotation, {
            y:0,
            duration: 3,
            ease: 'power2.inOut',
        });

        const loop = gsap.to(groupRef.current.rotation, {
            y: 0,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
        });

        loopAnimationRef.current = loop;
        return () => {
            if (loopAnimationRef.current) {
                loopAnimationRef.current.kill();
                loopAnimationRef.current = null;
            }
        }
        
    }, []);

    const generateCoffeGrouns = () => {
        const points = [];
        const radius = 0.5; 
        const slope = 0.3; 
        const numsDots = 1000;
        const centerX = 0.3;
        const centerZ = 0;  
        const minY = -1.4; 
        const maxY = -0.7; 

        for (let i = 0; i < numsDots; i++) {
            const y = minY + Math.random() * (maxY - minY);
            const angle = Math.random() * 2 * Math.PI;
            const radiusAtY = radius + (y - minY) * slope;
            const x = radiusAtY * Math.cos(angle);
            const z = radiusAtY * Math.sin(angle);

            points.push(
                <mesh 
                    key={`sloped-${i}`}
                    position={[centerX + x, y, centerZ + z]}
                    rotation={[-Math.PI /2, 0, 0]}
                    scale={Math.random() * 0.1 + 0.05}
                >
                    <sphereGeometry args={[0.2, 8, 8]} />
                    <meshStandardMaterial
                        color='#3e2c1e'
                        roughness={0.2}
                        metalness={0.1}
                    />
                </mesh>
            );
        }

        for (let k = 0; k < numsDots; k++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * radius;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;

            points.push(
                <mesh 
                    key={k}
                    position={[0.3+ x, -1, y]}
                    rotation={[-Math.PI /2, 0, 0]}
                    scale={Math.random() * 0.1 + 0.05}
                >
                    <circleGeometry args={[0.2, 8, 8]} />
                    <meshStandardMaterial
                        color='#3e2c1e'
                        roughness={0.2}
                        metalness={0.1}
                    />
                </mesh>
            );
        }
        setIsGroundsGenerated(points);
    }

    const handleDrinkCoffee = () => {
        console.log('Drink coffee function called');
        if (!coffeeRef.current || !groupRef.current || !cupRef.current) return;

        loopAnimationRef.current?.kill();
        const timeLine = gsap.timeline();
        timeLine.to(groupRef.current.rotation, {
            x:0,
            y:0,
            z:0,
            duration: 1.5,
            ease: 'power2.inOut',
        });

        timeLine.to(cupRef.current.position, {
            y: 0.7,
            duration: 1.5,
            ease: 'power2.inOut',
        })

        timeLine.to(coffeeRef.current.position, {
            y: 1,
            duration: 1.5,
            ease: 'power2.inOut',
        }, '<')

        timeLine.to(cupRef.current.rotation, {
            x: 0.8,
            duration: 1.5,
            ease: 'power2.inOut',
            
        }, '<')

        timeLine.to(coffeeRef.current.rotation, {
            x: -0.8,
            duration: 1,
            ease: 'power2.inOut',
        }, '<')

        timeLine.to(coffeeRef.current.scale, {
            y: 0,
            x: 0,
            z: 0,
            duration: 3,
            ease: 'power1.inOut',
        }, )

        timeLine.to(coffeeRef.current.position, {
            y: 0.4,
            duration: 3,
            ease: 'power2.inOut',
        }, '<')

        timeLine.to(cupRef.current.rotation, {
            x: 0,
            duration: 0.6,
            ease: 'power2.inOut',
        })

        timeLine.to(cupRef.current.position, {
            y: 0,
            duration: 0.6,
            ease: 'power2.inOut',
        }, '<')

        timeLine.call(() => {
            generateCoffeGrouns();
            if (groupRef.current) {
                loopAnimationRef.current = gsap.to(groupRef.current.rotation, {
                    y: 0,
                    duration: 10,
                    repeat: -1,
                    yoyo: true,
                    ease: 'linear',
                });
            }
        })

        
  }

  const handleShowGrounds = () => {
    console.log('handleShowGrounds coffee function called');
    if (!groupRef.current) return;
    console.log('handleShowGrounds first');
    gsap.to(groupRef.current.rotation, {
        y:-12.5,
        duration: 3,
        ease: 'power2.inOut',
    });
    console.log('handleShowGrounds second');
    gsap.to(groupRef.current.rotation, {
        x:1.5,
        duration: 3,
        ease: 'power2.inOut',
    });
  }

  useEffect(() => {
    if (step === 1) {
       handleDrinkCoffee();
    } else if (step === 2) {
        handleShowGrounds();
    }
       
  }, [step]);

  return (
    <>
        <group ref={groupRef} {...props} dispose={null}>
            <mesh 
                ref={coffeeRef}
                castShadow 
                receiveShadow 
                geometry={(nodes['coffee_0'] as THREE.Mesh).geometry} 
                material={materials['coffee']} 
                position={[0.3, 0.4, 0]}
                rotation={[-Math.PI /2, 0, 0]}
                scale={1}
                >
                <meshStandardMaterial 
                    color='#6f4e37'
                    roughness={1}
                    metalness={0.3}
                    map={texterures}
                />
            </mesh>
            <mesh 
                ref={cupRef}
                castShadow 
                receiveShadow 
                geometry={(nodes['coffee-mug_0'] as THREE.Mesh).geometry} 
                material={materials['coffee-mug']} 
                position={[2, 0, 0]}
                scale={0.5}
            >
                <meshStandardMaterial 
                    roughness={0.1}
                    metalness={0.2}
                    envMapIntensity={2}
                />
            </mesh>
            <mesh 
                castShadow 
                receiveShadow 
                geometry={(nodes['plate_0'] as THREE.Mesh).geometry} 
                material={materials['plate']} 
                position={[0.35, -1.7, 0]}
                rotation={[-Math.PI /2, 0, 0]}
                scale={[1.7, 1.7, 0.8]}
            >
                <meshStandardMaterial 
                    roughness={0.1}
                    metalness={0.2}
                    envMapIntensity={2}
                />
            </mesh>
            <mesh 
                castShadow 
                receiveShadow 
                geometry={(nodes['Plane_0'] as THREE.Mesh).geometry} 
                material={materials['spoon']} 
                position={[-3.1, -1.2, 0]}
                rotation={[-Math.PI /2.02, 0, 0]}
                scale={2}
            >
                <meshStandardMaterial 
                    color='silver'
                    roughness={0.2}
                    metalness={2}
                />
            </mesh>
            {isGroundsGenerated}
        </group>
    </>
  )
}







