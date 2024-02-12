import React from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
        <div className="su">
            <div className="left">
                <form action="#">
                    <h2> NAME: </h2>
                    <input type="text" placeholder="Enter Username" required></input>
                    <h2> USERNAME: </h2>
                    <input type="text" placeholder="Enter Username" required></input>
                    <h2> EMAIL: </h2>
                    <input type="email" placeholder="example@example.com" required></input>
                    <h2> PASSWORD: </h2>
                    <input type="password" placeholder="Password" required></input>
                    <p> Haven't Sign In yet?<span style={{cursor: "pointer"}} onClick={ () => { navigate("/Admin/SignIn") }}> Click Here! </span></p>
                    <button type="submit"> Proceed </button>
                </form>
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