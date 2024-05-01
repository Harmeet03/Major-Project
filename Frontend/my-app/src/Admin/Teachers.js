import React, { useState, useEffect } from "react";
import '../App.css';
import Navbar from "./Header";

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeacherData();
    }, []);

    const fetchTeacherData = async () => {
        try {
            const response = await fetch('http://localhost:4040/teacherinfo');
            if (response.ok) {
                const data = await response.json();
                setTeachers(data);
            } else {
                console.log("Failed to fetch teacher data");
            }
        } catch (error) {
            console.error("Error fetching teacher data:", error);
        }
    };

    const Teacher_Detail = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('http://localhost:4040/teacherinfo', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("Teacher Created");
                let success = document.getElementById("success");
                success.style.display = 'block';
                } 
            else {
                let failed = document.getElementById("failed");
                failed.style.display = 'block'
                console.log("Failed to create");
            }
        } 
        catch (error) {
            console.log(`Error while posting notice ${error}`);
            let failed = document.getElementById("failed");
            failed.style.display = 'block'
            // let nError = document.getElementById("nError");
            // nError.style.display = "block";
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
            <h1> List of teachers </h1>
        </header>

        {/* NOTICE TO TEACHERS */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Create Username and Password for TEACHERS </h2>
            <form className="form" onSubmit={Teacher_Detail}>
                <input style={{width: "200px"}} className="text" id="text" name="name" type="text" placeholder="Teacher Name" required></input>
                <input style={{width: "200px"}} className="text" id="text" name="username" type="text" placeholder="Create Username" required></input>
                <input style={{width: "200px"}} className="text" id="text" name="password" type="text" placeholder="Create Password" required></input>
                <button type="submit"> Create </button>
            </form>
            <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Teacher created</b></p>
            <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to create. Server Error</b></p>
        </div>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Table related to teachers username and password data </h2>
            <table id="customers">
                <tr>
                    <th>Teacher name</th>
                    <th>Teacher username</th>
                    <th>Teacher password</th>
                </tr>

                {
                    teachers.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.username}</td>
                            <td>{teacher.password}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
        </>
    )
};

export default Teachers;