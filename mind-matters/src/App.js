import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogdetail from './Blogdetail';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Testimonials from './components/pages/Testimonials';

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
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs/:id" element={<Blogdetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
    </>
  );

}

export default App;
