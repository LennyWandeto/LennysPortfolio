
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { texture } from 'three/tsl'

const Torus = (props) => {
    const mesh = useRef()
    const sphere = useRef()
    useFrame((state, delta) => (mesh.current.rotation.x = mesh.current.rotation.y += delta))
    return (
        <mesh
            ref={mesh}
            {...props}
            onPointerMove={(e) => sphere.current.position.copy(mesh.current.worldToLocal(e.point))}
            onPointerOver={() => (sphere.current.visible = true)}
            onPointerOut={() => (sphere.current.visible = false)}
            >
            <torusKnotGeometry args={[1, 0.4, 200, 50]} />
            <meshNormalMaterial />
            <mesh ref={sphere} visible={false}>
                <sphereGeometry args={[0.2]} />
                <meshBasicMaterial color="pink" toneMapped={texture} />
            </mesh>
        </mesh>
    )
}

export default Torus