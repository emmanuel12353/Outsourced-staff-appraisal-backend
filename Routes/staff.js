const express = require('express');
const Staff = require('../Model/staff');
const StaffList = require('../Controller/staffList')
const Login = require('../Controller/Login')
const router = express.Router();

router.get('/v1/staff', StaffList)
router.post('/v1/login', Login.supervisorlogin)

module.exports = router