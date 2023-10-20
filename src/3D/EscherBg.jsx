import { useMemo, useRef } from "react";
import fragmentShader from './Shaders/fragmentEscher'
import vertexShader from './Shaders/vertexEscher'
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import { Center } from "@react-three/drei";
export default function EscherBg (){
    const meshRef = useRef();
    

  // Load the noise texture and update the shader uniform
//   const noiseTexture = useTexture("noise2.png");
  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    
    // start from 20 to skip first 20 seconds ( optional )
    meshRef.current.material.uniforms.iTime.value = time + 20;
  });

  // Define the shader uniforms with memoization to optimize performance
  const uniforms = useMemo(
    () => ({
      iTime: {
        type: "f",
        value: 1.0,
      },
      iResolution: {
        type: "v2",
        value: new THREE.Vector2(4, 3),
      }
    }),
    []
  )

  return (<>
    <mesh ref={meshRef}
    
    // rotation={[1, -1.28, 1.2]}
    // position={[1, 2, 3]}
    >
        
      <planeGeometry args={[20, 5]}/>
      <shaderMaterial
      opacity={.5}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
      {/* <meshStandardMaterial color="red"/> */}
    </mesh>
    {/* <mesh>
        <boxGeometry/>
        <meshStandardMaterial color="red"/>
    </mesh> */}
    </>
  )
}