const mongoose = require("mongoose");
const marksSchema = new mongoose.Schema(
    {
        classValue: {
            type: String,
            require: true
        },

        rollNumber: {
            type: String,
            require: true
        },
        
        studentName: {
            type: String,
            require: true
        },

        mathsMarks: {
            type: String,
            require: true
        },

        englishMarks: {
            type: String,
            require: true
        },

        scienceMarks: {
            type: String,
            require: true
        },

        sstMarks: {
            type: String,
            require: true
        },

        hindiMarks: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const marks = mongoose.model('Student_Marks', marksSchema);
module.exports = marks;