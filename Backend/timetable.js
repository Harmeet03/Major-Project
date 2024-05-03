const mongoose = require("mongoose");
const timetableSchema = new mongoose.Schema(
    {
        day: {
            type: String,
            require: true
        },

        first: {
            type: String,
            require: true
        },

        second: {
            type: String,
            require: true
        }, 
        
        third: {
            type: String,
            require: true
        },

        fourth: {
            type: String,
            require: true
        },

        fifth: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const timetable = mongoose.model('TimeTable1', timetableSchema);
module.exports = timetable;