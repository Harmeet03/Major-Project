import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Notes = () => {
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
            <h1> Notes to Students </h1>
        </header>

        {/* ASSIGNMENT TO STUDENTS */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Send Notes to STUDENTS </h2>
            <form className="form">
                <select className="date">
                    <option> MATHS </option>
                    <option> ENGLISH </option>
                    <option> SST </option>
                    <option> SCIENCE </option>
                    <option> GK </option>
                </select>
                <select className="date">
                    <option> I </option>
                    <option> II </option>
                    <option> III </option>
                    <option> IV </option>
                    <option> V </option>
                    <option> VI </option>
                    <option> VII </option>
                    <option> VIII </option>
                    <option> IX </option>
                    <option> X </option>
                </select>
                <select className="date">
                    <option> A </option>
                    <option> B </option>
                    <option> C </option>
                    <option> D </option>
                </select>
                <input style={{width: "300px"}} className="text" id="text" type="text" placeholder="Place notes link here....." required></input>
                <button type="submit"> Publish </button>
            </form>
        </div>
        </>
    )
};

export default Notes;