import React from "react";
import '../App.css';
import Navbar from "./Header";

const Timetable = () => {
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
    <table>
        <tr>
            <th>Day/Period</th>
            <th>I<br/>9:30-10:20</th>
            <th>II<br/>10:20-11:10</th>
            <th>III<br/>11:10-12:00</th>
            <th>12:00-12:40</th>
            <th>IV<br/>12:40-1:30</th>
            <th>V<br/>1:30-2:20</th>
            <th>VI<br/>2:20-3:10</th>
            <th>VII<br/>3:10-4:00</th>
        </tr>
        <tr>
            <td class="highlight"><b>Monday</b></td>
            <td>Eng</td>
            <td>Mat</td>
            <td>Che</td>
            <td rowspan="6" class="special"><b>LUNCH</b></td>
            <td colspan="3" class="special">LAB</td>
            <td>Phy</td>
        </tr>
        <tr>
            <td class="highlight"><b>Tuesday</b></td>
            <td colspan="3" class="special">LAB</td>
            <td>Eng</td>
            <td>Che</td>
            <td>Mat</td>
            <td class="special">SPORTS</td>
        </tr>
        <tr>
            <td class="highlight"><b>Wednesday</b></td>
            <td>Mat</td>
            <td>Phy</td>
            <td>Eng</td>
            <td>Che</td>
            <td colspan="3">LIBRARY</td>
        </tr>
        <tr>
            <td class="highlight"><b>Thursday</b></td>
            <td>Phy</td>
            <td>Eng</td>
            <td>Che</td>
            <td colspan="3" class="special">LAB</td>
            <td>Mat</td>
        </tr>
        <tr>
            <td class="highlight"><b>Friday</b></td>
            <td colspan="3" class="special">LAB</td>
            <td>Mat</td>
            <td>Che</td>
            <td>Eng</td>
            <td>Phy</td>
        </tr>
        <tr>
            <td class="highlight"><b>Saturday</b></td>
            <td>Eng</td>
            <td>Che</td>
            <td>Mat</td>
            <td colspan="3">SEMINAR</td>
            <td class="special">SPORTS</td>
        </tr>
    </table>
        </div>
        </>
    )
};

export default Timetable;