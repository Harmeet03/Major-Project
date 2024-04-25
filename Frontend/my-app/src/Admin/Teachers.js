import React from "react";
import '../App.css';
import Navbar from "./Header";

const Teachers = () => {
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
            <h1> Admin Dashboard </h1>
        </header>

        {/* NOTICE TO TEACHERS */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Send Username and Password to TEACHERS </h2>
            <form className="form">
                <input className="text" id="text" type="text" placeholder="Write your message here...." required></input>
                <button type="submit"> Send </button>
            </form>
        </div>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Table related to teachers username and password data </h2>
            <table id="customers">
  <tr>
    <th>Teacher name</th>
    <th>Teacher username</th>
    <th>Teacher password</th>
  </tr>

  <tr>
    <td>Nazukali</td>
    <td>abc123</td>
    <td>gmn</td>
  </tr>


  </table>
        </div>
        </>
    )
};

export default Teachers;