import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from './Box';
import Hexaindex from './Hexahedron/Hexaindex';
import './App.scss';
import Drop from './Cannon/CannonIndex';
import MaterialBoxView from './MaterialBox/MaterialBox';
import TitleShapeScene from './TextShape/TextShape';
const App = () => {
  return (
    <>
      <Box />
      <Hexaindex />
      <MaterialBoxView />
      <TitleShapeScene />
      {/* <Drop /> */}
    </>
  );
};

export default App;
