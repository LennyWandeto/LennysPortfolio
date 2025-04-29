import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoomm'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Socrates from '../components/Socrates'
import Torus from '../components/Torus'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import { useIsMobile } from '../hooks/useIsMobile'

const Hero = () => {
    const isMobile = useIsMobile();
    return (
        <section className={`${isMobile ? 'pt-24' : ''} min-h-screen w-full flex flex-col relative`}>

            <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hello, I'm Lenny <span className="waving-hand">👋🏾</span></p>
                <p className='hero_tag text-gray_gradient'>Exploring creativity to its finest</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}

                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={isMobile ? [0, 0, 40] : [0, 0, 30]} />
                        <HeroCamera>
                            <HackerRoom
                                scale={isMobile ? 8.5 : 7}   // smaller on mobile
                                position={[0, 0, 0]}
                            />
                        </HeroCamera>

                        <group>
                            <Suspense fallback={<Socrates url='/models/bust-lo-draco.glb'
                                position={isMobile ? [-7.7, 0, -1] : [-14, -9.5, 2.9]}
                                rotation={[-0.1, -0.9, 0.06]}
                                scale={isMobile ? 1.6 : 1} />}>

                                <Socrates
                                    url='/models/bust-hi.glb'
                                    position={isMobile ? [-7.7, 0, -1] : [-14, -9.5, 2.9]}
                                    rotation={[-0.1, -0.9, 0.06]}
                                    scale={isMobile ? 1.5 : 1}
                                />
                            </Suspense>
                        </group>

                        <group>
                            <Torus
                                scale={isMobile ? 0.9 : 1.4}
                                position={isMobile ? [3.3, -4.4, 22] : [12.9, 1.3, 5.1]}
                            />
                        </group>

                        <ambientLight intensity={3} />
                        <directionalLight position={[20, 50, 10]} intensity={4} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
                </a>
            </div>
        </section>
    )
}

export default Hero