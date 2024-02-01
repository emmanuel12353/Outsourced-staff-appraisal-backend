const express = require('express');
const Staff = require('../Model/staff');
const StaffList = require('../Controller/staffList')
const router = express.Router();

router.get('/v1/staff', StaffList)

module.exports = router