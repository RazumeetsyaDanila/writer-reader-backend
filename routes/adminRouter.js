const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/users', checkRoleMiddleware('ADMIN'), adminController.users)
router.post('/delete', checkRoleMiddleware('ADMIN'), adminController.user_delete)

module.exports = router