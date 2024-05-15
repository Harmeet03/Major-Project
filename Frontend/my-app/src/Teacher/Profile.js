import React, { useState, useEffect } from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    // SETTING USERNAME FROM LOCALSTORAGE
    let tusername = localStorage.getItem("usernameT");
    console.log(tusername);
    const username = tusername;
    
    const [teacher, setTeacher] = useState();

    useEffect(() => {
        fetchTeacherData(username);
    }, [username]);

    // const fetchTeacherName = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:4040/teacherinfo`);
    //         if (response.ok) {
    //             const teacherinfo = await response.json();
    //             const username = teacherinfo[0].username;
    //             fetchTeacherData(username);
    //         } else {
    //             console.log("Failed to fetch teacher username");
    //         }
    //     } catch (error) {
    //         console.error("Server Error while fetching teacher username:", error);
    //     }
    // };
    
    const fetchTeacherData = async (username) => {
        try {
            const response = await fetch(`http://localhost:4040/teacherinfo/${username}`);
            if (response.ok) {
                const data = await response.json();
                setTeacher(data);
                console.log(username);
            } else {
                console.log("Failed to fetch teacher data", username);
            }
        } catch (error) {
            console.error("Error fetching teacher data:", error);
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
            <h1> Teacher Profile </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
            {
                teacher && (
                    <div className="noNoticeS">
                            <img id="SProfileImg" src="https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png"></img>
                            <h2> Teacher Name: <span style={{color: "rgb(98, 98, 250)"}}> {teacher.name} </span> </h2>
                            <h4> Teacher Username:  <span style={{color: "rgb(98, 98, 250)"}}> {teacher.username} </span> </h4>
                            <h4> Class Assign:  <span style={{color: "rgb(98, 98, 250)"}}> {teacher.class} </span> </h4>
                        </div>
                    )
                }
            </div>
            <br></br>
            <div id="noticeS">
            {
                teacher && (
                    <div className="noNoticeS">
                        <h2> Personal Information</h2>
                        <div className="infoS" style={{textAlign: "center"}}>
                            <h3> Password: <span style={{color: "rgb(98, 98, 250)"}}> {teacher.password} </span> </h3>
                            <h3> Subject: <span style={{color: "rgb(98, 98, 250)"}}> {teacher.subject} </span> </h3>
                            <h3> Phone: <span style={{color: "rgb(98, 98, 250)"}}> 9971391713 </span> </h3>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        </>
    )
};

export default Profile;