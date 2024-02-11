import React from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
            <div className="si">
                <div className="left">
                    <form action="#">
                        <h2> USERNAME: </h2>
                        <input type="text" placeholder="Enter Username"></input>
                        <h2> PASSWORD: </h2>
                        <input type="password" placeholder="Password"></input>
                        <p> Haven't Sign Up yet?<span onClick={ () => { navigate("/SignUp") }}> Click Here! </span></p>
                    </form>
                </div>
                <div className="right">
                    <h1> SIGN IN </h1>
                    <h3> <h2>Welcome Back ADMIN.</h2> Nice to see you again. </h3>
                </div>
            </div>
        </>
    )
};

export default SignIn;