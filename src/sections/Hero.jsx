import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/hackerroom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Socrates from '../components/Socrates'
import Torus from '../components/Torus'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -20,
            max: 20,
        },
        positionY: {
            value: 2.5,
            min: -20,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 0,
            min: -Math.PI,
            max: Math.PI,
        },
        rotationY: {
            value: 0,
            min: -Math.PI,
            max: Math.PI,
        },
        rotationZ: {
            value: 0,
            min: -Math.PI,
            max: Math.PI,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }

    })
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hello, I'm Lenny <span className="waving-hand">👋🏾</span></p>
                <p className='hero_tag text-gray_gradient'>Exploring creativity to it's finest</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            scale={7}
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                        // position={[controls.positionX, controls.positionY, controls.positionZ]}
                        // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                        // scale={[controls.scale, controls.scale, controls.scale]}
                        />
                        <group>
                            <Suspense fallback={<Socrates url='/models/bust-lo-draco.glb' />}>
                                <Socrates
                                    url='/models/bust-hi.glb'
                                    position={[-14.,-9.5, 2.9]}
                                    rotation={[-0.1, -0.9, 0.06]}
                                    scale={1}
                                />
                            </Suspense>
                        </group>
                        <group>
                            <Torus scale={1.4}
                            position={[12.9, 1.3, 5.1]}
                            />
                        </group>
                        <ambientLight intensity={3} />
                        <directionalLight position={[20, 50, 10]} intensity={4} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero