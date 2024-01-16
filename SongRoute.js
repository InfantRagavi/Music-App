const express = require('express');
const router = express.Router();

const {
    createSong,
    getAllSongs,
    getSong,
    updateSong,
    deleteSong,
}= require('../controllers/songController');

router.get('/', getAllSongs);
router.get('/:id', getSong);
router.post('/', createSong);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);

module.exports = router;