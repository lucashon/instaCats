const express = require('express')
const router = express.Router();


// controller
const UserController = require('../controllers/UserController')

router.get('/cadastro', UserController.cadastro)
router.post('/cadastrosave', UserController.cadastro)
router.get('/login', UserController.login)
router.post('/loginpost', UserController.loginPost)
router.get('/logout', UserController.logout)

module.exports = router