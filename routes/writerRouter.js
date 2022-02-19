const Router = require('express')
const router = new Router()
const writerController = require('../controllers/writerController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/message_create', checkRoleMiddleware('WRITER'), writerController.messageCreate)
router.post('/message_delete', checkRoleMiddleware('WRITER'), writerController.messageDelete)
router.post('/messages_get', checkRoleMiddleware('WRITER'), writerController.messagesGet)

module.exports = router