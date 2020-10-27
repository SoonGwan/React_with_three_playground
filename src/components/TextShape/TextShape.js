import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { Text, OrbitControls } from '@react-three/drei';

const textProps = {
  fontSize: 3.9,
};

const Title = ({ layers = undefined, ...props }) => {
  const group = useRef();

  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  return (
    <>
      <group {...props} ref={group}>
        <Text
          depthTest={false}
          material-toneMapped={false}
          {...textProps}
          layers={layers}
        >
          Text
        </Text>
      </group>
    </>
  );
};

const TitleShape = ({ layers }) => {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(12);

    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => {
        return (
          <Title name={'titleCopy-' + i} position={vertex} layers={layers} />
        );
      })}
    </group>
  );
};

const TitleShapeScene = () => {
  return (
    <Canvas concurrent shadowMap camera={{ position: [-10, 4, 20], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <group name="sceneContainer">
        <TitleShape />
      </group>
      <ambientLight intensity={0.4} />
      <OrbitControls />
    </Canvas>
  );
};

export default TitleShapeScene;
