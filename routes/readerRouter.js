const Router = require('express')
const router = new Router()
const readerController = require('../controllers/readerController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/get_all_messages', checkRoleMiddleware('READER'), readerController.getAllMessages)

module.exports = router