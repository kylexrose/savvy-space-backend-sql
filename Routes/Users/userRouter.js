const express = require('express');
const router = express.Router();

const {
    getUserById,
    createUser,
    login,
    updateUserById,
    deleteUserById
} = require('./userController')

router.get('/find-user-by-id/', getUserById);

router.post('/login', login)

router.post('/create-user', createUser);

router.put('/update-user-by-id', updateUserById);

router.delete('/delete-user-by-id/:id', deleteUserById);

module.exports = router;