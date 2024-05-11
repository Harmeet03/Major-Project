import React, { useState, useEffect } from "react";
import '../App.css';
import Navbar from "./Header";

const Student = () => {

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

    const Student_Detail = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('http://localhost:4040/studentinfo', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("Student Created");
                let success = document.getElementById("success");
                success.style.display = 'block'
                } 
            else {
                let failed = document.getElementById("failed");
                failed.style.display = 'block'
                console.log("Failed to create");
            }
        } 
        catch (error) {
            console.log(`Error while creating ${error}`);
            let failed = document.getElementById("failed");
            failed.style.display = 'block'
        }
    }

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
            <h1> List of students </h1>
        </header>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Create Username and Password for STUDENTS </h2>
            <form className="form" onSubmit={Student_Detail}>
                <div id="form">
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="name" type="text" placeholder="Student Name" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="username" type="text" placeholder="Create Username" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="password" type="text" placeholder="Create Password" required></input>
                    </div><br></br>
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="ano" type="number" placeholder="Create Admission No." required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="fees" type="number" placeholder="Fees" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="class" type="text" placeholder="Create Class-Section" required></input>
                    </div>
                </div>
                <button type="submit"> Create </button>
            </form>
            <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Student created</b></p>
            <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to create. Server Error</b></p>
        </div>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            {students.length > 0 ? (
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

export default Student;