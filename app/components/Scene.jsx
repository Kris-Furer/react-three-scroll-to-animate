'use client';

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import {useProgress, ScrollControls } from "@react-three/drei";
import { Suspense } from 'react';

export default function scene() {
    return (
        <div className="canvas-wrap">
        <Canvas  camera={{ position: [300, 0, 200] }}>
            <directionalLight position={[7, 20, 5]} intensity={3} color="red" />
            <ambientLight intensity={.7}  />
            
            <Suspense fallback={null}>
                <ScrollControls damping={0.2} pages={2}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
        </div>
    )
}
