import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

const OTP = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:4040/otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
          });
      
          if (response.ok) {
            const data = await response.json();
    
            // Check the response status or data for successful login
            if (data.message === "Login Successful") {
              console.log('Login Successful');
            } 
          } 
          else {
            console.error('Invalid Email');
            let user_error = document.getElementById("user_error");
            user_error.style.display = "block";
          }
        } 
        catch (error) {
          console.error('Error fetching the user data: ', error);
          let server_error = document.getElementById("server_error");
          server_error.style.display = "block";
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
        <div className="si" style={{background: 'black'}}>
            <div className="left">
                <form onSubmit={handleLogin}>
                    <h2> EMAIL: </h2>
                    <input id="email" type="text" name="email" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}></input>
                    <h2> OTP: </h2>
                    <input id="otp" type="text" name="otp" placeholder="Enter OTP" onChange={(event) => setOTP(event.target.value)}></input><br></br><br></br><br></br>
                    <button type="submit"> Proceed </button>
                    <p id="user_error" style={{display: "none"}}> Invalid Email. </p>
                    <p id="server_error" style={{display: "none"}}> Server Error. </p>
                </form>
            </div>
        </div>
        </>
    )
};

export default OTP;