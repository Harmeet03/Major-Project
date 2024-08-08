import React, { useState, useEffect } from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    // SETTING USERNAME FROM LOCALSTORAGE
    let susername = localStorage.getItem("usernameS");
    console.log(susername);
    const username = susername;

    const [student, setStudent] = useState();
    
    useEffect(() => {
        fetchStudentData(username);
    }, [username]);

    // const fetchStudentName = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:4040/studentinfo`);
    //         if (response.ok) {
    //             const studentinfo = await response.json();
    //             const username = studentinfo[0].username;
    //             fetchStudentData(username);
    //         } else {
    //             console.log("Failed to fetch student username");
    //         }
    //     } catch (error) {
    //         console.error("Server Error while fetching student username:", error);
    //     }
    // };
    
    const fetchStudentData = async (username) => {
        try {
            const response = await fetch(`https://school-erp-system.onrender.com/studentinfo/${username}`);
            if (response.ok) {
                const data = await response.json();
                setStudent(data);
                console.log(username);
            } else {
                console.log("Failed to fetch student data", username);
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
        <Navbar username = {username}/>
        <header>
            <h1> Student Profile </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            {username != null ? (
                <div>
                    <div id="noticeS">
                        {
                            student && (
                                <div className="noNoticeS">
                                    <img id="SProfileImg" src="https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png"></img>
                                    <h2> Student Name: <span style={{color: "rgb(98, 98, 250)"}}> {student.name} </span> </h2>
                                    <h4> Admission No.:  <span style={{color: "rgb(98, 98, 250)"}}> {student.ano} </span> </h4>
                                    <h4> Class:  <span style={{color: "rgb(98, 98, 250)"}}> {student.class} </span> </h4>
                                </div>
                            )
                        }
                    </div>
                    <br></br>
                    <div id="noticeS">
                        {
                            student && (
                                <div className="noNoticeS">
                                    <h2> Personal Information</h2>
                                    <div className="infoS" style={{textAlign: "center"}}>
                                        <h3> Username: <span style={{color: "rgb(98, 98, 250)"}}> {student.username} </span> </h3>
                                        <h3> Password: <span style={{color: "rgb(98, 98, 250)"}}> {student.password} </span> </h3>
                                        <h3> Fees: <span style={{color: "rgb(98, 98, 250)"}}> {student.fees} </span> </h3>
                                        <h3> Phone: <span style={{color: "rgb(98, 98, 250)"}}> 9971391713 </span> </h3>
                                        <h3> Emergency Contact: <span style={{color: "rgb(98, 98, 250)"}}> 9971391713 </span> </h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            ) 
            : (
                <div id="noticeS">
                    <div className="noNoticeS">
                        <h3> Please <span onClick={ () => { navigate("/Student/SignIn") }} style={{color: 'rgb(98, 98, 250)', cursor: 'pointer'}}> Sign In </span> first. </h3>
                    </div>
                </div>
            )}
        </div>
        </>
    )
};

export default Profile;