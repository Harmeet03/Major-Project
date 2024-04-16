const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true
        }, 
        fname: {
            type: String,
            require: true
        }, 

        uname: {
            type: String,
            require: true
        },

        password: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const userID = mongoose.model('UserID', userSchema);
module.exports = userID;