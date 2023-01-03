const mongoose = require('mongoose');
const brcypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    userName:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index:true,
        lowercase:true,
        min: 3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        sparse:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin','superAdmin'],
        default:'user'
    },
    contactNumber:{
        type:Number,
        required:true
    },
    profileCompleted:{
        type:String,
        required:true
    },
    address:[
        {
                zip:{type:String},
                ps:{type:String},
                landmark:{type:String},
                state:{type:String},
                district:{type:String},
                line1:{type:String}
        }
    ],
    profilePicture:{type:String},

}, {timestamps:true})

userSchema.virtual('password')
.set(function(password){
    this.hash_password = brcypt.hashSync(password, 10)
})

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchema.methods = {
    authenticate: function(password){
        return brcypt.compareSync(password, this.hash_password)
    }
}


module.exports = mongoose.model('Usersss', userSchema);
