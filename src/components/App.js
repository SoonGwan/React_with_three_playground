import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from './Box';
import Hexaindex from './Hexahedron/Hexaindex';
import './App.scss';
const App = () => {
  return (
    <>
      <Box />
      <Hexaindex />
    </>
  );
};

export default App;
