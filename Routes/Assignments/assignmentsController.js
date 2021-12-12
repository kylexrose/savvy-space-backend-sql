const {query,db} = require('../../server');


async function getCourseAssignments(req, res){
    const {course_id}= req.body;
    const sql = `SELECT * FROM Assignment WHERE course_id = ${db.escape(course_id)}`
    try{
        const foundCourseAssignments = await query(sql)
        res.json({foundCourseAssignments})
    }catch(e){
        res.json({error: e})
    }
}
async function addAssignment(req, res){
    const {due, assignment_name, details, total_points, course_id} = req.body;
    const sql = `INSERT INTO Assignments(due, assignment_name, details, total_points, course_id)
                VALUES ('${db.escape(due)}', '${db.escape(assignment_name)}', '${db.escape(details)}', ${db.escape(total_points)}, ${db.escape(course_id)});
                SELECT LAST_INSERT_ID()`
    try{
        const assignment = await query(sql);
        const assignment_id = assignment[1][0]["LAST_INSERT_ID()"];
            //insert new rows for each student with this id
        res.json({success: "Assignment Added"})
    }catch(e){
        res.json({error: e})
    }
}

async function updateAssignment(req, res){
    const {due, assignment_name, details, total_points, assignment_id} = req.body;
    const sql = `UPDATE Assignments
                SET due = ${db.escape(due)}, assignment_name = ${db.escape(assignment_name)}, details = ${db.escape(details)}, total_points = ${db.escape(total_points)}
                WHERE assignment_id = ${assignment_id}`
    try{
        await query(sql)
        res.json({success: 'Assignment updated'})
    }catch(e){
        res.json({error: e})
    }
}

async function deleteAssignmentById(req, res){
    const assignment_id = req.params.id;
    const sql = `DELETE FROM Assignments WHERE assignment_id = ${db.escape(assignment_id)}`
    try{
        await query(sql)
        res.json({success: 'Assignment Deleted'})
    }catch(e){
        res.json({error: e})
    }
}


module.exports = {
    getCourseAssignments,
    addAssignment,
    updateAssignment,
    deleteAssignmentById
}