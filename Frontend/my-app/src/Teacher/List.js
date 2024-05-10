import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const List = () => {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudentData();
    }, []);

    const fetchStudentData = async () => {
        try {
            const response = await fetch('http://localhost:4040/studentinfo');
            if (response.ok) {
                const data = await response.json();
                setStudents(data);
            } else {
                console.log("Failed to fetch student data");
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
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
            <h1> List Of Students </h1>
        </header>

        {/* NOTICE FROM ADMIN */}
        <div style={{marginTop: "40px"}} id="noticeS">
            {students.length > 0 ? (
                <div className="noticeS">
                    <table id="customers">
                        <tr>
                            <th>Student name</th>
                            <th>Student Username</th>
                            <th>Student Password</th>
                            <th>Student Admission no.</th>
                            <th>Fees</th>
                            <th>Student Class</th>
                        </tr>
                        {
                            students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.username}</td>
                                    <td>{student.password}</td>
                                    <td>{student.ano}</td>
                                    <td>{student.fees}</td>
                                    <td>{student.class}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            ) 
            : (
                <div className="noNoticeS">
                    <h3> No List available for you right now. </h3>
                </div>   
            )}
        </div>
        </>
    )
};

export default List;