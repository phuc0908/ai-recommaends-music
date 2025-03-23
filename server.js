require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

console.log(process.env.MONGO_URI);
console.log("Hello");

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/songs', require('./routes/songRoutes'));

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));