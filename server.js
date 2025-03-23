require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect, client } = require('./config/db'); // Import từ db.js
const app = express();
const authRoutes = require('./routes/authRoutes');
const songRoutes = require('./routes/songRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối database
async function startServer() {
  try {
    await connect(); // Kết nối MongoDB
    console.log("MongoDB connection established");

    console.log("Auth Routes:", authRoutes);  // Debug
    console.log("Song Routes:", songRoutes); 

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/songs', songRoutes);

    // Khởi động server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Thoát nếu không kết nối được MongoDB
  }
}

startServer();