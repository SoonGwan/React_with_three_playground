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

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    var cube = new THREE.Mesh(geometry, material);
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
