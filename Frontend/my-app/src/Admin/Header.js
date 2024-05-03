import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
        <nav>
            <span onClick={ () => { navigate("/Admin/Home") }}><i className="fa fa-home"></i>&nbsp; Home </span>
            <span onClick={ () => { navigate("/Admin/Teachers") }}><i className="fa fa-female"></i>&nbsp; Teachers </span>
            <span onClick={ () => { navigate("/Admin/Students") }}><i className="fa fa-child"></i>&nbsp; Students </span>
            {/* <span onClick={ () => { navigate("/Admin/Entry") }}><i className="fa fa-address-book"></i>&nbsp; Entry </span> */}
            <span onClick={ () => { navigate("/Admin/TimeTable") }}><i className="fa fa-group"></i>&nbsp; TimeTable </span>
            <span onClick={ () => { navigate("/Admin/Profile") }}><i className="fa fa-address-card"></i>&nbsp; Profile </span>
            <span onClick={ () => { navigate("/Register") }}><i className="fa fa-step-forward" ></i>&nbsp; Logout</span>
        </nav>
        </>
    )
};

export default Navbar;