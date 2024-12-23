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
        -state.pointer.y / 3, // Vertical rotation
        state.pointer.x / 3,  // Horizontal rotation
        0                     // No roll
      );

      // Smoothly interpolate to the target rotation
      easing.dampE(
        groupRef.current.rotation,
        [targetRotation.x, targetRotation.y, targetRotation.z],
        0.25,
        delta
      );

      // If clicked, rotate by 90 degrees on x-axis
      if (clicked) {
        const rotationX = THREE.MathUtils.degToRad(90); // 90 degrees in radians
        easing.damp(
          groupRef.current.rotation,
          { x: rotationX, y: targetRotation.y, z: targetRotation.z },
          0.25,
          delta
        );
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation(); // Prevent event bubbling if nested children also have events
        handleClick();
      }}
    >
      {children}
    </group>

  );
};

export default HeroCamera;
