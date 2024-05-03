import React, { useState, useEffect } from "react";
import '../App.css';
import Navbar from "./Header";

const Timetable = () => {

    // FOR TIMETABLE OF CLASS I-X
    const [timetables, setTimeTables] = useState([]);

    useEffect(() => {
        fetchTimeTableData();
    }, []);

    const fetchTimeTableData = async () => {
        try {
            const response = await fetch('http://localhost:4040/timetable');
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

    const TimeTable1_Detail = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('http://localhost:4040/timetable', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("TimeTable Created");
                let success = document.getElementById("success");
                success.style.display = 'block'
                } 
            else {
                let failed = document.getElementById("failed");
                failed.style.display = 'block'
                console.log("Failed to create");
            }
        } 
        catch (error) {
            console.log(`Error while creating ${error}`);
            let failed = document.getElementById("failed");
            failed.style.display = 'block'
        }
    }

    // FOR TIMETABLE OF CLASS XI-XII
    const [timetables2, setTimeTables2] = useState([]);

    useEffect(() => {
        fetchTimeTable2Data();
    }, []);

    const fetchTimeTable2Data = async () => {
        try {
            const response = await fetch('http://localhost:4040/timetable2');
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

    const TimeTable2_Detail = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('http://localhost:4040/timetable2', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("TimeTable Created");
                let success = document.getElementById("successs");
                success.style.display = 'block'
                } 
            else {
                let failed = document.getElementById("failedd");
                failed.style.display = 'block'
                console.log("Failed to create");
            }
        } 
        catch (error) {
            console.log(`Error while creating ${error}`);
            let failed = document.getElementById("failed");
            failed.style.display = 'block'
        }
    }

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
            <h2> Create Time Table for STUDENTS of class I-X </h2>
            <form className="form" onSubmit={TimeTable1_Detail}>
                <div id="form">
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="day" type="text" placeholder="Enter Day" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="first" type="text" placeholder="First Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="second" type="text" placeholder="Second Period" required></input>
                    </div><br></br>
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="third" type="text" placeholder="Third Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="fourth" type="text" placeholder="Fourth Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="fifth" type="text" placeholder="Fifth Period" required></input>
                    </div>
                </div>
                <button type="submit"> Create </button>
            </form>
            <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> TimeTable created</b></p>
            <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to create. Server Error</b></p>
        </div>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Create Time Table for STUDENTS of class XI-XII </h2>
            <form className="form"  onSubmit={TimeTable2_Detail}>
                <div id="form">
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="day" type="text" placeholder="Enter Day" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="first" type="text" placeholder="First Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="second" type="text" placeholder="Second Period" required></input>
                    </div><br></br>
                    <div>
                        <input style={{width: "200px"}} className="text" id="text" name="third" type="text" placeholder="Third Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="fourth" type="text" placeholder="Fourth Period" required></input>
                        <input style={{width: "200px"}} className="text" id="text" name="fifth" type="text" placeholder="Fifth Period" required></input>
                    </div>
                </div>
                <button type="submit"> Create </button>
            </form>
            <p id="successs" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> TimeTable created</b></p>
            <p id="failedd" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to create. Server Error</b></p>
        </div>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> CLASS I-X </h2>
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

            <h2> CLASS XI-XII </h2>
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
};

export default Timetable;