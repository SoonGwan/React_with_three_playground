import * as CANNON from 'cannon';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

// Cannon-world context provider
const context = React.createContext();

export const Provider = ({ children }) => {
  // set up physics
  const [world] = useState(() => new CANNON.World());
  console.log(world);

  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;
    world.gravity.set(0, 0, -25);
  }, [world]);

  // Run world stepper every frame
  useFrame(() => world.step(1 / 60));
  // Distribute world via context
  return <context.Provider value={world} children={children} />;
};

//Custome Hook to maintain a world physics body 세계 물리학 기구를 유지하다. ?
export const useCannon = ({ ...props }, fn, deps = []) => {
  const ref = useRef();
  //Get cannon world obj
  const world = useContext(context);
  // Instanciate a physics body
  const [body] = useState(() => new CANNON.Body(props));
  console.log(body);

  useEffect(() => {
    fn(body);
    world.addBody(body);
    return () => world.removeBody(body);
  }, [body, fn, world]);

  useFrame(() => {
    if (ref.current) {
      //Transprot cannon physics into the referenced threejs obj
      ref.current.position.copy(body.position);
      ref.current.quaternion.copy(body.quaternion);
    }
  });

  return ref;
};
