import { Canvas } from '@react-three/fiber'
import Experience from '../3D/Environment.jsx'
import Interface from '../3D/Interface.jsx'
import { useEffect, useRef } from 'react'

export default function Hero (){
    const canvas  = useRef()
    useEffect(() => {
        console.log(canvas)
    }, []);
    return(<>
        <Canvas
        ref={canvas}
        shadows
        camera={ {
            position: [ 3, 3, 3 ]
        } }
    >
        <Experience />
    </Canvas>
    <Interface/>
        </>)
}