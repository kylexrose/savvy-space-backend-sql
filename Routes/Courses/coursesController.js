const {query,db} = require('../../server');

async function getCourseById(req, res){
    const {course_id} = req.body;
    const sql = `SELECT * FROM Courses WHERE course_id = ${db.escape(course_id)};`
    try{
        const foundCourse = await query(sql);
        res.json({foundCourse: foundCourse[0]})
    }catch(e){
        res.json({e})
    }
}
    // addCourse
    // updateCourseById
    // deleteCourseById


module.exports = {
    getCourseById,
//     addCourse,
//     updateCourseById,
//     deleteCourseById
}