import React, { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const TimeTable = () => {

    // FOR TIMETABLE OF CLASS I-X
    const [timetables, setTimeTables] = useState([]);

    useEffect(() => {
        fetchTimeTableData();
    }, []);

    const fetchTimeTableData = async () => {
        try {
            const response = await fetch('https://school-erp-system.onrender.com/timetable');
            if (response.ok) {
                const data = await response.json();
                setTimeTables(data);
            } else {
                console.log("Failed to fetch TimeTable data");
            }
        } catch (error) {
            console.error("Error fetching TimeTable data:", error);
        }
    };

    // FOR TIMETABLE OF CLASS XI-XII
    const [timetables2, setTimeTables2] = useState([]);

    useEffect(() => {
        fetchTimeTable2Data();
    }, []);

    const fetchTimeTable2Data = async () => {
        try {
            const response = await fetch('https://school-erp-system.onrender.com/timetable2');
            if (response.ok) {
                const data = await response.json();
                setTimeTables2(data);
            } else {
                console.log("Failed to fetch TimeTable data");
            }
        } catch (error) {
            console.error("Error fetching TimeTable data:", error);
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
            <h1> Time Table </h1>
        </header>
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> CLASS I-V </h2>
            <table>
                <tr>
                    <th>Day/Period</th>
                    <th>I<br/>9:30-10:20</th>
                    <th>II<br/>10:20-11:10</th>
                    <th>III<br/>11:10-12:00</th>
                    <th>12:00-12:40</th>
                    <th>IV<br/>12:40-1:30</th>
                </tr>
                {
                    timetables.map((timetable, index) => (
                        <tr key={index}>
                            <td class="highlight"><b>{timetable.day}</b></td>
                            <td>{timetable.first}</td>
                            <td>{timetable.second}</td>
                            <td>{timetable.third}</td>
                            <td>{timetable.fourth}</td>
                            <td>{timetable.fifth}</td>
                        </tr>
                    ))}
            </table>

            <h2> CLASS VI-X </h2>
            <table>
                <tr>
                    <th>Day/Period</th>
                    <th>I<br/>9:30-10:20</th>
                    <th>II<br/>10:20-11:10</th>
                    <th>III<br/>11:10-12:00</th>
                    <th>12:00-12:40</th>
                    <th>IV<br/>12:40-1:30</th>
                </tr>
                {
                    timetables2.map((timetable, index) => (
                        <tr key={index}>
                            <td class="highlight"><b>{timetable.day}</b></td>
                            <td>{timetable.first}</td>
                            <td>{timetable.second}</td>
                            <td>{timetable.third}</td>
                            <td>{timetable.fourth}</td>
                            <td>{timetable.fifth}</td>
                        </tr>
                    ))}
            </table>
        </div>
        </>
    )
}

export default TimeTable;