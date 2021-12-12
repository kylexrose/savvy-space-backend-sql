const {query,db} = require('../../server');

async function getStudentAssignmentsByCourse(req, res){
    const {course_id, student_id} = req.body;
    const sql = `SELECT * FROM Assigned_Work    
                LEFT JOIN Assignments ON assignment_id = Assigned_Work.assignment_id 
                WHERE student_id = ${db.escape(student_id)} AND course_id = ${db.escape(course_id)}`
    try{
        const studentAssignments = await query(sql);
        res.json({studentAssignments})
    }catch(e){
        res.json({error: e})
    }
}
async function assignGrade(req, res){
    const {student_id, assignment_id, grade} = req.body; 
    const sql = `UPDATE Assigned_Work(grade)
                SET grade = ${db.escape(grade)}
                WHERE assignment_id = ${db.escape(assignment_id)}, student_id = ${db.escape(student_id)})`
    await query(sql);
    res.json({success: "Grade updated..."})
}

module.exports ={
    getStudentAssignmentsByCourse,
    assignGrade,
}