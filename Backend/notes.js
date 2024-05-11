const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
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

const notes = mongoose.model('Notes_Detail', noteSchema);
module.exports = notes;