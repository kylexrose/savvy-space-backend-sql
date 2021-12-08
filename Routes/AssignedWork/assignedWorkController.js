const db = require('../../server');

function getStudentAssignmentsByCourse(req, res){
    const {course_id, student_id} = req.body;
    const sql = `SELECT * FROM Assigned_Work    
                LEFT JOIN Assignments ON assignment_id = Assigned_Work.assignment_id 
                WHERE student_id = ${student_id} AND course_id = ${course_id}`
    try{
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
function assignGrade(req, res){
    const {student_id, assignment_id, grade} = req.body; 
    const sql = `UPDATE Assigned_Work(grade)
                SET grade = ${grade}
                WHERE assignment_id = ${assignment_id}, student_id = ${student_id})`
}

module.exports ={
    getStudentAssignmentsByCourse,
    getStudentAssignmentsByCourse,
}