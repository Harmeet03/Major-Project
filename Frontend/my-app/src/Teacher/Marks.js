import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";

const Marks = () => {
    const navigate = useNavigate();

    const [sendClassValue, setSendClassValue] = useState('');
    const [sendRollNumber, setSendRollNumber] = useState('');
    const [sendStudentName, setSendStudentName] = useState('');
    const [sendMathsMarks, setSendMathsMarks] = useState('');
    const [sendEnglishMarks, setSendEnglishMarks] = useState('');
    const [sendScienceMarks, setSendScienceMarks] = useState('');
    const [sendSstMarks, setSendSstMarks] = useState('');
    const [sendHindiMarks, setSendHindiMarks] = useState('');

    const [deleteRollNumber, setDeleteRollNumber] = useState('');
    const [deleteStudentName, setDeleteStudentName] = useState('');

    const handleSendSubmit = async (e) => {
      e.preventDefault();
      if (!sendClassValue || !sendRollNumber || !sendStudentName || !sendMathsMarks || !sendEnglishMarks || !sendScienceMarks || !sendSstMarks || !sendHindiMarks) {
        alert('Please enter all the data');
        return;
      }
      try {
        await axios.post('http://localhost:8080/api/marks', {
          classValue: sendClassValue,
          rollNumber: sendRollNumber,
          studentName: sendStudentName,
          mathsMarks: sendMathsMarks,
          englishMarks: sendEnglishMarks,
          scienceMarks: sendScienceMarks,
          sstMarks: sendSstMarks,
          hindiMarks: sendHindiMarks
        });
        let successs = document.getElementById("successs");
        successs.style.display = 'block'
        setSendClassValue('');
        setSendRollNumber('');
        setSendStudentName('');
        setSendMathsMarks('');
        setSendEnglishMarks('');
        setSendScienceMarks('');
        setSendSstMarks('');
        setSendHindiMarks('');
      } 
      catch (error) {
        console.error(error);
        let failedd = document.getElementById("failedd");
        failedd.style.display = 'block'
      }
    };

    const handleDeleteSubmit = async (e) => {
      e.preventDefault();
      if (!deleteRollNumber || !deleteStudentName) {
        alert('Please enter roll number and student name');
        return;
      }
      try {
        await axios.delete('http://localhost:8080/api/marks', {
          data: {
            rollNumber: deleteRollNumber,
            studentName: deleteStudentName
          }
        });
        let success = document.getElementById("success");
        success.style.display = 'block'
        setDeleteRollNumber('');
        setDeleteStudentName('');
      } 
      catch (error) {
        console.error(error);
        let failed = document.getElementById("failed");
        failed.style.display = 'block'
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
            <h1> Marks to Students </h1>
        </header>

        <div style={{marginTop: "40px", textAlign: "center"}} id="noticeS">
          <div className="noticeS">
            <div>
              <h2>Enter Student Marks</h2>
              <form className="form" onSubmit={handleSendSubmit}>
                <div>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="text"
                      value={sendClassValue}
                      onChange={(e) => setSendClassValue(e.target.value)}
                      placeholder='Class'
                      required
                    />
                  </div><br></br>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="text"
                      value={sendRollNumber}
                      onChange={(e) => setSendRollNumber(e.target.value)}
                      placeholder='Roll No'
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="text"
                      value={sendStudentName}
                      onChange={(e) => setSendStudentName(e.target.value)}
                      placeholder='Name'
                      required
                    />
                  </div><br></br>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="number"
                      value={sendMathsMarks}
                      onChange={(e) => setSendMathsMarks(e.target.value)}
                      placeholder='Maths'
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="number"
                      value={sendEnglishMarks}
                      onChange={(e) => setSendEnglishMarks(e.target.value)}
                      placeholder='EVS'
                      required
                    />
                  </div><br></br>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="number"
                      value={sendScienceMarks}
                      onChange={(e) => setSendScienceMarks(e.target.value)}
                      placeholder='Hindi'
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="number"
                      value={sendSstMarks}
                      onChange={(e) => setSendSstMarks(e.target.value)}
                      placeholder='English'
                      required
                    />
                  </div><br></br>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="number"
                      value={sendHindiMarks}
                      onChange={(e) => setSendHindiMarks(e.target.value)}
                      placeholder='Art & Craft'
                      required
                    />
                  </div>
                </div>                
                <button type="submit">Send</button>
              </form>
              <p id="successs" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Student Marks added</b></p>
              <p id="failedd" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to add. Server Error</b></p>
              <div>
                <h2>Delete Record from Database</h2>
                <form className="form" onSubmit={handleDeleteSubmit}>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="text"
                      value={deleteRollNumber}
                      onChange={(e) => setDeleteRollNumber(e.target.value)}
                      placeholder='Roll No'
                      required
                    />
                  </div>
                  <div>
                    <input className="date" style={{width: "100px"}}
                      type="text"
                      value={deleteStudentName}
                      onChange={(e) => setDeleteStudentName(e.target.value)}
                      placeholder='Name'
                      required
                    />
                  </div>
                  <button type="submit">Delete</button>
                </form>
                <p id="success" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Student Marks deleted</b></p>
                <p id="failed" style={{color: "rgb(98, 98, 250)", display: "none"}}><b> Failed to delete. Server Error</b></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};

export default Marks;
