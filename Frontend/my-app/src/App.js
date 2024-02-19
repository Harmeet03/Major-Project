import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import React, {useState} from "react";
import Home from './Home';
import SignIn from './Register/Admin/SignIn';
import SignUp from './Register/Admin/SignUp';
import SignInT from './Register/Teacher/SignIn';
import SignInS from './Register/Student/SignIn';
import Register from './Register/Register';
import HomeA from './Admin/Home';
import HomeT from './Teacher/Home';
import HomeS from './Student/Home';
import Marks from './Student/Marks';
import Assignment from './Student/Assignment';
import Notes from './Student/Notes';
import Test from './Student/Test';
import ProfileS from './Student/Profile';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* School Home Page */}
        <Route path="/" element={<Home/>} />

        {/* Sign In Options */}
        <Route path="/Register" element={<Register/>} />

        {/* Sign In */}
        <Route path="/Admin/SignIn" element={<SignIn/>} />
        <Route path="/Admin/SignUp" element={<SignUp/>} />
        <Route path="/Teacher/SignIn" element={<SignInT/>} />
        <Route path="/Student/SignIn" element={<SignInS/>} />

        {/* Home Page of Admin */}
        <Route path="/Admin/Home" element={<HomeA/>} />

        {/* Home Page of Teacher */}
        <Route path="/Teacher/Home" element={<HomeT/>} />
        
        {/* Home Page of Student */}
        <Route path="/Student/Home" element={<HomeS/>} />
        <Route path="/Student/Marks" element={<Marks/>} />
        <Route path="/Student/Assignment" element={<Assignment/>} />
        <Route path="/Student/Notes" element={<Notes/>} />
        <Route path="/Student/Test" element={<Test/>} />
        <Route path="/Student/Test" element={<Test/>} />
        <Route path="/Student/Profile" element={<ProfileS/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
