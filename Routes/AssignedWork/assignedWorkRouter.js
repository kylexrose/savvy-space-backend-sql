const express = require('express');
const router = express.Router();

const {
    getStudentAssignmentsByCourse,
    assignGrade
} = require('./assignedWorkController')

router.post('/get-student-assignments-by-course', getStudentAssignmentsByCourse);

router.post('/update-grade', assignGrade);

module.exports = router;