import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Home = () => {
    const navigate = useNavigate();

    const [notices, setnotices] = useState([]);

    useEffect(() => {
        fetchNoticeData();
    }, []);

    const fetchNoticeData = async () => {
        try {
            const response = await fetch('https://school-erp-system.onrender.com/anotice');
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

    const Notice = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('https://school-erp-system.onrender.com/tnotice', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("Notice Posted");
                let success = document.getElementById("success");
                success.style.display = 'block'
                } 
            else {
                let failed = document.getElementById("failed");
                failed.style.display = 'block'
                console.log("Notice failed");
            }
        } 
        catch (error) {
            console.log(`Error while posting notice ${error}`);
            let failed = document.getElementById("failed");
            failed.style.display = 'block'
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
            <h1> Teacher Dashboard </h1>
        </header>

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

        {/* NOTICE TO STUDENTS */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Send Notice to STUDENTS </h2>
            <form className="form" onSubmit={Notice}>
                <input className="date" id="date" type="date" name="date" required></input>
                <input className="text" id="text" type="text" name="message" placeholder="Write your message here...." required></input>
                <button type="submit"> Publish </button>
            </form>
            <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Notice Posted</b></p>
            <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Notice Failed. Server Error</b></p>
        </div>
        </>
    )
};

export default Home;