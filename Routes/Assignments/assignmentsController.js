const db = require('../../server');

function getCourseAssignments(req, res){
    const course_id = req.params.id;
    const sql = `SELECT * FROM Assignment WHERE course_id = ${course_id}`
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
function addAssignment(req, res){
    const {due, assignment_name, details, total_points, course_id} = req.body;
    const sql = `INSERT INTO Assignments(due, assignment_name, details, total_points, course_id)
                VALUES ('${due}', '${db.escape(assignment_name)}', '${details}', ${total_points}, ${course_id});
                SELECT LAST_INSERT_ID()`
    try{
        db.query(sql, (err, payload) =>{
            if(err){
                res.json({error: err})
            }
            const assignment_id = payload[1][0]["LAST_INSERT_ID()"];
            //insert new rows for each student with this id
            res.json({success: payload})
        })
    }catch(e){
        res.json({error: e})
    }
}

function updateAssignment(req, res){
    const {due, assignment_name, details, total_points, assignment_id} = req.body;
    const sql = `UPDATE Assignments
                SET due = ${due}, assignment_name = ${assignment_name}, details = ${details}, total_points = ${total_points}
                WHERE assignment_id = ${assignment_id}`
    try{
        db.query(sql, err =>{
            if(err){
                res.json({error: err})
            }
            res.json({success: 'Assignment updated'})
        })
    }catch(e){
        res.json({error: e})
    }
}

function deleteAssignmentById(req, res){
    const assignment_id = req.params.id;
    const sql = `DELETE FROM Assignments WHERE assignment_id = ${assignment_id}`
    try{
        db.query(sql, err =>{
            if(err){
                res.json({error: err})
            }
            res.json({success: 'Assignment Deleted'})
        })
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