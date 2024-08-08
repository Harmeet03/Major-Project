const mongoDB = require("./dbConnection");
const express = require("express");
const userID = require("./users");
const bcrypt = require("bcryptjs");

mongoDB();

const cors = require("cors");
const connection = {
    origin: 'http://localhost:3000',
    credentials: true
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

// -------------THIS IS BACKEND FOR ADMIN SIGN IN ---------------

const userInfo = require("./users");

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

const teacherDetail = require("./teachers");
app.post("/teacherinfo", async function (req, res) {
  try{
      // const hashPassword = await bcrypt.hash(req.body.password, 10);
      const teacher = await teacherDetail.create({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          class: req.body.class,
          subject: req.body.subject
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

app.get("/teacherinfo", async (req, res) => {
  try {
    // Query MongoDB to fetch only sign in teacher document at a time
      const teacher = await teacherDetail.find({});
      // Send the fetched data as JSON response
      if(teacher){
        res.json(teacher);
      }
      else {
        res.status(404).json({ error: "Teacher not found" });
      }
  } 
  catch (error) {
      console.error(`Error while fetching teacher data: ${error}`);
      // Send an error response if something goes wrong
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to retrieve teacher data
app.get("/teacherinfo/:username", async (req, res) => {
  try {
    // Query MongoDB to fetch only sign in teacher document at a time
      const username = req.params.username;
      const teacher = await teacherDetail.findOne({ username });
      // Send the fetched data as JSON response
      if(teacher){
        res.json(teacher);
      }
      else {
        res.status(404).json({ error: "Teacher not found" });
      }
  } 
  catch (error) {
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

// ------------- THIS IS BACKEND FOR TEACHER'S STUDENT LIST --------------
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

app.get("/studentinfo/:username", async (req, res) => {
  try {
    // Query MongoDB to fetch only sign in teacher document at a time
      const username = req.params.username;
      const student = await studentDetail.findOne({ username });
      // Send the fetched data as JSON response
      if(student){
        res.json(student);
      }
      else {
        res.status(404).json({ error: "Student not found" });
      }
  } 
  catch (error) {
      console.error(`Error while fetching student data: ${error}`);
      // Send an error response if something goes wrong
      res.status(500).json({ error: 'Internal server error' });
  }
});

// ----------------------------------------------------------------

// ------------- THIS IS BACKEND FOR STUDENT SIGN IN --------------

app.post('/slogin', async(req, res) => {
  // const otp = generateOTP();
  const { username, password } = req.body;
  // otpMap[email] = otp;
  
  try{
    const student = await studentDetail.findOne({username});
    if(student){
      if(password == student.password){
        // otpMap[user.email] = otp;
        // await sendOTP(email, otp);
        res.status(200).json({ message: "Login Successful", student});
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

// app.post('/otp', async(req, res) => {
  // const otp = generateOTP();
  // const { email } = req.body;
  // otpMap[email] = otp;
  
//   try{
//     const student = await studentDetail.findOne({username});
//     if(student){
//       if(password == student.password){
//         otpMap[user.email] = otp;
//         await sendOTP(email, otp);
//         res.status(200).json({ message: "Login Successful", student});
//       }
//       else{
//         res.status(401).json({ message: "Incorrect Password!" });
//       }
//     }
//     else{
//       res.status(401).json({ message: "Invalid Username" });
//     }
//   }
//   catch(error){
//     console.error('Error sending OTP:', error);
//     res.status(500).json({error: "ERROR:500. SERVER IS OFFLINE. KINDLY TRY LATER"});
//   }
// });

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

// -------------------------------------------- THIS PART IS FOR NOTICE'S BACKEND --------------------------------------------

// ------- This will post admin's notice to teacher (JUST LIKE SIGN UP) -------

const noticeDetail = require("./notice");
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

// ----- This will get admin's notice to teacher (JUST LIKE SIGN IN) -----

app.get("/anotice", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const details = await noticeDetail.find({});
    // Send the fetched data as JSON response
    res.json(details);
  } catch (error) {
    console.error(`Error while fetching notice data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------------------------------------------------------

// ------- This will post teacher's notice to students (JUST LIKE SIGN UP) -------

const tnoticeDetail = require("./tnotice");
app.post("/tnotice", async function (req, res) {
  try{
      const user = await tnoticeDetail.create({
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

// ----- This will get teacher's notice to students (JUST LIKE SIGN IN) -----

app.get("/tnotice", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const details = await tnoticeDetail.find({});
    // Send the fetched data as JSON response
    res.json(details);
  } catch (error) {
    console.error(`Error while fetching notice data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------


// ----------------- THIS IS FOR CREATING TIME TABLE -----------------

// ----- FOR CLASS I-V -------
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

// ----- FOR CLASS VI-X -------
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

// --------------------- THIS IS FOR POSTING ASSIGNMENT ------------------------
// POSTING ASSIGNMENT (POST)
const assignment = require("./assignment");

app.post("/assignment", async function (req, res){
  try{
    const assignments = await assignment.create({
      subject: req.body.subject,
      class: req.body.class,
      section: req.body.section,
      link: req.body.link
  });
  
  console.log("Assignment Sent");
  // Send a success response
  res.status(201).json({ message: "Assignment submitted successfully", assignments });
}
catch(error){
  console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
  res.status(500).json({ error: 'Internal server error' });
}
})

// PRINTING ASSIGNMENT (GET)
app.get("/assignment", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const assignments = await assignment.find({});
    const count = await assignment.countDocuments();
    // Send the fetched data as JSON response
    const responseData = {
      assignments: assignments,
      count: count
    }
    res.json(responseData);
  } catch (error) {
    console.error(`Error while fetching Assignment data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------------------------------------------------------------

// --------------------- THIS IS FOR POSTING NOTES ------------------------
// POSTING NOTES (POST)
const note = require("./notes");

app.post("/notes", async function (req, res){
  try{
    const notes = await note.create({
      subject: req.body.subject,
      class: req.body.class,
      section: req.body.section,
      link: req.body.link
  });
  
  console.log("Notes Sent");
  // Send a success response
  res.status(201).json({ message: "Notes submitted successfully", notes });
}
catch(error){
  console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
  res.status(500).json({ error: 'Internal server error' });
}
})

// PRINTING NOTES (GET)
app.get("/notes", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const notes = await note.find({});
    const count = await note.countDocuments();
    // Send the fetched data as JSON response
    const responseData = {
      notes: notes,
      count: count
    }
    res.json(responseData);
  } catch (error) {
    console.error(`Error while fetching Notes data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------------------------------------------------------------

// --------------------- THIS IS FOR POSTING TEST ------------------------
// POSTING TEST (POST)
const test = require("./test");

app.post("/test", async function (req, res){
  try{
    const tests = await test.create({
      subject: req.body.subject,
      class: req.body.class,
      section: req.body.section,
      link: req.body.link
  });
  
  console.log("Test Sent");
  // Send a success response
  res.status(201).json({ message: "Test submitted successfully", tests });
}
catch(error){
  console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
  res.status(500).json({ error: 'Internal server error' });
}
})

// PRINTING TEST (GET)
app.get("/test", async (req, res) => {
  try {
    // Query MongoDB to fetch all teacher documents
    const tests = await test.find({});
    const count = await test.countDocuments();
    // Send the fetched data as JSON response
    const responseData = {
      tests: tests,
      count: count
    }
    res.json(responseData);
  } catch (error) {
    console.error(`Error while fetching Test data: ${error}`);
    // Send an error response if something goes wrong
    res.status(500).json({ error: 'Internal server error' });
  }
});

// -----------------------------------------------------------------------------

// --------------------- THIS IS FOR POSTING MARKS ------------------------

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Marks = require('./marks');

// Route to store record
app.post('/marks', async (req, res) => {
  try {
    const { classValue, rollNumber, studentName, mathsMarks, englishMarks, scienceMarks, sstMarks, hindiMarks } = req.body;
    const newMarks = new Marks({ classValue, rollNumber, studentName, mathsMarks, englishMarks, scienceMarks, sstMarks, hindiMarks });
    await newMarks.save();
    res.status(201).json({ message: 'Marks stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch record
app.get('/marks', async (req, res) => {
  try {
    const marks = await Marks.find();
    res.json(marks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete marks
app.delete('/marks', async (req, res) => {
  try {
    const { rollNumber, studentName } = req.body;
    const deletedMark = await Marks.deleteOne({ rollNumber, studentName });
    if (deletedMark.deletedCount === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// -----------------------------------------------------------------------

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});