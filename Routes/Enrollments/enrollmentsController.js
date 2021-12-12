const {query,db} = require('../../server');


async function getStudentCourses(req, res){
    try{
        const {student_id} = req.body;
        const sql = `SELECT * FROM Enrollments 
                    LEFT JOIN Courses ON Enrollments.course_id = Courses.course_id
                    WHERE student_id = ${db.escape(student_id)}`;
        const foundStudentCourses = await query(sql);
        res.json({foundStudentCourses})
    }catch(e){
        res.json({error: e})
    }
}

async function enrollStudentInCourse(req, res){
    const {student_id, course_id} = req.body;
    const sql = `INSERT INTO Enrollments(student_id, course_id) 
                VALUES (${db.escape(student_id)}, ${db.escape(course_id)})`
    try{
        await query(sql)
        res.json({success: 'Student enrolled'})
    }catch(e){
        res.json({error: e})
    }
}
async function removeStudentFromCourse(req, res){
    const {student_id, course_id} = req.body;
    const sql =`DELETE FROM Enrollments 
                WHERE student_id = ${db.escape(student_id)} AND course_id = ${db.escape(course_id)};
                DELETE FROM Assigned_Work 
                LEFT JOIN Assignments ON assignment_id = Assigned_Work.assignment_id
                WHERE student_id = ${db.escape(student_id)} AND course_id = ${db.escape(course_id)}`
    try{
        await query(sql)
        res.json({success: 'Student removed from course'})
    }catch(e){
        res.json(e)
    }
}


module.exports = {
    getStudentCourses,
    enrollStudentInCourse,
    removeStudentFromCourse
}