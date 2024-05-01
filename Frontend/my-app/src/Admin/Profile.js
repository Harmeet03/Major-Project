import React, { useState, useEffect } from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await fetch('http://localhost:4040/login');
            if (response.ok) {
                const data = await response.json();
                setAdmins(data);
            } else {
                console.log("Failed to fetch admin data");
            }
        } catch (error) {
            console.error("Error fetching admin data:", error);
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
            <h1> Admin Profile </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
                {
                    admins.map((admin, index) => (
                        <div className="noNoticeS" key={index}>
                            <img id="SProfileImg" src="https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png"></img>
                            <h2> Admin Name: <span style={{color: "rgb(98, 98, 250)"}}> {admin.fname} </span> </h2>
                            <h4> Admin Username:  <span style={{color: "rgb(98, 98, 250)"}}> {admin.uname} </span> </h4>
                        </div>
                    ))
                }
            </div>
            <br></br>
            <div id="noticeS">
                <div className="noNoticeS">
                    <h2> Personal Information</h2>
                    {
                        admins.map((admin, index) => (
                            <div className="infoS" style={{textAlign: "center"}} >
                                <h3> Email: <span style={{color: "rgb(98, 98, 250)"}}> {admin.email} </span> </h3>
                                <h3> Phone: <span style={{color: "rgb(98, 98, 250)"}}> 9971391713 </span> </h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
};

export default Profile;