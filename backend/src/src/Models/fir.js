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
    pictures:[{img:{typr:String}}],
    firDetails:[{
        subject:{type:String},
        location:{type:String},
        time:{type:String},
        date:{type:String},
        against:{type:String},
        witness:{type:String},
        personsEvolved:{type:String},
        message:{type:String},
    }]
},{timestamps:true});


module.exports = mongoose.model('FIR',firSchema);