const express = require('express');
const router = express.Router();

const {
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('./userController')

router.get('/find-user-by-id/:id', getUserById);

router.post('/create-user', createUser);

router.put('/update-user-by-id', updateUserById);

router.delete('/delete-user-by-id/:id', deleteUserById);

module.exports = router;