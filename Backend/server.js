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
    }
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});