const express = require('express');
const router = express.Router();

const {
    getNotesByUserId,
    updateNote,
} = require('./studentNotesController')

router.post('/get-notes-by-user-id', getNotesByUserId);

router.put('/edit-note', updateNote);

module.exports = router;