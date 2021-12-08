const db = require('../../server');

function getStudentCourses(req, res){
    try{
        const {student_id} = req.body;
        const sql = `SELECT * FROM Enrollments 
                    LEFT JOIN Courses ON course_id = Courses.course_id
                    WHERE student_id = ${student_id}`;
        db.query(sql, (err, payload)=>{
            if(err){
                res.json({error: err})
            }
            res.json({success: payload})
        })
    }catch(e){
        res.json({error: e})
    }
}

function enrollStudentInCourse(req, res){
    const {student_id, course_id} = req.body;
    const sql = `INSERT INTO Enrollments(student_id, course_id) 
                VALUES (${student_id}, ${course_id})`
    try{
        db.query(sql, (err)=>{
            res.json({error: err})
        })
        res.json({success: 'Student enrolled'})
    }catch(e){
        res.json({error: e})
    }
}
function removeStudentFromCourse(req, res){
    const {student_id, course_id} = req.body;
    const sql =`DELETE FROM Enrollments 
                WHERE student_id = ${student_id} AND course_id = ${course_id};
                DELETE FROM Assigned_Work 
                LEFT JOIN Assignments ON assignment_id = Assigned_Work.assignment_id
                WHERE student_id = ${student_id} AND course_id = ${course_id}`
    try{
        db.query(sql, err =>{
            res.json({error: err})
        })
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