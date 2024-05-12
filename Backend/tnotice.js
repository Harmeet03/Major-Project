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

const tnoticeDetail = mongoose.model('T_Notice_Detail', noticeSchema);
module.exports = tnoticeDetail;