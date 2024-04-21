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

// -------------THIS IS BACKEND FOR SIGN UP ---------------

// NOW THIS CODE WILL GET THE DATA FROM BUY FORM (BACKEND OF BUY FORM)
const otpMap = {};
app.post("/userinfo", async function (req, res) {
    try{
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userID.create({
            email: req.body.email,
            fname: req.body.fname,
            uname: req.body.uname,
            password: hashPassword
        });

        // ---- BELOW CODE IS FOR GENERATING OTP ----
        const nodemailer = require('nodemailer');
        const { v4: uuidv4 } = require('uuid');
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
            auth: {
              user: 'harmeet131003@gmail.com',
              pass: 'Harmeet123'
            }
        });

        const { email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpId = uuidv4();
        
        otpMap[otpId] = { email, otp };

        await transporter.sendMail({
          from: 'harmeet131003@gmail.com',
          to: email,
          subject: 'Your OTP for Signup',
          text: `Your OTP for signup is: ${otp}`
        });
        // ------------------------------------------
        
        console.log("Data sent");
        // Send a success response
        res.status(200).json({ message: 'OTP sent successfully' });
        res.status(201).json({ message: "Form submitted successfully", user });
    }
    catch(error){
        console.log(`Error while sending data to form's backend (MongoDB): ${error}`);
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// --------------------------------------------------------

// -------------THIS IS BACKEND FOR SIGN IN ---------------

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

// --------------------------------------------------------