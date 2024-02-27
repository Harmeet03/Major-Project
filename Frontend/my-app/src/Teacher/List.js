import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const List = () => {
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
            <h1> List Of Students </h1>
        </header>

        {/* NOTICE FROM ADMIN */}
        <div style={{marginTop: "40px"}} id="noticeS">
            <div className="noNoticeS">
                <h3> No List available for you right now. </h3>
            </div>
            <div className="noticeS">
                {/* FOR BACKEND */}
                <table>
                    <thead>
                        <tr>
                            {/* <td className="sno"> S. NO. </td>
                            <td className="name"> NAME </td>
                            <td className="rno"> ROLL NO. </td>
                            <td className="mno"> MOBILE NUMBER </td>
                            <td className="add"> ADDRESS </td>
                            <td className="admn"> ADMISSION NO. </td> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>12</td>
                            <td>Harmeet Singh</td>
                            <td>18</td>
                            <td>9971391713</td>
                            <td>D Block, Fateh Nagar, Delhi</td>
                            <td>0248849598</td> */}
                        </tr>
                        <tr>
                            {/* <td>12</td>
                            <td>fddfdf</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
};

export default List;