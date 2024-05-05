// import React from "react";
// import '../App.css';
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Header";

// const Marks = () => {
//     const navigate = useNavigate()
//     return(
//         <>
//         <head>
//             <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
//             <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
//             <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
//             <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
//         </head>
//         <Navbar/>
//         <header>
//             <h1> Marks to Students </h1>
//         </header>

//         {/* NOTICE FROM ADMIN */}
//         <div style={{marginTop: "40px"}} id="noticeS">
//             {/* <div className="noNoticeS">
//                 <h3> No List available for you right now. </h3>
//             </div> */}
//             <div className="noticeS">
//                 {/* FOR BACKEND */}
//                 <table>
//                     <thead>
//                         <tr>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>

//                         </tr>
//                         <tr>

//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </>
//     )
// };

// export default Marks;


import React, { useState } from 'react';
import axios from 'axios';

const Marks = () => {
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
      alert('Marks stored successfully');
      setSendClassValue('');
      setSendRollNumber('');
      setSendStudentName('');
      setSendMathsMarks('');
      setSendEnglishMarks('');
      setSendScienceMarks('');
      setSendSstMarks('');
      setSendHindiMarks('');
    } catch (error) {
      console.error(error);
      alert('Error storing marks');
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
    alert('Record deleted successfully');
    setDeleteRollNumber('');
    setDeleteStudentName('');
  } catch (error) {
    console.error(error);
    alert('Error deleting record');
  }
};

  return (
    <div>
      <h1>Enter Student Marks</h1>
      <form onSubmit={handleSendSubmit}>
        <div>
          <label>Class:</label>
          <input
            type="text"
            value={sendClassValue}
            onChange={(e) => setSendClassValue(e.target.value)}
          />
        </div>
        <div>
          <label>Roll Number:</label>
          <input
            type="text"
            value={sendRollNumber}
            onChange={(e) => setSendRollNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={sendStudentName}
            onChange={(e) => setSendStudentName(e.target.value)}
          />
        </div>
        <div>
          <label>Maths Marks:</label>
          <input
            type="number"
            value={sendMathsMarks}
            onChange={(e) => setSendMathsMarks(e.target.value)}
          />
        </div>
        <div>
          <label>English Marks:</label>
          <input
            type="number"
            value={sendEnglishMarks}
            onChange={(e) => setSendEnglishMarks(e.target.value)}
          />
        </div>
        <div>
          <label>Science Marks:</label>
          <input
            type="number"
            value={sendScienceMarks}
            onChange={(e) => setSendScienceMarks(e.target.value)}
          />
        </div>
        <div>
          <label>SST Marks:</label>
          <input
            type="number"
            value={sendSstMarks}
            onChange={(e) => setSendSstMarks(e.target.value)}
          />
        </div>
        <div>
          <label>Hindi Marks:</label>
          <input
            type="number"
            value={sendHindiMarks}
            onChange={(e) => setSendHindiMarks(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </form>


<div>
  <h1>Delete Record from Database</h1>
  <form onSubmit={handleDeleteSubmit}>
    <div>
      <label>Roll Number:</label>
      <input
        type="text"
        value={deleteRollNumber}
        onChange={(e) => setDeleteRollNumber(e.target.value)}
      />
    </div>
    <div>
      <label>Student Name:</label>
      <input
        type="text"
        value={deleteStudentName}
        onChange={(e) => setDeleteStudentName(e.target.value)}
      />
    </div>
    <button type="submit">Delete</button>
  </form>
</div>
    </div>
  );
};

export default Marks;
