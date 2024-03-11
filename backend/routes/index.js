const router = require("express").Router()

router.use('/', require('./auth.routes'))
router.use('/', require('./books.routes'))
router.use('/', require('./user.routes'))
router.use('/', require('./borrow.routes'))
// router.use('/', require('./connections.routes'))
// router.use('/', require('./socket.routes'))

router.use('/', require('./404.routes'))

module.exports = router 