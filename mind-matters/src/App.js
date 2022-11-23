import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import FormUser from './components/FormUser';
import Display from './components/Display';

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
            <Route path="/testimonials" element={<Display />} />
            <Route path="/login" element={<FormUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );

}

export default App;
