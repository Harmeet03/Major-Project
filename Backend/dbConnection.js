const mongoose = require("mongoose");
const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb+srv://hsdhanjal2003:1234@cluster0.iimvpuk.mongodb.net/", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Database is connected");
    }
    catch(error){
        console.log(`Database Connection fail: ${error}`);
    }
};

module.exports = dbConnect;