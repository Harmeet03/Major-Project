const mongoose = require("mongoose");
const timetableSchema2 = new mongoose.Schema(
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

const timetable2 = mongoose.model('TimeTable2', timetableSchema2);
module.exports = timetable2;