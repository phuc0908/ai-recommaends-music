const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: String,
  genre: { type: String, required: true },
  duration: { type: Number, required: true },
  filePath: { type: String, required: true },
  coverArt: String,
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);