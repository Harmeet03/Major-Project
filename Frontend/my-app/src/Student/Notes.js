import React, { useState, useEffect } from "react";
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotestData();
    }, []);

    const fetchNotestData = async () => {
        try {
            const response = await fetch('https://school-erp-system.onrender.com/notes');
            if (response.ok) {
                const data = await response.json();
                setNotes(data.notes);
            } else {
                console.log("Failed to fetch Notes data");
            }
        } catch (error) {
            console.error("Error fetching Notes data:", error);
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
            <h1> Student Notes </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
                {notes.length > 0 ? (
                    <table id="customers">
                        <tr>
                            <th>Subject</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Link</th>
                        </tr>
                        {notes.map((note, index) => (
                                <tr key={index}>
                                    <td>{note.subject}</td>
                                    <td>{note.class}</td>
                                    <td>{note.section}</td>
                                    <td>{note.link}</td>
                                </tr>
                            ))
                        }
                    </table>
                ) 
                : (
                    <div className="noNoticeS">
                        <h3> No Notes available for you right now. </h3>
                    </div>
                )}
            </div>
        </div>
        </>
    )
};

export default Notes;