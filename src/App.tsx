import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Demo from './Demo/Demo';
import { Button } from '@material-ui/core';
import { Button as NaviButton } from './navi'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  seed: "Ecc",
});

function App() {
  return (<StylesProvider generateClassName={generateClassName}>
    <div className="App">
      <Button>Test button</Button>
      <NaviButton>Test NaviButton</NaviButton>
      <Demo />
    </div>
  </StylesProvider>)
}

export default App;
