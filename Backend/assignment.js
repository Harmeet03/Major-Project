const mongoose = require("mongoose");
const assignmentSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true
        },

        class: {
            type: String,
            required: true
        }, 
        
        section: {
            type: String,
            required: true
        },

        link: {
            type: String,
            required: true
        }
    }, 

    {
        timestamps: true
    }
);

const assignment = mongoose.model('Assignment_Detail', assignmentSchema);
module.exports = assignment;