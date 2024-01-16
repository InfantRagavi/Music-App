const mongoose = require('mongoose');
const Playlist = require('../Models/playlistModel');

//Get all playlists
module.exports.getAllPlaylists = async (req,res) => {
    try{
        const playlists = await Playlist.find();
        res.json(playlists);
    } catch(error) {
        res.status(500).send(error.message);
    };
};
//Get a specific playlist by id
module.exports.getPlaylistById = async (req,res) => {
    const{playlistId} = req.params;
    try{
        const playlist = await Playlist.findById(playlistId);
        if(!playlist) {
            return res.status(404).json({
                message:'playlist not found'
            });
        }
        res.json(playlist);
     }catch (error) {
        res.status(500).send(error.message);
     }
};
//create a new playlist
module.exports.createPlaylist = async (req,res) => {
    const{name,songs} = req.body;
    try{
        const newPlaylist = new Playlist({name,songs});
        await newPlaylist.save();
        res.json(newPlaylist);
    } catch(error){
        res.status(500).send(error.message);
    }
};
//Update a playlist by id
module.exports.updatePlaylist = async (req,res) => {
    const{playlistId} = req.params;
    const{name,songs} = req.body;

    try{
        const updatedPlaylist = await Playlist.findByIdAndUpdate(playlistId,{name,songs},{new:true});
        if(!updatedPlaylist) {
            return res.status(404).json({
                message:'playlist not found'
            });
        }
        res.json(updatedPlaylist);
     }catch (error) {
        res.status(500).send(error.message);
     }
};
//Delete a playlist by id
module.exports.deletePlaylist = async(req,res) => {
    const {playlistId} = req.params;
    try{
        const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);
        if(!deletedPlaylist) {
            return res.status(404).json({message:'playlist not found'});
        }
        res.json(deletedPlaylist);
    } catch(error) {
        res.status(500).send(error.message);

    }
};