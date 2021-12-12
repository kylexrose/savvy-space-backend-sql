const express = require('express');
const router = express.Router();

const {
    getStudentCourses,
    enrollStudentInCourse,
    removeStudentFromCourse
} = require('./enrollmentsController')

router.get('/find-courses-by-student-id', getStudentCourses);

router.post('/add-student-to-course', enrollStudentInCourse);

router.delete('/remove-student-from-course', removeStudentFromCourse);

module.exports = router;