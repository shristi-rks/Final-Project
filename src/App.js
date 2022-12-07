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
import { useState, useEffect } from "react";
import { fetchHelperData } from "./fetch-data";


function App() {
  const [helperData, setHelperData] = useState();
  const fetchData = async function () {
    const data = await fetchHelperData();
    setHelperData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home helperData={helperData} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/helper-profile" element={<Display helperData={helperData}/>} />
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
