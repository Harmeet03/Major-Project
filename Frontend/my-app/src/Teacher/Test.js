import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Test = () => {
    const navigate = useNavigate();

    const Test_Detail = async(event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        try {
            const response = await fetch('http://localhost:4040/test', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject),
            });
    
            if (response.ok) {
                console.log("Test Sent");
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
            <h1> Test to Students </h1>
        </header>

        {/* ASSIGNMENT TO STUDENTS */}
        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
            <h2> Send Test to STUDENTS </h2>
            <form className="form" onSubmit={Test_Detail}>
                <select className="date" name="subject">
                    <option> Maths </option>
                    <option> English </option>
                    <option> Hindi </option>
                    <option> French </option>
                    <option> Art and Craft </option>
                    <option> EVS </option>
                    <option> Politics </option>
                </select>
                <select className="date" name="class">
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
                <select className="date"  name="section">
                    <option> A </option>
                    <option> B </option>
                    <option> C </option>
                    <option> D </option>
                </select>
                <input style={{width: "300px"}} className="text" id="text" type="text" placeholder="Place assignment link here....." name="link" required></input>
                <button type="submit"> Publish </button>
            </form>
            <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Test sent</b></p>
            <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to sent. Server Error</b></p>
        </div>
        </>
    )
};

export default Test;