// import { Sparkles } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from 'three';
import fragmentShader from './Shaders/fragmentShader';
import vertexShader from './Shaders/vertexShader';
import { useFrame } from "@react-three/fiber";

export default function Galaxy(){
    // const galaxy = useRef()
    const points = useRef()



    const parameters = {}

    parameters.count = 25000
    parameters.size = 4
    parameters.radius = 30
    parameters.branches = 20
    parameters.spin = 5
    parameters.randomness = 0.092
    parameters.randomnessPower = 3
    parameters.insideColor = '#5d9b84'
    parameters.outsideColor = '#666666'

    const uniforms = useMemo(()=>({
        uTime: {
            value: 0.0
        }
        // ,
        // uRadius: {
        //     value: radius
        // }
        ,
        uSize: {
            value: 120 * (Math.min(window.devicePixelRatio, 2))
        },
    }
    ), [])

    useFrame((state)=>{
        const { clock } = state;
        points.current.material.uniforms.uTime.value = clock.elapsedTime 

        // console.log(points)
    })


const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    const scale = new Float32Array(parameters.count * 1)
    const randomness = new Float32Array(parameters.count * 3)

    const insideColor = new THREE.Color(parameters.insideColor)
    const outsideColor = new THREE.Color(parameters.outsideColor)

    for(let i = 0; i < parameters.count; i++)
    {
        const i3 = i * 3

        // Position
        const radius = Math.random() * parameters.radius

        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

        positions[i3    ] = Math.cos(branchAngle) * radius 
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle) * radius

        // Randomness 
        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius

        randomness[i3 + 0 ]= randomX
        randomness[i3 + 1] = randomY
        randomness[i3 + 2] = randomZ

        // Color
        const mixedColor = insideColor.clone()
        mixedColor.lerp(outsideColor, radius / parameters.radius)

        colors[i3    ] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b

        scale[i] = Math.random()

    }

    return(<>
    <points ref={points}>
       <bufferGeometry attach="geometry">
       <bufferAttribute
        attach="attributes-position"
        count={parameters.count}
        array={positions}
        itemSize={3}
       />
       <bufferAttribute
        attach="attributes-color"
        count={parameters.count}
        array={colors}
        itemSize={3}
        normalized={false}
       />
       <bufferAttribute
        attach="attributes-aScale"
        count={parameters.count}
        array={colors}
        itemSize={1}
       />
       <bufferAttribute
        attach="attributes-aRandomness"
        count={parameters.count}
        array={randomness}
        itemSize={1}
       />
       </bufferGeometry>
       <shaderMaterial
       blending={THREE.AdditiveBlending}
       depthWrite={false}
       vertexColors={true}
       transparent={true}
       fragmentShader={fragmentShader}
       vertexShader={vertexShader}
       uniforms={uniforms}
       />
    </points>
    </>)
}