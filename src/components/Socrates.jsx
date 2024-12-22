import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Socrates = ({url, ...props}) => {
    const SocratesRef = useRef();
    const {scene} = useGLTF(url)

    useGSAP(() => {
      gsap.to(SocratesRef.current.position, {
        y: SocratesRef.current.position.y + 0.7, 
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"  // bounce back and forth indefinitely
      })
    })
  return (
    <mesh {...props} ref={SocratesRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Socrates