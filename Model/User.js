const mongoose = require('mongoose');

// creating user schema to store user data in db.
// making email unique so that we can identify user.
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},
    {
        timestamps:true
    }

);

const User = mongoose.model('User', userSchema);

// exporting the User Schema
module.exports = User;
