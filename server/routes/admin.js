const router = require('express').Router()
const ctrls = require('../controllers/admin')

router.post('/register', ctrls.register)

module.exports = router