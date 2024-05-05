const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },

        username: {
            type: String,
            require: true
        }, 
        
        password: {
            type: String,
            require: true
        },

        ano: {
            type: Number,
            require: true
        },

        fees: {
            type: Number,
            require: true
        },

        class: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const studentDetail = mongoose.model('Student_Detail', studentSchema);
module.exports = studentDetail;