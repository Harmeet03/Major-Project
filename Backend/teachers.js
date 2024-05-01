const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
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

        class: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const teacherDetail = mongoose.model('Teacher_Detail', teacherSchema);
module.exports = teacherDetail;