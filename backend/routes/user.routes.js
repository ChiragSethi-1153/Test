const router = require('express').Router()
const { userController } = require('../controller')
const { verifyToken } = require('../middleware/auth')

router.get('/users', verifyToken, userController.getAllusers)
router.get('/searchUser', verifyToken, userController.searchUser)

module.exports = router 