const express = require('express');
const router = express.Router();
const playlistController = require('../Controllers/playlistController');
//Routes
router.get('/playlists',playlistController.getAllPlaylists);
router.get('/playlists/:playlistId',playlistController.getPlaylistById);
router.post('/playlists',playlistController.createPlaylist);
router.put('/playlists/:playlistId',playlistController.updatePlaylist);
router.delete('/playlists/:playlistId',playlistController.deletePlaylist);

module.exports = router;
