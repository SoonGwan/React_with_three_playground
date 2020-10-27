import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { Box, OrbitControls, Sky } from '@react-three/drei';

const MetalBox = () => {
  const [renderTarget] = useState(
    new THREE.WebGLCubeRenderTarget(1024, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
    })
  );
  const [hover, setHover] = useState(false);
  const cubeCamera = useRef();

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene);
  });
  console.log(renderTarget.texture);
  console.log(renderTarget);
  return (
    <>
      <Sky
        layer={[11]}
        sunPosition={[Math.PI, 0, Math.PI / 2]}
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      <cubeCamera
        layer={[11]}
        name="cubeCamera"
        ref={cubeCamera}
        position={[0, 0, 0]}
        args={[0.1, 100, renderTarget]}
      />
      <mesh
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <Box args={[2, 2, 2]}>
          <meshPhysicalMaterial
            color={hover ? '#6be2f5' : '#17a2b8'}
            envMap={renderTarget.texture}
            metalness={1}
            roughness={0}
            antialias={true}
          />
        </Box>
      </mesh>

      <OrbitControls />
      <ambientLight />
    </>
  );
};

const MaterialBoxView = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
      <MetalBox />
    </Canvas>
  );
};

export default MaterialBoxView;
