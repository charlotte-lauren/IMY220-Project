// /backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; // Ensure the correct path for userRoutes

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection
const CONNECTION_STRING = 'mongodb+srv://u21434965:9FjUKrZdolCx768d@imy220.zs7mz.mongodb.net/?retryWrites=true&w=majority&appName=IMY220';
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
