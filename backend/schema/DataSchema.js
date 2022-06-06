const mongoose = require('mongoose');

const Datas = new mongoose.Schema({
    firstname:{
        type:String,
        required:true      
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    value:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Datas",Datas);
