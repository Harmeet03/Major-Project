import React from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Attendance = () => {
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
            <h1 style={{textAlign:'center'}}> Student Attendance </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
                <div className="noNoticeS">
                    <h3 style={{textAlign:'center'}}> No Attendance available for you right now. </h3>
                </div>
                <div className="noticeS">
                    {/* FOR BACKEND */}
                    <table style={{marginLeft: 'auto',marginRight: 'auto',textAlign: 'center',borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                                <td className="date" style={{padding: '0 0 0 20px',verticalAlign: 'middle'}}> SUBJECTS </td>
                                <td className="title" style={{padding: '0 20px 0 20px',verticalAlign: 'middle'}}> PRESENT </td>
                                <td className="title" style={{padding: '0 20px 0 20px',verticalAlign: 'middle'}}> TOTAL SESSIONS </td>
                                <td className="title" style={{padding: '0 20px 0 20px',verticalAlign: 'middle'}}> ATTENDANCE PERCENTAGE </td>
                                <td className="title" style={{padding: '0 0 0 60px',verticalAlign: 'middle'}}> ACTIONS </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Science</td>
                                <td>4</td>
                                <td>30</td>
                                <td>88.88%</td>
                                <td style={{padding: '0 0 0 60px'}}><button style={{ backgroundColor: '#36dff8', borderRadius: '20px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>DEATAILS</button></td>
                            </tr>
                            {/* <tr>
                                <td>English</td>
                                <td>40</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <header>
                      <h1 style={{textAlign:'center'}}> ATTENDANCE DETAILS </h1>
                    </header>
                    <table style={{marginLeft: 'auto',marginRight: 'auto',textAlign: 'center',borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                                <td className="date" style={{padding: '0 0 0 20px',verticalAlign: 'middle'}}> DATE </td>
                                <td className="title" style={{padding: '0 0 0 100px',verticalAlign: 'middle'}}> STATUS </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{padding: '0 0 0 20px'}}>2023-09-06</td>
                                <td  style={{padding: '0 0 0 100px'}}>PRESENT</td>
                            </tr>
                            <tr>
                                <td style={{padding: '0 0 0 20px'}}>2023-09-06</td>
                                <td  style={{padding: '0 0 0 100px'}}>PRESENT</td>
                            </tr>
                            <tr>
                                <td style={{padding: '0 0 0 20px'}}>2023-09-06</td>
                                <td  style={{padding: '0 0 0 100px'}}>PRESENT</td>
                            </tr>
                            <tr>
                                <td style={{padding: '0 0 0 20px'}}>2023-09-06</td>
                                <td  style={{padding: '0 0 0 100px'}}>PRESENT</td>
                            </tr>
                            <tr>
                                <td style={{padding: '0 0 0 20px'}}>2023-09-06</td>
                                <td  style={{padding: '0 0 0 100px'}}>PRESENT</td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{marginLeft: 'auto',marginRight: 'auto',textAlign: 'center',borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                              <td style={{padding: '0 0 0 20px',verticalAlign: 'middle'}}>Mathematics</td>
                              <td  style={{padding: '0 0 0 100px',verticalAlign: 'middle'}}>2</td>
                              <td  style={{padding: '0 0 0 100px',verticalAlign: 'middle'}}>30</td>
                              <td  style={{padding: '0 0 0 100px',verticalAlign: 'middle'}}>88.88%</td>
                              <td  style={{padding: '0 0 0 100px',verticalAlign: 'middle'}}><button style={{ backgroundColor: '#36dff8', borderRadius: '20px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>DEATAILS</button></td>
                            </tr>
                            </thead>
                        </table>
                        <div>Overall Attendance Percentage:88.88%</div>         
                </div>
            </div>
        </div>
        </>
    )
};

export default Attendance;

