const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            require: true
        }, 
        
        message: {
            type: String,
            require: true
        }
    }, 

    {
        timestamps: true
    }
);

const noticeDetail = mongoose.model('Notice_Detail', noticeSchema);
module.exports = noticeDetail;