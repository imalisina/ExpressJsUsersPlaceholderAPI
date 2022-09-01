const express = require('express');
const router = express.Router();

const { getAllUsers, getSingleUser, createNewUser } = require('../Controllers/UsersController');

router.get('/', getAllUsers);
router.get('/single/:userId', getSingleUser);
router.post('/create', createNewUser);
// START FROM HERE TO MAKE UPDATE SECTION AND DELETE SECTION...

module.exports = router;