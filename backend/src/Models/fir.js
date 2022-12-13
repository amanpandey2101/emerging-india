const mongoose = require('mongoose');


const firSchema = new mongoose.Schema({
    informerName:{type:String,required:true},
    identityProof:[
        {
            category:{type:String,required:true},
            id:{type:String,required:true}
        }
    ],
    address:{type:String,required:true},
    firDetails:[{
        info:{type:String},
        location:{type:String},
        images:{type:String},
        against:{type:String}
    }]
},{timestamps:true});



module.exports = mongoose.model('FIR',firSchema);