import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const GreenBox = () => {
  const greenBoxFunc = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    // 기하학적 형태, 뼈대를 담당하는 부분을 Geometry 라 부른다. 구슬로 치자면 “반지름이 얼마짜리 구형 물체” 라는 정보가 여기에 해당한다.
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    // 특정한 질감, 색, 반사율 등을 갖는 물체의 표면을 Material이라 부른다. 구슬로 치면 “은색이고 매끈하며 반사율이 높은 쇠 표면” 혹은 “투명하며 빛을 대부분 투과시기는 유리 표면” 등의 정보가 여기에 해당한다
    var cube = new THREE.Mesh(geometry, material);
    // 물체(Mesh) = 뼈대(Geometry) + 표면(Material)

    scene.add(cube);
    camera.position.z = 5;
    new THREE.TextureLoader().load(
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      (texture) => {
        //Update Texture
        cube.material.map = texture;
        cube.material.needsUpdate = true;
      },
      (xhr) => {
        //Download Progress
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        //Error CallBack
        console.log('An error happened' + error);
      }
    );
    const animate = () => {
      requestAnimationFrame(animate);
      console.log(cube.rotation.x);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  };

  useEffect(() => {
    greenBoxFunc();
  });

  return <div />;
};

export default GreenBox;
