const db = require('../../server');
const mysql = require('mysql');

async function getStudentById(req, res){
    try{
        const studentId = req.params.id;
        const sql = `SELECT * FROM Students WHERE student_id = ${studentId};`
        db.query(sql, (err, payload)=>{
            if(err){
                throw err;
            }
            res.json({payload})
        })
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
        const sql = `INSERT INTO Students VALUES (${student_id} , '${first_name}' , '${last_name}', '${birthday}')`;
        db.query(sql, (err)=>{
            if(err){
                console.log(err.code)
                console.log('line 31')
                throw err;
            }
            res.json({message: 'Student added...'})
        })
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
        SET first_name = '${first_name}', last_name = '${last_name}', birthday = '${birthday}'
        WHERE student_id = ${student_id}`;
    try{
        db.query(sql, (err)=>{
            if(err){
                throw err;
            }
            res.json({message: 'Student updated...'})
        })
    }catch(e){
        res.json({e})
    }
}
        
async function deleteStudentById(req, res){
    const student_id = req.params.id;
    const sql = `DELETE FROM Students WHERE student_id = ${student_id}`
    try{
        db.query(sql, (err)=>{
            if(err){
                throw err;
            }
            res.json({message: 'Student deleted...'})
        })
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