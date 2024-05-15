import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Home = () => {
    const navigate = useNavigate();

    // FOR PRINTING NOTICE FRO TEACHER
    const [notices, setnotices] = useState([]);

    useEffect(() => {
        fetchNoticeData();
    }, []);

    const fetchNoticeData = async () => {
        try {
            const response = await fetch('http://localhost:4040/tnotice');
            if (response.ok) {
                const data = await response.json();
                setnotices(data);
            } else {
                console.log("Failed to fetch notice");
            }
        } catch (error) {
            console.error("Server Error while fetching notice:", error);
        }
    };

    // FOR PRINTING NUMBER OF ASSIGNMENT
    const [assignments, setassignments] = useState([]);

    useEffect(() => {
        countAssignmentData();
    }, []);

    const countAssignmentData = async () => {
        try {
            const response = await fetch('http://localhost:4040/assignment');
            if (response.ok) {
                const data = await response.json();
                setassignments(data.count);
            } else {
                console.log("Failed to fetch notice");
            }
        } catch (error) {
            console.error("Server Error while fetching notice:", error);
        }
    };

    // FOR PRINTING NUMBER OF NOTES
    const [notes, setnotes] = useState([]);

    useEffect(() => {
        countNotesData();
    }, []);

    const countNotesData = async () => {
        try {
            const response = await fetch('http://localhost:4040/notes');
            if (response.ok) {
                const data = await response.json();
                setnotes(data.count);
            } else {
                console.log("Failed to fetch notice");
            }
        } catch (error) {
            console.error("Server Error while fetching notice:", error);
        }
    };

    // FOR PRINTING NUMBER OF TESTStest
    const [tests, settests] = useState([]);

    useEffect(() => {
        countTestsData();
    }, []);

    const countTestsData = async () => {
        try {
            const response = await fetch('http://localhost:4040/test');
            if (response.ok) {
                const data = await response.json();
                settests(data.count);
            } else {
                console.log("Failed to fetch notice");
            }
        } catch (error) {
            console.error("Server Error while fetching notice:", error);
        }
    };

    return(
        <>
        <head>
            <link rel="prec<onnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconne>ct" href="https://fonts.gstatic.com" crossorigin></link>
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
                <p> 5 </p>
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
                <p> {assignments} </p>
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
                <p> {notes} </p>
            </div>
            <div className="tests">
                <i className="fa fa-book"></i>
                <h2> Total Tests </h2>
                {/* FOR BACKEND */}
                <p> {tests} </p>
            </div>
        </div>

        {/* NOTICE FROM ADMIN */}
        <div style={{marginTop: "40px"}} id="noticeS">
            <div className="noticeS">
                {notices.length > 0 ? (
                    <div className="noticeS" id="NoticeS">
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th style={{textAlign: "center"}} className="date"> DATE </th>
                                    <th style={{textAlign: "center"}} className="title"> TITLE / NOTICE </th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                                {
                                    notices.map((notice, index) => (
                                        <tr key={index}>
                                            <td>{notice.date}</td>
                                            <td>{notice.message}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) 
                : (
                    <div className="noNoticeS">
                        <h3> No Notice from ADMIN for you right now. </h3>
                    </div>
                )}
            </div>
        </div>
        </>
    )
};


export default Home;