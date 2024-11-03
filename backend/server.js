// /backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; // Adjust the path if necessary
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Database connection (adjust the connection string as necessary)
mongoose.connect('mongodb://localhost:27017/notefy', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes); // User routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
