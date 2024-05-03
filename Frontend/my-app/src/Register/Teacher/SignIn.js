import React from "react";
import '../../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:4040/tlogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
      
          if (response.ok) {
            const data = await response.json();
    
            // Check the response status or data for successful login
            if (data.message === "Login Successful") {
              console.log('Login Successful');
              setTimeout(() => {
                navigate('/Teacher/Home');
              }, 1000);
            } 
          } 
          else {
            console.error('Invalid Username or Password');
            let user_error = document.getElementById("user_error");
            user_error.style.display = "block";
          }
        } 
        catch (error) {
          console.error('Error fetching the user data: ', error);
          let server_error = document.getElementById("server_error");
          server_error.style.display = "block";
        }
    }

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
                    <input name="username" type="text" placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}></input>
                    <h2> PASSWORD: </h2>
                    <input name="password" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input><br></br><br></br>
                    <p id="user_error" style={{display: "none"}}> Invalid Password or Username. </p>
                    <p id="server_error" style={{display: "none"}}> Server Error. </p>
                    <button type="submit"> Proceed </button>
                </form>
            </div>
            <div className="right">
                <h1> SIGN IN </h1>
                <h3> <h2>Welcome Back TEACHER.</h2> Nice to see you again.<h4>Note: <span style={{fontSize: "22px"}}>Please contact admin if you are unable to sign in.</span></h4> </h3>
            </div>
        </div>
        </>
    )
};

export default SignIn;