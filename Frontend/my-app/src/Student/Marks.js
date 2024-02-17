import React from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Marks = () => {
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
            <h1> Student Marks </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
            <div className="noNoticeS">
                <h3> No Marks available for you right now. </h3>
            </div>
            <div className="noticeS">
                {/* FOR BACKEND */}
                <table>
                    <thead>
                        <tr>
                            <td className="date"> SUBJECTS </td>
                            <td className="title"> MARKS </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Maths</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    )
};

export default Marks;