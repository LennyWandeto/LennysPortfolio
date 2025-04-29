import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Developer from './Developer'; // or wherever your model lives

const RotatingDeveloper = ({ animationName, url, positionY, scale }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // slow rotation
    }
  });

  return (
    <group ref={modelRef}>
      <Developer
        position-y={positionY}
        scale={scale}
        animationName={animationName}
        url={url}
      />
    </group>
  );
};

export default RotatingDeveloper;
