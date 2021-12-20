const {query,db} = require('../../server');


async function getStudentById(req, res){
    const {student_id} = req.body;
    const sql = `SELECT * FROM Students WHERE student_id = ${db.escape(student_id)};`
    try{
        const foundStudent = await query(sql);
        res.json({foundStudent: foundStudent[0]})
    }catch(e){
        res.json({e})
    }
}

async function addStudent(req, res){
    try{
        const {
        student_id,
        first_name,
        last_name,
        birthday
        } = req.body;
        const sql = `INSERT INTO Students VALUES (${db.escape(student_id)} , '${db.escape(first_name)}' , '${db.escape(last_name)}', '${db.escape(birthday)}')`;
        await query(sql)
        res.json({success: "Student Added..."})
    }catch(e){
        res.json({e})
    }}

async function updateStudentById(req, res){
    const {
        student_id,
        first_name,
        last_name,
        birthday
    } = req.body;
    const sql = 
        `UPDATE Students 
        SET first_name = '${db.escape(first_name)}', last_name = '${db.escape(last_name)}', birthday = '${(birthday)}'
        WHERE student_id = ${db.escape(student_id)}`;
    try{
        await query(sql)
        res.json({success: "Student Updated..."})
    }catch(e){
        res.json({e})
    }
}
        
async function deleteStudentById(req, res){
    const {student_id} = req.body;
    const sql = `DELETE FROM Students WHERE student_id = ${db.escape(student_id)}`
    try{
        await query(sql)
        res.json({success: "Student Deleted"})
    }catch(e){
        res.json({e})
    }
}

module.exports = {
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
}