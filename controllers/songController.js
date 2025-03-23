const Song = require('../models/Song');

exports.uploadSong = async (req, res) => {
  try {
    const { title, artist, genre, duration } = req.body;
    const newSong = new Song({ title, artist, genre, duration });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  uploadSong: exports.uploadSong,
  getAllSongs: exports.getAllSongs
};