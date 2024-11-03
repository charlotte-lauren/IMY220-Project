// /backend/models/songModel.js
import connectDB from '../db';
import { ObjectId } from 'mongodb';

export async function createSong({ title, artist, genre }) {
    const db = await connectDB();
    const newSong = { title, artist, genre };
    const result = await db.collection('songs').insertOne(newSong);
    return result.ops[0];
}

export async function searchSongs(query) {
    const db = await connectDB();
    return await db.collection('songs').find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { artist: { $regex: query, $options: 'i' } }
        ]
    }).toArray();
}

// Add other functions as needed
