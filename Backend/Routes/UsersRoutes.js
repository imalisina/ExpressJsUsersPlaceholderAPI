const express = require('express');
const router = express.Router();

const { getAllUsers, getSingleUser, createNewUser, updateSingleUser } = require('../Controllers/UsersController');

router.get('/', getAllUsers);
router.get('/single/:userId', getSingleUser);
router.post('/create', createNewUser);
router.put('/single/update/:userId', updateSingleUser);
// DELETE SECTION

module.exports = router;