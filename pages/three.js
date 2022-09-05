import React from 'react';
import { Canvas } from "@react-three/fiber";
import 'react-toastify/dist/ReactToastify.css';
import Floor from '../public/comp/floor';
import Box from '../public/comp/box';
import LightBulb from '../public/comp/lightbulb';
import Controls from '../public/comp/orbit';
export default function Three() {

    //npm install three @react-three/fiber

    return (
        <body style={{ width: '100vw', height: '100vh' }}>
            <Canvas
                shadows={true}
                camera={{
                    position: [-6, 7, 7],
                }}
            >
                <Controls />
                <ambientLight color={"white"} intensity={0.2} />
                <LightBulb position={[9, 8, -15]} />
                <Box color='red' rotate={[1, 2, 3]} />
                <Box newArg={[0.1, 6, 5]} position={[4, 1, 4]} />
                <Box newArg={[0.1, 6, 5]} position={[1, 1, 4]} />
                <Box newArg={[3, 5, 0.1]} position={[2.5, 0.5, 1.6]} />
                <Box newArg={[3, 5, 0.1]} position={[2.5, 0.5, 6.4]} />
                <Box newArg={[3, 0.1, 3.5]} position={[2.5, 4, 7.4]} />
                <Box newArg={[3, 0.1, 3.5]} position={[2.5, 4, 1.4]} />
                <Floor position={[0, -10, 0]} style={{ width: '100%', height: '100%' }} />
            </Canvas>
        </body>
    );
}
