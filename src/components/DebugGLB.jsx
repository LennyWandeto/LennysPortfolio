import { useGLTF } from '@react-three/drei';
import React from 'react'

const DebugGLB = () => {
    const { scene, animations } = useGLTF('src/public/models/animations/nidle2.glb');
  console.log('Scene:', scene);
  console.log('Animations:', animations);
  return null;
}

export default DebugGLB