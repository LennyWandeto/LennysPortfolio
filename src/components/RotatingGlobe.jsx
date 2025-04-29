import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlobeContainer = () => {
  const globeRef = useRef();
  const [globeRotation, setGlobeRotation] = useState([0, 0, 0]); // Rotation state for the globe

  useEffect(() => {
    if (globeRef.current) {
      // Enable auto-rotation
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;

      // Update rotation state on each render
      const interval = setInterval(() => {
        const rotation = globeRef.current.controls().getAzimuthalAngle();
        setGlobeRotation([0, rotation, 0]);
      }, 16); // 60 FPS

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="relative w-full sm:h-[326px] h-[326px] flex justify-center items-center">
      {/* DOM-based Globe */}
      <Globe
        ref={globeRef}
        height={326}
        width={326}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 26.614149,
            lng: -81.825768,
            color: 'white',
            size: 15000,
          },
        ]}
        labelColor={() => 'white'}
        labelText={(d) => d.text}
        labelSize={(d) => d.size}
        onLabelClick={(d) => console.log(`Clicked on ${d.text}`)}
      />

      {/* Three.js-based Ping Overlay */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      >
        <ambientLight intensity={0.5} />
        <Ping lat={26.614149} lng={-81.825768} rotation={globeRotation} />
      </Canvas>
    </div>
  );
};

const Ping = ({ lat, lng, rotation }) => {
  const pingRef = useRef();

  // Update the ping position based on globe rotation
  useFrame(() => {
    if (pingRef.current) {
      const [x, y, z] = latLngToCartesian(lat, lng, 1);
      const rotationMatrix = new THREE.Matrix4().makeRotationY(rotation[1]);
      const rotatedPosition = new THREE.Vector3(x, y, z).applyMatrix4(rotationMatrix);

      pingRef.current.position.set(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);
    }
  });

  return (
    <mesh ref={pingRef}>
      <sphereGeometry args={[0.02, 32, 32]} />
      <meshStandardMaterial
        color="red"
        emissive="orange"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};

// Helper function to convert lat/lng to Cartesian coordinates
const latLngToCartesian = (lat, lng, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
};

export default GlobeContainer;
