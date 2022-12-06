import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';

import Display from './components/Display';
import { LogInForm } from './components/LogInForm';
import FormUser from './components/FormUser';
import FormHelper from './components/FormHelper';
import BlogList from './components/BlogList';



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
            <Route path="/login" element={< LogInForm/>} />
            <Route path="/FormUser" element={< FormUser/>} />
            <Route path="/FormHelper" element={< FormHelper/>} />
            <Route path="/bloglist" element={<BlogList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
    </>
  );

}

export default App;
