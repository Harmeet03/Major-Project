import React from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const ProfileS = () => {
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
        <Navbar/>
        <header>
            <h1> Student Profile </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
                <div className="noNoticeS">
                    <img id="SProfileImg" src="https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png"></img>
                    <h2> Student Name: <span style={{color: "rgb(98, 98, 250)"}}> {/* Harmeet */} </span> </h2>
                    <h4> Student Roll Number:  <span style={{color: "rgb(98, 98, 250)"}}> {/* 18 */} </span> </h4>
                    <h4> Class:  <span style={{color: "rgb(98, 98, 250)"}}> {/* Eleventh */} </span> </h4>
                </div>
            </div>
            <br></br>
            <div id="noticeS">
                <div className="noNoticeS">
                    <h2> Personal Information</h2>
                    <div className="infoS">
                        <h3> Date of Birth: <span style={{color: "rgb(98, 98, 250)"}}> {/* 13/10/2003 */} </span> </h3>
                        <h3> Email: <span style={{color: "rgb(98, 98, 250)"}}> {/* hsdhanjal2003@gmail.com */} </span> </h3>
                        <h3> Address: <span style={{color: "rgb(98, 98, 250)"}}> {/* D Block */} </span> </h3>
                        <h3> Gender: <span style={{color: "rgb(98, 98, 250)"}}> {/* Male */} </span> </h3>
                        <h3> Phone: <span style={{color: "rgb(98, 98, 250)"}}> {/* 9971391713 */} </span> </h3>
                        <h3> Emergency Contact: <span style={{color: "rgb(98, 98, 250)"}}> {/* 9810112804 */} </span> </h3>
                    </div>
                </div>
            </div>
            
            {/* FOR BACKEND */}
            <div className="overviewS">
                {/* <div>
                    <h2> MATHS </h2>
                    <h4><a href=""> Click here </a></h4>
                </div> */}
            </div>
        </div>
        </>
    )
};

export default ProfileS;