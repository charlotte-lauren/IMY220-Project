// /backend/routes/userRoutes.js
const express = require('express');
const { createUser, getUserByUsername, getUserById } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRoutes = express.Router();
const SECRET_KEY = 'your_jwt_secret';

// Register a new user
userRoutes.post('/register', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// User login
userRoutes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsername(username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});

module.exports = userRoutes;
