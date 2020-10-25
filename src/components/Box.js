import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const BoxMesh = ({ position }) => {
  // 이 참조를 통해 메쉬에 직접 접근할 수 있음
  const mesh = useRef();

  //   hovered and active state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  //   모든 프레임에 메시 회전, 오버헤드 없이 반응 외부
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...position}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Box = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <BoxMesh position={[12.2, 20, 10]} />
      <BoxMesh position={[-12.2, 20, 10]} />
    </Canvas>
  );
};

export default Box;
