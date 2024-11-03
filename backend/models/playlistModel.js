// /backend/models/playlistModel.js
import connectDB from '../db';
import { ObjectId } from 'mongodb';

export async function createPlaylist({ title, description, userId }) {
    const db = await connectDB();
    const newPlaylist = { title, description, userId, songs: [] };
    const result = await db.collection('playlists').insertOne(newPlaylist);
    return result.ops[0];
}

export async function addSongToPlaylist(playlistId, songId) {
    const db = await connectDB();
    return await db.collection('playlists').updateOne(
        { _id: new ObjectId(playlistId) },
        { $addToSet: { songs: songId } }
    );
}

export async function getPlaylistsByUserId(userId) {
    const db = await connectDB();
    return await db.collection('playlists').find({ userId }).toArray();
}

// Add other functions as needed
