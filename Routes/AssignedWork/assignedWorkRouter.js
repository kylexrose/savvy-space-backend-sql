const express = require('express');
const router = express.Router();

const {
    getAllStudentAssignments,
    getStudentAssignmentsByCourse,
    assignWork,
    removeAssignmentFromStudent
} = require('./assignedWorkController')

router.get('/get-all-student-assignments', getAllStudentAssignments);

router.get('/get-student-assignments-by-course', getStudentAssignmentsByCourse);

router.post('/assign-work', assignWork);

router.delete('/remove-assignment-from-student', removeAssignmentFromStudent);

module.exports = router;