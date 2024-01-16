const mongoose = require('mongoose');

const Song = require('../models/songModel');

const createSong = async (req,res) => {
    res.json({
        purpose:"Save a Song",
        request:"req.method",
    });
};
const getAllSongs = async (req,res) => {
    res.json({
        purpose:"Get All Songs",
        request:"req.method",
    });
};
const getSong = async (req,res) => {
    res.json({
        purpose:"Get Song",
        request:"req.method",
    });
};
const updateSong = async (req,res) => {
    res.json({
        purpose:"Update a Song",
        request:"req.method",
    });
};
const deleteSong = async (req,res) => {
    res.json({
        purpose:"Delete a Song",
        request:"req.method",
    });
};

module.exports = {
    createSong,
    getAllSongs,
    getSong,
    updateSong,
    deleteSong
};