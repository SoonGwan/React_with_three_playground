import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { useCannon, Provider } from './Cannon';

const Plane = ({ position }) => {
  const ref = useCannon({ mass: 0 }, (body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="geometry" color="#171717" />
    </mesh>
  );
};

const PlanBox = ({ position }) => {
  const ref = useCannon({ mess: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="meterial" roughness={0.5} color="#575757" />
    </mesh>
  );
};
const Drop = () => {
  const [showPlane, set] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      set(false);
    }, 5000);
  }, []);

  return (
    <Canvas
      shadowMap
      camera={{ position: [0, 0, 15] }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <pointLight position={[-10, -10, 30]} intensity={0.25} />
      <Provider>
        <Plane position={[0, 0, -10]} />
        {showPlane && <Plane position={[0, 0, 0]} />}
        <PlanBox position={[1, 0, 1]} />
        <PlanBox position={[2, 1, 5]} />
        <PlanBox position={[0, 0, 6]} />
        <PlanBox position={[-1, 1, 8]} />
        <PlanBox position={[-2, 2, 13]} />
        <PlanBox position={[2, -1, 13]} />
        {!showPlane && <Plane position={[0.5, 1.0, 20]} />}
      </Provider>
    </Canvas>
  );
};

export default Drop;
