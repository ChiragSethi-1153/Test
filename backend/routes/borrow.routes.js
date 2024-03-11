const router = require('express').Router()
const { borrowController } = require('../controller')
const { verifyToken } = require('../middleware/auth')

router.post('/borrower', verifyToken, borrowController.createBorrower)
router.put('/borrower/:borrowId', verifyToken, borrowController.editBorrower)
router.get('/borrowers', verifyToken, borrowController.getAllBorrowers)

module.exports = router 