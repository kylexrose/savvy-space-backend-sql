const express = require('express');
const router = express.Router();

const {
    getStudentCourses,
    enrollStudentInCourse,
    removeStudentFromCourse,
    getCourseGrades
} = require('./enrollmentsController')

router.post('/find-courses-by-student-id', getStudentCourses);

router.post('/get-course-grade', getCourseGrades);

router.post('/add-student-to-course', enrollStudentInCourse);

router.delete('/remove-student-from-course', removeStudentFromCourse);

module.exports = router;