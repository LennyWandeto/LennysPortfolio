import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { easing } from 'maath'; // Assuming you are using maath for easing

const HeroCamera = ({ children }) => {
  const groupRef = useRef();
  const [clicked, setClicked] = useState(false); // State to track click

  // Handle click event to toggle rotation
  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Pointer-based rotation
      const targetRotation = new THREE.Euler(
        -state.pointer.y / 10, // Vertical rotation
        state.pointer.x / 10,  // Horizontal rotation
        0                     // No roll
      );

      // Smoothly interpolate to the target rotation
      easing.dampE(
        groupRef.current.rotation,
        [targetRotation.x, targetRotation.y, targetRotation.z],
        0.25,
        delta
      );
    }
  });

  return (
    <group
      ref={groupRef}>
      {children}
    </group>

  );
};

export default HeroCamera;
