import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';

import Display from './components/Display';
import Login from './components/pages/Login';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/helper-profile:id" element={<Display />} />
            <Route path="/login" element={< Login/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
    </>
  );

}

export default App;
