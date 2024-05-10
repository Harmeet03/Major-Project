const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        username: {
            type: String,
            required: true
        }, 
        
        password: {
            type: String,
            required: true
        },

        class: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        }
    }, 

    {
        timestamps: true
    }
);

const teacherDetail = mongoose.model('Teacher_Detail', teacherSchema);
module.exports = teacherDetail;