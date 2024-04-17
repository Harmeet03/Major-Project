import React from "react";
import '../../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()

    const [uname, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:4040/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uname, password }),
          });
      
          if (response.ok) {
            const data = await response.json();
    
            // Check the response status or data for successful login
            if (data.message === "Login Successful") {
              console.log('Login Successful');
            //   links('/Home')
            } 
          } 
          else {
            console.error('Invalid Username or Password');
            alert("Invalid Username or Password");
          }
        } 
        catch (error) {
          console.error('Error fetching the user data: ', error);
        //   links('/Error');
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
        <div className="si">
            <div className="left">
                <form onSubmit={handleLogin}>
                    <h2> USERNAME: </h2>
                    <input name="uname" type="text" placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}></input>
                    <h2> PASSWORD: </h2>
                    <input name="password" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
                    <p> Haven't Sign Up yet?<span style={{cursor: "pointer"}} onClick={ () => { navigate("/Admin/SignUp") }}> Click Here! </span></p>
                    <button type="submit"> Proceed </button>
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