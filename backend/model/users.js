const mongoose =  require('mongoose');
const Books = require('./books');

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    }


}, {timestamps: true})


const Users = mongoose.model('users' , userSchema)
module.exports = Users