import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

// Retrieve MongoDB URI from environment variables
const uri = process.env.MONGO_URI;
const collectionName = 'lectures';

export async function GET(req) {
    const query = JSON.parse(req.nextUrl.searchParams.get('course'));

    try {
        // Connect to MongoDB
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        // Access your database from the URI
        const db = client.db();

        // Access your collection
        const collection = db.collection(collectionName);

        // Fetch all lectures
        const lecture = await collection.find({
            course: query
        }).toArray();

        // Close the connection
        await client.close();

        return NextResponse.json(lecture);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}