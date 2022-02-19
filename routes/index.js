const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')
const writerRouter = require('./writerRouter')
const readerRouter = require('./readerRouter')

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/writer', writerRouter)
router.use('/reader', readerRouter)

module.exports = router