import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import { HomePage } from './HomePage';


function App() {
  return (
    <React.Fragment className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
