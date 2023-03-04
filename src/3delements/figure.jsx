import React, { useRef } from 'react'
import './figure.scss'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const figure = () => {

    const Scene = (props) => {


        const { nodes, materials } = useGLTF('/scene.gltf')

        const ref = useRef()
        useFrame((state) => {
            ref.current.rotation.z = -0.003 + THREE.MathUtils.lerp(ref.current.rotation.z, (state.mouse.x * Math.PI) / 25, 0.01)
        
          });

        const material = new THREE.MeshStandardMaterial;

        return (
            <group {...props} dispose={null}>
                <group ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, -0.5]} scale={3}>
                    <mesh geometry={nodes.cobra_0.geometry} material={material}   />
                    <mesh geometry={nodes.cobra_0_1.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_2.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_3.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_4.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_5.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_6.geometry} material={material} />
                    <mesh geometry={nodes.cobra_0_7.geometry} material={material} />
                </group>
            </group>
        )
    }

    return (
        <div id="canvas-container">
            <Canvas camera={{ position: [0, 0, 0] }} >
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[0, 0, 1]} intensity={0.6} />
                <Scene />
            </Canvas>
        </div>
    )
}

useGLTF.preload('/scene.gltf')
export default figure
