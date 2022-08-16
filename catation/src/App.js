import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Login from './Pages/Login/index'
import Home from "./Pages/Inicio/index1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
