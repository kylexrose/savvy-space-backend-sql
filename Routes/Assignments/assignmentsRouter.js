const express = require('express');
const router = express.Router();

const {
    getCourseAssignments,
    addAssignment,
    updateAssignment,
    deleteAssignmentById
} = require('./assignmentsController')

router.get('/get-course-assignments', getCourseAssignments);

router.post('/add-assignment', addAssignment);

router.put('/update-assignment', updateAssignment);

router.delete('/delete-assignment/:id', deleteAssignmentById);

module.exports = router;