const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Fix Mongoose warning
mongoose.set('strictQuery', false);

// Import routes
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');
const assignmentRoutes = require('./routes/assignments');

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('🎉 LMS Backend API is running!');
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://JIO:1234@cluster0.ud5frfd.mongodb.net/myDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas (myDB)'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
