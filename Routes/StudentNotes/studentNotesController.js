const {query,db} = require('../../server');


async function getNotesByUserId(req, res){
    const user_id = req.params.id;
    const sql = 
        `SELECT * FROM Student_Notes 
        WHERE user_id = ${db.escape(user_id)}
        ORDER BY placement`
    try{
        const notesArray = await query(sql)
        res.json({noteArray: notesArray[0]})
    }catch(e){
        res.json({error: e})
    }
}

async function saveNotes(req, res){
    const {user_id, notesArray} = req.body;
    const sql = `INSERT INTO Student_Notes(user_id, placement, note_json)
                    VALUES (${db.escape(user_id)}, ${db.escape(notesArray)})`
    try{
        await query(sql)
        res.json({success: `Notes successfully saved`})
    }catch(e){
        res.json({error: e})
    }
}

async function updateNote(req, res){
    const {note_id, note_text} = req.body;
    const sql = `UPDATE Student_Notes SET note_text = ${db.escape(note_text)} WHERE note_id = ${db.escape(note_id)}`
    try{
        const notes = await query(sql);
        res.json({notes: notes[0]})
    }catch(e){
        res.json({error: e})
    }
}

module.exports = {
    getNotesByUserId,
    saveNotes,
    updateNote,
}