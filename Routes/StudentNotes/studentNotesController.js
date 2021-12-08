const db = require('../../server');

async function getNotesByUserId(req, res){
    const user_id = req.params.id;
    const sql = 
        `SELECT * FROM Student_Notes 
        WHERE user_id = ${user_id}
        ORDER BY placement`
    try{
        db.query(sql, (err, payload)=>{
            if(err){
                throw err;
            }
            res.json({payload})
        })
    }catch(e){
        res.json({error: e})
    }
}

async function saveNotes(req, res){
    const {user_id, notesArray} = req.body;
    let noteCount = 0;
    try{
        for(let i = 0; i < notesArray.length; i++){
            const storeNoteSql = `INSERT INTO Student_Notes(user_id, placement, note_text)
                                VALUES (${user_id}, ${i}, ${notesArray[i]})`
            db.query(storeNoteSql, (err)=>{
                if(err){
                    console.log(`${noteCount} saved until fail`)
                    throw err;
                }
                noteCount++;
            })
        }
        res.json({success: `${noteCount} notes successfully saved`})
    }catch(e){
        res.json({error: e})
    }
}

async function editNote(req, res){
    const {note_id, note_text} = req.body;
    const sql = `UPDATE Student_Notes SET note_text = ${note_text} WHERE note_id = ${note_id}`
    try{
        db.query(sql, (err, payload) =>{
            if(err){
                throw err;
            }
            res.json({success: payload})
        })
    }catch(e){
        res.json({error: e})
    }
}

async function deleteNote(req, res){
    const note_id = req.params.id;
    const sql = `DELETE FROM Student_Notes WHERE note_id = ${note_id}`
    try{
        db.query(sql, (err)=>{
            if(err){
                throw err;
            }
            res.json({success: 'Note Deleted'})
        })
    }catch(e){
        res.json({error: e})
    }
}

module.exports = {
    getNotesByUserId,
    saveNotes,
    editNote,
    deleteNote
}