const {query,db} = require('../../server');

async function getNotesByUserId(req, res){
    const {user_id} = req.body;
    const sql = 
        `SELECT note_json FROM Student_Notes 
        WHERE user_id = ${db.escape(user_id)}`
    try{
        const notes = await query(sql)
        console.log(notes)
        res.json({notes: notes[0]})
    }catch(e){
        res.json({error: e})
    }
}

async function updateNote(req, res){
    const {user_id, note_json} = req.body;
    console.log(user_id, note_json)
    const updateSql = `UPDATE Student_Notes SET note_json = ${db.escape(note_json)} WHERE user_id = ${db.escape(user_id)};`
    const sql= `SELECT note_json from Student_Notes WHERE user_id = ${db.escape(user_id)};`
    try{
        await query(updateSql);
        const notes = await query(sql);
        res.json({notes: notes[0].note_json})
    }catch(e){
        res.json({error: e.message})
    }
}

module.exports = {
    getNotesByUserId,
    updateNote,
}