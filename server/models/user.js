const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    phoneNumber: {
        type: String,
        required: [true, 'phone number is required']
    },
    email:{
        type:String,
        required: [true, 'email is required']
    },
    userName:{
        type:String,
        required: [true, 'user name is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password name is required']
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User