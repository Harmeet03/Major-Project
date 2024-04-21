import React, { useState } from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const Form = async(event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
            
            try {
                const response = await fetch('http://localhost:4040/userinfo', {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formDataObject),
                });
        
                if (response.ok) {
                    console.log("Form Submitted");
                    navigate('/Admin/SignIn');
                } 
                else {
                    console.log("Form failed");
                }
            } 
            catch (error) {
                console.log(`Error while submitting form ${error}`);
                let nError = document.getElementById("nError");
                nError.style.display = "block";
            }
        };

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
        <div className="su">
            <div className="left">
                <form onSubmit={Form}>
                    <h2> NAME: </h2>
                    <input name="fname" type="text" placeholder="Enter Username" required></input>
                    <h2> USERNAME: </h2>
                    <input name="uname" type="text" placeholder="Enter Username" required></input>
                    <h2> EMAIL: </h2>
                    <input name="email" type="email" placeholder="example@example.com" required></input>
                    <h2> PASSWORD: </h2>
                    <input name="password" type="password" placeholder="Password" required></input>
                    <p> Haven't Sign In yet?<span style={{cursor: "pointer"}} onClick={ () => { navigate("/Admin/SignIn") }}> Click Here! </span></p>
                    <button name="submit" type="submit" id="AdminSignUp"> Proceed </button>
                </form>
                <div id="nError" style={{display: "none"}}>
                    <h4> Failed to connect to server! Pease try later.</h4>
                </div>
            </div>
            <div className="right">
                <h1> SIGN UP </h1>
                <h3> As an Admin. </h3>
            </div>
        </div>
        </>
    )
};

export default SignUp;