const express = require('express');
const router = express.Router();

const {
    getNotesByUserId,
    saveNotes,
    editNote,
    deleteNote
} = require('./studentController')

router.get('/get-notes-by-user-id', getNotesByUserId);

router.post('/save-notes', saveNotes);

router.put('/edit-note', editNote);

router.delete('/delete-note-by-note-id/:id', deleteNote);

module.exports = router;