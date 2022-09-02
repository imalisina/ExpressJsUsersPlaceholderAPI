const express = require('express');
const router = express.Router();

const { getAllUsers, 
        getSingleUser, 
        createNewUser, 
        updateSingleUser, 
        deleteSelectedUser } = require('../Controllers/UsersController');

router.get('/', getAllUsers);
router.get('/single/:userId', getSingleUser);
router.post('/create', createNewUser);
router.put('/single/update/:userId', updateSingleUser);
router.delete('single/delete/:userId', deleteSelectedUser);

module.exports = router;