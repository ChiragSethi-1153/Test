const mongoose =  require('mongoose')
const Users = require('./users')
const Books = require('./books')


const borrowerSchema = new mongoose.Schema({
    
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Books
    },
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users
    },
    status: {
        type: String,
        enum: ['borrowed', 'returned', 'late'],
        default: 'borrowed'
    }

}, {timestamps: true})


const Borrowed = mongoose.model('borrowed' , borrowerSchema)
module.exports = Borrowed