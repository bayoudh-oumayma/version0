const mongoose = require('mongoose');

const content = new mongoose.Schema ({
    nom:{type:String},
    phone:{type:Number},
    file :{type:String,
    require:true},
})
module.exports=mongoose.model('content',content)