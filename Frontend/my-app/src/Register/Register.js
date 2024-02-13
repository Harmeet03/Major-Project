import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    return(
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <div className="container">
            <div className="admin" onClick={ () => { navigate("/Admin/SignIn") }}>
                <i></i>
                <h2> Admin </h2>
                <p> Login as an administrator to access the dashboard to manage app data. </p>
            </div>
            <div className="teacher" onClick={ () => { navigate("/Teacher/SignIn") }}>
                <i></i>
                <h2> Teacher </h2>
                <p> Login as an teacher to create courses, assignments and track student progress. </p>
            </div>
            <div className="student" onClick={ () => { navigate("/Student/SignIn") }}>
                <i></i>
                <h2> Student </h2>
                <p> Login as an student to explore course materials, notes and assignments. </p>
            </div>
        </div>
        </>
    )
};

export default Register;