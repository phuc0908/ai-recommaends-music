const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, songController.uploadSong);
router.get('/', authMiddleware, songController.getAllSongs);

module.exports = router;