const express = require('express');
const router = express.Router();

const {
    getCourseById,
    addCourse,
    updateCourseById,
    deleteCourseById
} = require('./coursesController')

router.post('/find-course/', getCourseById);

// router.post('/add-course', addCourse);

// router.put('/update-course', updateCourseById);

// router.delete('/delete-course/:id', deleteCourseById);

module.exports = router;