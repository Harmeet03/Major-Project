import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import React, {useState} from "react";
import Home from './Home';
import SignIn from './Register/Admin/SignIn';
import SignUp from './Register/Admin/SignUp';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Admin/SignIn" element={<SignIn/>} />
        <Route path="Admin/SignUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
