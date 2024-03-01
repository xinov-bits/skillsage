import Lecture from '../../../models/Lecture';
import connectDb from '../../../middleware/mongoose';
import { NextResponse } from 'next/server';

// Establish MongoDB connection
connectDb();

export async function POST(req) {
    try {
        const res = await req.json();

        if (Array.isArray(res) && res.length > 0) {
            for (let i = 0; i < res.length; i++) {
                let l = new Lecture({
                    course: res[i].course,
                    lectures: res[i].lectures,
                });
                await l.save();
            }
            return NextResponse.json({ success: "success" });
        } else {
            return NextResponse.json({ error: "Lectures array is empty or invalid" });
        }
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "An error occurred while processing the request", details: error.message });
    }
}
