import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import React, {useState} from "react";
import Home from './Home';
import SignIn from './Register/Admin/SignIn';
import SignUp from './Register/Admin/SignUp';
import SignInT from './Register/Teacher/SignIn';
import SignInS from './Register/Student/SignIn';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Admin/SignIn" element={<SignIn/>} />
        <Route path="Admin/SignUp" element={<SignUp/>} />
        <Route path="Teacher/SignIn" element={<SignInT/>} />
        <Route path="Student/SignIn" element={<SignInS/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
