import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { LogInForm } from './LogInForm';
import RegistrationForm from './RegistrationForm';

const Path = () => {

    return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/LogIn' element= { <LogInForm /> } /> 
            <Route path='/Registration' element= { <RegistrationForm /> } /> 
            <Route path='/UserRegistration' element= { <FormUser /> } /> 
            <Route path='/UserRegistration' element= { <FormHelper /> } /> 
          </Routes>
          </BrowserRouter>
        </div>
      );
}

export default Path;