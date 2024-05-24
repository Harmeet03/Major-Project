import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({username}) => {
    const navigate = useNavigate();
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
        <nav>
            <i id="dropdown" onClick={ () => {
                let spans = document.querySelectorAll("nav > span");
                spans.forEach(span => {
                    if(span.style.display === "block"){
                        span.style.display = "none";
                    }
                    else{
                        span.style.display = "block";
                    }
                });
            } }><span className="fa fa-list" ></span></i>
            <span onClick={ () => { navigate("/Student/Home") }}><i className="fa fa-home"></i>&nbsp; Home</span>
            {/* <span onClick={ () => { navigate("/Student/Subject") }}><i className="fa fa-book"></i>&nbsp; Subject</span> */}
            <span onClick={ () => { navigate("/Student/Marks") }}><i className="fa fa-percent"></i>&nbsp; Marks</span>
            <span onClick={ () => { navigate("/Student/Assignment") }}><i className="fa fa-bookmark"></i>&nbsp; Assignment</span>
            <span onClick={ () => { navigate("/Student/TimeTable") }}><i className="fa fa-list"></i>&nbsp; TimeTable</span>
            <span onClick={ () => { navigate("/Student/Notes") }}><i className="fa fa-sticky-note"></i>&nbsp; Notes</span>
            <span onClick={ () => { navigate("/Student/Test") }}><i className="fa fa-book"></i>&nbsp; Test</span>
            <span onClick={ () => { navigate(`/Student/Profile/${username}`)}}><i className="fa fa-address-card"></i>&nbsp; Profile</span>
            <span onClick={ () => { navigate("/Register") }}><i className="fa fa-step-forward"></i>&nbsp; Logout</span>
            <span onClick={ () => { 

                    let theme = localStorage.getItem('lightMode');

                    let body = document.querySelector("body"); 
                    let text = document.querySelector(".overviewS, #noticeS");

                    if(localStorage.getItem('lightMode') === 'ON'){
                        console.log("Yeah");
                    }
                    else{
                        console.log("Nah");
                    }

                    if(body.style.backgroundColor !== 'white' && localStorage.getItem('lightMode') === 'OFF'){
                        localStorage.setItem('lightMode', 'ON');
                        body.style.backgroundColor = 'white'; 
                        body.style.color = 'black'; 
                        
                        text.style.backgroundColor = 'white';
                        text.style.color = 'black';
                        console.log(theme);
                    }
                    else{
                        localStorage.setItem('lightMode', 'OFF');
                        body.style.backgroundColor = 'black'; 
                        body.style.color = 'white'; 
                        
                        text.style.backgroundColor = 'rgba(255, 255, 255, 0.164)';
                        text.style.color = 'white';
                        console.log(theme);
                    }
                    
                }
            }>
            <i className="fa fa-"></i>&nbsp; Theme </span>
        </nav>
        </>
    )
};

export default Navbar;