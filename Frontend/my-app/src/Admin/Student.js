import React from "react";
import '../App.css';
import Navbar from "./Header";

const Student = () => {
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
            <h1> List of students </h1>
        </header>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> List of students </h2>
            <table id="customers">
  <tr>
    <th>Student name</th>
    <th>Student Admission no.</th>
    <th>Date</th>
    <th>Fees</th>
    <th>Student Class</th>
  </tr>

  <tr>
    <td>Nazukali</td>
    <td>abc123</td>
    <td>gmn</td>
    <td>gmn</td>
    <td>gmn</td>
  </tr>


  </table>
        </div>
        </>
    )
};

export default Student;