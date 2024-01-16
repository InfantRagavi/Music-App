const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const SongSchema = new mongoose. Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
});

 module.exports = mongoose.model('Song',SongSchema);


