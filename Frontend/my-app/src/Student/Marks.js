import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Header";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Marks = () => {
    const navigate = useNavigate();
    const [marks, setMarks] = useState([]);

    useEffect(() => {
      const fetchMarks = async () => {
        try {
          const response = await axios.get('http://localhost:4040/marks');
          setMarks(response.data);
        } catch (error) {
          console.error('Error fetching marks:', error);
        }
      };

      fetchMarks();
    }, []);

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
            <h1> Student Marks </h1>
        </header>
        <div style={{padding: "40px 0px"}}>
            <div id="noticeS">
              {marks.length > 0 ? (

                <div className="noticeS">
                    <table id="customers">
                        <thead>
                            <tr>
                              <th>Class</th>
                              <th>Roll No.</th>
                              <th>Student Name</th>
                              <th>Maths</th>
                              <th>English</th>
                              <th>Science</th>
                              <th>SST</th>
                              <th>Hindi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {marks.map(mark => (
                          <tr key={mark._id} className='marks'>
                            <td>{mark.classValue}</td>
                            <td>{mark.rollNumber}</td>
                            <td>{mark.studentName}</td>
                            <td>{mark.mathsMarks}</td>
                            <td>{mark.englishMarks}</td>
                            <td>{mark.scienceMarks}</td>
                            <td>{mark.sstMarks}</td>
                            <td>{mark.hindiMarks}</td>
                          </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
              ) 
              : (
                <div className="noNoticeS">
                    <h3> No List available for you right now. </h3>
                </div>
              )}
            </div>
        </div>
        </>
    )
};

export default Marks;
