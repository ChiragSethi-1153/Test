const mongoose =  require('mongoose')
const Users = require('./users')


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    coverImage: {
        type: [String],
        default: []
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    }


}, {timestamps: true})


const Books = mongoose.model('books' , bookSchema)
module.exports = Books