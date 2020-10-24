import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PalMunche = () => {
  let sceneRef = useRef<any>();

  const Render = () => {
    //필요한 고정 변수값 정의
    const RADIUS = 40;
    const FIELD_OF_VIEW = 20;
    const WIDTH = 200;
    const HEIGHT = 200;
    const ASPECT = WIDTH / HEIGHT;
    const NEAR = 0.1;
    const FAR = 10000;

    //카메라 정의
    const camera = new THREE.PerspectiveCamera(
      FIELD_OF_VIEW,
      ASPECT,
      NEAR,
      FAR
    );

    const scene = new THREE.Scene();
    // WebGLRenderer 컨스트럭터는 옵션의 obj 를 인자로 받는다.
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    // 피사체 정의
    const geometry = new THREE.OctahedronBufferGeometry(RADIUS, 0);
    const material = new THREE.MeshBasicMaterial({ color: '#ff3030' });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.z = -RADIUS * 10;

    // 랜더 시키기
    renderer.setSize(WIDTH, HEIGHT);
    console.log(renderer.domElement);
    sceneRef.current = renderer.domElement;
    renderer.render(scene, camera);
  };
  useEffect(() => {
    Render();
  });
  return (
    <div
      ref={(mount: any) => {
        sceneRef = mount;
      }}
    />
  );
};

export default PalMunche;
