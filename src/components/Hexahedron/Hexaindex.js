import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import niceColors from 'nice-color-palettes';
import HexahedronEffect from './Hexahedron';
import { Canvas, useFrame } from 'react-three-fiber';

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();
const colors = new Array(1000)
  .fill()
  .map(() => niceColors[17][Math.floor(Math.random() * 5)]);
const HexaBox = () => {
  const [hovered, set] = useState();
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(1000)
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  );

  const ref = useRef();
  const previous = useRef();
  useEffect(() => void (previous.current = hovered), [hovered]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time / 4);
    ref.current.rotation.y = Math.sin(time / 2);
    let i = 0;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(5 - x, 5 - y, 5 - z);
          tempObject.rotation.y =
            Math.sin(x / 14 + time) +
            Math.sin(y / 14 + time) +
            Math.sin(z / 14 + time);
          tempObject.rotation.z = tempObject.rotation.y * 2;
          if (hovered !== previous.current) {
            tempColor
              .set(id === hovered ? 'white' : colors[id])
              .toArray(colorArray, id * 3);
            ref.current.geometry.attributes.color.needsUpdate = true;
          }
          const scale = id === hovered ? 2 : 1;
          tempObject.scale.set(scale, scale, scale);
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={ref}
      args={[null, null, 1000]}
      onPointerMove={(e) => set(e.instanceId)}
      onPointerOut={(e) => set(undefined)}
    >
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          args={[colorArray, 3]}
        />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
};

const Hexaindex = () => {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false }}
      camera={{ position: [2, 5, 15], near: 5, far: 20 }}
      onCreated={({ gl }) => gl.setClearColor('lightpink')}
    >
      <ambientLight />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
      <HexaBox />
      <HexahedronEffect />
    </Canvas>
  );
};

export default Hexaindex;
