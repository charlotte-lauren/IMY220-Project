// /backend/routes/playlistRoutes.js
import express from 'express';
import { createPlaylist, addSongToPlaylist, getPlaylistsByUserId } from '../models/playlistModel';
import { authenticateToken } from './userRoutes';

const playlistRoutes = express.Router();

playlistRoutes.post('/', authenticateToken, async (req, res) => {
    try {
        const playlist = await createPlaylist({ ...req.body, userId: req.user.id });
        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create playlist' });
    }
});

playlistRoutes.put('/:playlistId/addSong', authenticateToken, async (req, res) => {
    try {
        await addSongToPlaylist(req.params.playlistId, req.body.songId);
        res.status(200).json({ message: 'Song added to playlist' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add song to playlist' });
    }
});

export default playlistRoutes;
