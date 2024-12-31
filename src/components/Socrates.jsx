import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const Socrates = ({ url, ...props }) => {
  const socratesRef = useRef();
  const { scene } = useGLTF(url);

  // Hover effect to spin the object
  const handleHover = () => {
    if (socratesRef.current) {
      gsap.to(socratesRef.current.rotation, {
        y: socratesRef.current.rotation.y + Math.PI * 2, // Spin 360 degrees
        duration: 1,
        ease: 'power2.out',
      });
    }
  };

  // Floating animation
  React.useEffect(() => {
    if (socratesRef.current) {
      gsap.to(socratesRef.current.position, {
        y: socratesRef.current.position.y + 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut', // Smooth oscillation
      });
    }
  }, []);

  return (
    <mesh
      {...props}
      ref={socratesRef}
      onPointerOver={handleHover}
      onPointerOut={() => handleHover(false)} // Optional
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Socrates;
