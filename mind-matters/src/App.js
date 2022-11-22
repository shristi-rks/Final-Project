import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/pages/Create';
import Blogdetail from './Blogdetail';

import Login from './components/pages/Login';
import About from './components/pages/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/testimonials" element={<Create />} />
            <Route path="/blogs/:id" element={<Blogdetail />} />
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/login" element={<Login />} />
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
