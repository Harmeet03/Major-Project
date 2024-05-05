import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";
import setNotice from "./LocalStorage/setNotice"
import getNotice from "./LocalStorage/getNotice"

const Home = () => {
    const navigate = useNavigate();

    const [notices, setnotices] = useState([]);

    useEffect(() => {
        fetchNoticeData();
    }, []);

    const fetchNoticeData = async () => {
        try {
            const response = await fetch('http://localhost:4040/anotice');
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

        {/* NOTICE TO notices */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Send Notice to notices </h2>
            <form className="form" onSubmit={setNotice}>
                <input className="date" id="date" type="date" required></input>
                <input className="text" id="text" type="text" placeholder="Write your message here...." required></input>
                <button type="submit"> Publish </button>
            </form>
        </div>
        </>
    )
};

export default Home;