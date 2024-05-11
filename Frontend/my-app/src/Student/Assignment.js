import React, { useState, useEffect } from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Assignment = () => {
    const navigate = useNavigate();

    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignmentData();
    }, []);

    const fetchAssignmentData = async () => {
        try {
            const response = await fetch('http://localhost:4040/assignment');
            if (response.ok) {
                const data = await response.json();
                setAssignments(data);
            } else {
                console.log("Failed to fetch Assignment data");
            }
        } catch (error) {
            console.error("Error fetching Assignment data:", error);
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
        <Navbar/>
        <header>
            <h1> Student Assignment </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
                {assignments.length > 0 ? (
                    <table id="customers">
                        <tr>
                            <th>Subject</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Link</th>
                        </tr>
                        {assignments.map((assignment, index) => (
                                <tr key={index}>
                                    <td>{assignment.subject}</td>
                                    <td>{assignment.class}</td>
                                    <td>{assignment.section}</td>
                                    <td>{assignment.link}</td>
                                </tr>
                            ))
                        }
                    </table>
                ) 
                : (
                    <div className="noNoticeS">
                        <h3> No Assignment available for you right now. </h3>
                    </div>
                )}
            </div>
        </div>
        </>
    )
};

export default Assignment;