/* eslint-disable react/no-unknown-property */

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../model/Model';

const Scenery = () => {
    return (
        <>
            <div className='flex min-h-screen justify-center items-center min-w-screen'>
                <div className='md:w-3/12 sm:w-2-5 xs:w-1/2 h-96'>
                    <Canvas
                        camera={{ position: [2, 0, 12.25], fov: 12 }}
                        style={{ backgroundColor: '#111a21', width: '100%', height: '100%' }}
                    >
                        <ambientLight intensity={1.25} />
                        <ambientLight intensity={0.1} />
                        <directionalLight intensity={0.4} />
                        <Suspense fallback={null}>
                            <Model position={[0.025, -0.9, 0]} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
        </>
    );
};

export default Scenery;
