import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";
import setNotice from "./LocalStorage/setNotice"
import getNotice from "./LocalStorage/getNotice"

const Home = () => {
    const navigate = useNavigate()
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
                {localStorage.getItem("noticeA") !== null ? (
                    <div className="noticeS" id="NoticeS">
                        <table>
                            <thead>
                                <tr>
                                    <td className="date"> DATE </td>
                                    <td className="title"> TITLE / NOTICE </td>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                                {getNotice()}
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