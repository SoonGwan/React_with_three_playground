import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from './Box';
import Hexaindex from './Hexahedron/Hexaindex';
import './App.scss';
import Drop from './Cannon/CannonIndex';
import MaterialBoxView from './MaterialBox/MaterialBox';
import TitleShapeScene from './TextShape/TextShape';
// import ScrollEffect from './scrollEffect/ScrollEffect';
// import IntroPage from './IntroPage/IntroPage';
const App = () => {
  return (
    <>
      {/* <ScrollEffect /> */}
      <Box />
      <Hexaindex />
      {/* <MaterialBoxView /> */}
      <TitleShapeScene />
      {/* <Drop /> */}
      {/* <IntroPage /> */}
    </>
  );
};

export default App;
