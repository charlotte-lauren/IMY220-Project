// /backend/routes/songRoutes.js
import express from 'express';
import { createSong, searchSongs } from '../models/songModel';

const songRoutes = express.Router();

songRoutes.post('/', async (req, res) => {
    try {
        const song = await createSong(req.body);
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add song' });
    }
});

songRoutes.get('/search', async (req, res) => {
    try {
        const songs = await searchSongs(req.query.query);
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search for songs' });
    }
});

export default songRoutes;
