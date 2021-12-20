const express = require('express');
const router = express.Router();

const {
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
} = require('./studentController')

router.post('/find-student-by-id', getStudentById);

router.post('/add-student', addStudent);

router.put('/update-student-by-id', updateStudentById);

router.delete('/delete-student-by-id/:id', deleteStudentById);

module.exports = router;