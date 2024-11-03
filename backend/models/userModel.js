// /backend/models/userModel.js
import connectDB from '../db';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function createUser({ username, password, email }) {
    const db = await connectDB();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = { username, email, password: hashedPassword };
    const result = await db.collection('users').insertOne(newUser);
    return result.ops[0];
}

export async function getUserByUsername(username) {
    const db = await connectDB();
    return await db.collection('users').findOne({ username });
}

export async function getUserById(userId) {
    const db = await connectDB();
    return await db.collection('users').findOne({ _id: new ObjectId(userId) });
}

// Add other functions as needed
