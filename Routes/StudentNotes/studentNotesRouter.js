const express = require('express');
const router = express.Router();

const {
    getNotesByUserId,
    saveNotes,
    updateNote,
} = require('./studentNotesController')

router.get('/get-notes-by-user-id', getNotesByUserId);

router.post('/save-notes', saveNotes);

router.put('/edit-note', updateNote);

module.exports = router;