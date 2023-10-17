import Galaxy from './Galaxy'
import EscherBg from './EscherBg'
import { OrbitControls } from '@react-three/drei'

export default function Experience(){

    return(
        <>
        <OrbitControls default/>
        <ambientLight intensity={0.5} />
        {/* <Galaxy scale={10}/> */}
        <EscherBg/>
        </>
    )
}