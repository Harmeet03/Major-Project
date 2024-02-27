import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Classes = () => {
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
            <h1> Classes to Teach </h1>
        </header>

        {/* NOTICE FROM ADMIN */}
        <div style={{marginTop: "40px"}} id="noticeS">
            <div className="noNoticeS">
                <h3> You don't have any Classes to teach right now. </h3>
            </div>
            <div className="noticeS">
                {/* FOR BACKEND */}
                <table>
                    <thead>
                        <tr>
                            {/* <td className="sno"> S. NO. </td>
                            <td className="add"> CLASS </td>
                            <td className="admn"> TIMING </td> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>12</td>
                            <td>VIII - D</td>
                            <td>10-11</td> */}
                        </tr>
                        <tr>
                            {/* <td>12</td>
                            <td>fddfdf</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
};

export default Classes;