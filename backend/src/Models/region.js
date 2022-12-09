const mongoose = require('mongoose');



const regionSchema  = new mongoose.Schema({
    name:{type:String, required:true },
    type:{type:String,required:true},
    parentId:{type:String}
})