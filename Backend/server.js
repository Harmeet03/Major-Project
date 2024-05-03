const mongoDB = require("./dbConnection");
const express = require("express");
const userID = require("./users");
const bcrypt = require("bcrypt");

mongoDB();

const cors = require("cors");

const connection = {
    origin: 'http://localhost:3000'
};

const app = express();
app.use(cors(connection));

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const request = await fetch('http://localhost:4040/', {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5501'
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        });
        if(request.ok){
            console.log("Server Connected!");
        }
        else{
            console.log("Request Error!");
        }
    }
    catch(error){
        console.log(`Error occurred: ${error}`);
    }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("App is Working");
});

// -------------THIS IS BACKEND FOR ADMIN SIGN UP ---------------

// NOW THIS CODE WILL GET THE DATA FROM BUY FORM (BACKEND OF BUY FORM)
app.post("/userinfo", async function (req, res) {
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userID.create({
            email: req.body.email,
            fname: req.body.fname,
            uname: req.body.uname,
            password: hashPassword
        });

        
        
        console.log("Data sent");
        // Send a success response
        res.status(201).json({ message: "Form submitted successfully", user });
    }
    catch(error){
        console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }

});

// --------------------------------------------------------

// ---- BELOW CODE IS FOR GENERATING OTP ----
// const nodemailer = require('nodemailer');
// const { v4: uuidv4 } = require('uuid');
// const otpMap = {};


// function generateOTP(){
  //   return Math.floor(100000 + Math.random() * 900000);
  // }
  
  // async function sendOTP(email, otp){
    //   const transporter = nodemailer.createTransport({
      //     service: 'Outlook',
      //     auth: {
        //       user: 'hsdhanjal2003@outlook.com',
        //       pass: 'Dhanjal2003'
        //     }
        //   });
        
        //   await transporter.sendMail({
          //     from: 'hsdhanjal2003@outlook.com',
//     to: email,
//     subject: 'Your OTP for SignIn',
//     text: `Your OTP for SignIn is: ${otp}`
//   });
// }

// ------------------------------------------

// -------------THIS IS BACKEND FOR ADMIN SIGN IN ---------------

const userInfo = require("./users");
const bodyParser = require("body-parser");

app.post('/login', async(req, res) => {
  const { uname, password } = req.body;
  
  try{
    const user = await userInfo.findOne({uname});
    if(user){
      const match = await bcrypt.compare(password, user.password);
      if(match){
        res.json({ message: "Login Successful", user });
      }
      else{
        res.status(401).json({ message: "Incorrect Password!" });
      }
    }
    else{
      res.status(401).json({ message: "Invalid Username" });
    }
  }
  catch(error){
    res.status(500).json({error: "ERROR:500. SERVER IS OFFLINE. KINDLY TRY LATER"});
  }
});

// Endpoint to retrieve admin data
app.get("/login", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const admins = await userInfo.find({});
    // Send the fetched data as JSON response
    res.json(admins);
  } catch (error) {
    console.error(`Error while fetching admin data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ----------------------------------------------------------------

// --------------------------------------------------------

// ------------- THIS IS BACKEND FOR TEACHER SIGN UP --------------

app.post("/teacherinfo", async function (req, res) {
  try{
      // const hashPassword = await bcrypt.hash(req.body.password, 10);
      const teacher = await teacherDetail.create({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          class: req.body.class
      });
      
      console.log("Teacher Info Sent");
      // Send a success response
      res.status(201).json({ message: "Form submitted successfully", teacher });
  }
  catch(error){
      console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
      res.status(500).json({ error: 'Internal server error' });
  }

});

// Endpoint to retrieve teacher data
app.get("/teacherinfo", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const teachers = await teacherDetail.find({});
    // Send the fetched data as JSON response
    res.json(teachers);
  } catch (error) {
    console.error(`Error while fetching teacher data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ----------------------------------------------------------------

// ------------- THIS IS BACKEND FOR TEACHER SIGN IN --------------

app.post('/tlogin', async(req, res) => {
  // const otp = generateOTP();
  const { username, password } = req.body;
  // otpMap[email] = otp;
  
  try{
    const user = await teacherDetail.findOne({username});
    if(user){
      if(password == user.password){
        // otpMap[user.email] = otp;
        // await sendOTP(email, otp);
        res.status(200).json({ message: "Login Successful", user });
      }
      else{
        res.status(401).json({ message: "Incorrect Password!" });
      }
    }
    else{
      res.status(401).json({ message: "Invalid Username" });
    }
  }
  catch(error){
    // console.error('Error sending OTP:', error);
    res.status(500).json({error: "ERROR:500. SERVER IS OFFLINE. KINDLY TRY LATER"});
  }
});

// ----------------------------------------------------------------

// ------------- THIS IS BACKEND FOR TEACHER SIGN UP --------------
let studentDetail = require('./students');

app.post("/studentinfo", async function (req, res) {
  try{
      // const hashPassword = await bcrypt.hash(req.body.password, 10);
      const student = await studentDetail.create({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          ano: req.body.ano,
          fees: req.body.fees,
          class: req.body.class
      });
      
      console.log("Student Info Sent");
      // Send a success response
      res.status(201).json({ message: "Form submitted successfully", student });
  }
  catch(error){
      console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
      res.status(500).json({ error: 'Internal server error' });
  }

});

// Endpoint to retrieve student data
app.get("/studentinfo", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const students = await studentDetail.find({});
    // Send the fetched data as JSON response
    res.json(students);
  } catch (error) {
    console.error(`Error while fetching student data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ----------------------------------------------------------------

// ------------- THIS IS BACKEND FOR STUDENT SIGN IN --------------

app.post('/slogin', async(req, res) => {
  // const otp = generateOTP();
  const { uname, password } = req.body;
  // otpMap[email] = otp;
  
  try{
    const user = await userInfo.findOne({uname});
    if(user){
      const match = await bcrypt.compare(password, user.password);
      if(match){
        // otpMap[user.email] = otp;
        // await sendOTP(email, otp);
        res.status(200).json({ message: "Login Successful", user });
      }
      else{
        res.status(401).json({ message: "Incorrect Password!" });
      }
    }
    else{
      res.status(401).json({ message: "Invalid Username" });
    }
  }
  catch(error){
    // console.error('Error sending OTP:', error);
    res.status(500).json({error: "ERROR:500. SERVER IS OFFLINE. KINDLY TRY LATER"});
  }
});

// ----------------------------------------------------------------

// app.post('/verify', async (req, res) => {
//   const { email, otp } = req.body;
  
//   const storedOTP = otpMap[email];
  
//   if(storedOTP && otp === storedOTP){
//     res.status(200).json({ message: 'Sign in successful' });
//   } 
//   else {
//     // If OTP does not match or expired, deny sign in
//     res.status(401).json({ error: 'Invalid OTP' });
//   }
// });

// --------------------- THIS PART IS FOR NOTICE'S BACKEND ---------------------

// ------- This will post admin's notice (JUST LIKE SIGN UP) -------

const noticeDetail = require("./notice");
const teacherDetail = require("./teachers");
app.post("/anotice", async function (req, res) {
  try{
      const user = await noticeDetail.create({
          date: req.body.date,
          message: req.body.message,
      });

      
      
      console.log("Notice sent");
      // Send a success response
      res.status(201).json({ message: "Notice posted successfully", user });
  }
  catch(error){
      console.log(`Error while posting data to notice's backend (MongoDB): ${error}`);
      res.status(500).json({ error: 'Internal server error' });
  }

});

// -----------------------------------------------------------------

// ----------------- THIS IS FOR CREATING TIME TABLE -----------------

// ----- FOR CLASS I-X -------
const timetable = require("./timetable");

app.post("/timetable", async function (req, res) {
  try{
      // const hashPassword = await bcrypt.hash(req.body.password, 10);
      const timetable1 = await timetable.create({
          day: req.body.day,
          first: req.body.first,
          second: req.body.second,
          third: req.body.third,
          fourth: req.body.fourth,
          fifth: req.body.fifth
      });
      
      console.log("TimeTable Sent");
      // Send a success response
      res.status(201).json({ message: "Form submitted successfully", timetable1 });
  }
  catch(error){
      console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
      res.status(500).json({ error: 'Internal server error' });
  }

});

// Endpoint to retrieve student data
app.get("/timetable", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const timetables = await timetable.find({});
    // Send the fetched data as JSON response
    res.json(timetables);
  } catch (error) {
    console.error(`Error while fetching Time Table data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});
// ---------------------

// ----- FOR CLASS XI-XII -------
const timetable2 = require("./timetable2");

app.post("/timetable2", async function (req, res) {
  try{
      // const hashPassword = await bcrypt.hash(req.body.password, 10);
      const timetable = await timetable2.create({
          day: req.body.day,
          first: req.body.first,
          second: req.body.second,
          third: req.body.third,
          fourth: req.body.fourth,
          fifth: req.body.fifth
      });
      
      console.log("TimeTable Sent");
      // Send a success response
      res.status(201).json({ message: "Form submitted successfully", timetable });
  }
  catch(error){
      console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
      res.status(500).json({ error: 'Internal server error' });
  }

});

// Endpoint to retrieve student data
app.get("/timetable2", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const timetables = await timetable2.find({});
    // Send the fetched data as JSON response
    res.json(timetables);
  } catch (error) {
    console.error(`Error while fetching Time Table data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});
// ------------------------------

// -------------------------------------------------------------------

// -----------------------------------------------------------------------------

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});