import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Classes = () => {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchStudentData();
    }, []);

    const fetchStudentData = async () => {
        try {
            const response = await fetch('https://school-erp-system.onrender.com/studentinfo');
            const response2 = await fetch('https://school-erp-system.onrender.com/teacherinfo');
            if (response.ok && response2.ok) {
                const data = await response.json();
                const data2 = await response2.json();
                setStudents(data);
                setTeachers(data2);
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
            <h1> Classes to Teach </h1>
        </header>

        {/* NOTICE FROM ADMIN */}
        <div style={{marginTop: "40px"}} id="noticeS">
            {students.length > 0 ? (
                <div className="noticeS">
                    <table id="customers">
                        <tr>
                            <th>Teacher Name</th>
                            <th>Classes</th>
                        </tr>
                        {
                            students.map((student, index) => (
                                teachers.map((teacher, index) => (
                                    <tr key={index}>
                                        <td>{teacher.name}</td>
                                        <td>{student.class}</td>
                                    </tr>
                                ))
                            ))
                        }
                    </table>
                </div>
            ) 
            : (
                <div className="noNoticeS">
                    <h3> You don't have any Classes to teach right now. </h3>
                </div>   
            )}
        </div>
        </>
    )
};

export default Classes;