const mongoose = require("mongoose");
const testSchema = new mongoose.Schema(
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

const test = mongoose.model('Test_Detail', testSchema);
module.exports = test;