const {booksController} = require('../controller')
const { verifyToken } = require('../middleware/auth')
const { upload } = require('../middleware/upload')


const router = require('express').Router()

router.post('/book', verifyToken, upload, booksController.addBook)
router.put('/book/:bookId', verifyToken, upload, booksController.editBook)
router.delete('/book/:bookId', verifyToken, booksController.deleteBook)
router.get('/books', verifyToken, booksController.getAllBooks)
router.get('/searchBooks', verifyToken, booksController.searchBooks)




module.exports = router 