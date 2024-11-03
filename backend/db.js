// /backend/db.js
import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_uri';
let client;
let db;

async function connectDB() {
    if (db) return db;
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db('your_database_name');
    return db;
}

export default connectDB;
