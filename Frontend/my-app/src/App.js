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

// Admin
import HomeA from './Admin/Home';
import TeacherA from './Admin/Teachers';
import StudentA from './Admin/Student';

// Teacher
import HomeT from './Teacher/Home';
import List from './Teacher/List';
import Classes from './Teacher/Classes';
import MarksT from './Teacher/Marks';
import AssignmentT from './Teacher/Assignment';
import NotesT from './Teacher/Notes';
import TestT from './Teacher/Test';
import ProfileT from './Teacher/Profile';

// Student
import HomeS from './Student/Home';
import Marks from './Student/Marks';
import Assignment from './Student/Assignment';
import Attendance from './Student/Attendance';
import Notes from './Student/Notes';
import Test from './Student/Test';
import Subject from './Student/Subject';
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
        <Route path="/Admin/Teachers" element={<TeacherA/>} />
        <Route path="/Admin/Students" element={<StudentA/>} />

        {/* Home Page of Teacher */}
        <Route path="/Teacher/Home" element={<HomeT/>} />
        <Route path="/Teacher/List" element={<List/>} />
        <Route path="/Teacher/Classes" element={<Classes/>} />
        <Route path="/Teacher/Marks" element={<MarksT/>} />
        <Route path="/Teacher/Assignment" element={<AssignmentT/>} />
        <Route path="/Teacher/Notes" element={<NotesT/>} />
        <Route path="/Teacher/Test" element={<TestT/>} />
        <Route path="/Teacher/Profile" element={<ProfileT/>} />
        
        {/* Home Page of Student */}
        <Route path="/Student/Home" element={<HomeS/>} />
        <Route path="/Student/Marks" element={<Marks/>} />
        <Route path="/Student/Assignment" element={<Assignment/>} />
        <Route path="/Student/Attendance" element={<Attendance/>} />
        <Route path="/Student/Notes" element={<Notes/>} />
        <Route path="/Student/Test" element={<Test/>} />
        <Route path="/Student/Subject" element={<Subject/>} />
        <Route path="/Student/Profile" element={<ProfileS/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
