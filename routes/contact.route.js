const express = require('express')
const {ContactUser} = require('../controller/contact.controller.js')

const router = express.Router();
router.post('/contactuser',ContactUser)

module.exports = router