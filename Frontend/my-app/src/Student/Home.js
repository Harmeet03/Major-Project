import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Home = () => {
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
            <h1> Student Dashboard </h1>
        </header>
        <div className="overviewS">
            <div className="sub">
                <i className="fa fa-book"></i>
                <h2> Total Subjects </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
            <div className="marks">
                <i className="fa fa-percent"></i>
                <h2> Total Marks </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
            <div className="ass">
                <i className="fa fa-bookmark"></i>
                <h2> Total Assignments </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
            <div className="att">
                <i className="fa fa-address-book"></i>
                <h2> Total Attendance </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
            <div className="notes">
                <i className="fa fa-sticky-note"></i>
                <h2> Total Notes </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
            <div className="tests">
                <i className="fa fa-book"></i>
                <h2> Total Tests </h2>
                {/* FOR BACKEND */}
                <p> 0 </p>
            </div>
        </div>

        <div id="noticeS">
            <div className="noNoticeS">
                <h3> No Notice for you right now. </h3>
            </div>
            <div className="noticeS">
                {/* FOR BACKEND */}
                <table>
                    <thead>
                        <tr>
                            <td className="date"> DATE </td>
                            <td className="title"> TITLE / NOTICE </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{localStorage.getItem("Date")}</td>
                            <td>{localStorage.getItem("Notice")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
};

export default Home;