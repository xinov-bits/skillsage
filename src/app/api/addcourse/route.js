import Course from '../../../models/Course';
import connectDb from '../../../middleware/mongoose';
import { NextResponse } from 'next/server';

// Establish MongoDB connection
connectDb();

export async function POST(req) {
    try {
        const res = await req.json();

        if (Array.isArray(res) && res.length > 0) {
            for (let i = 0; i < res.length; i++) {
                let course = new Course({
                    title: res[i].title,
                    slug: res[i].slug,
                    desc: res[i].desc,
                    dimg: res[i].dimg,
                    img1: res[i].img1,
                    category: res[i].category,
                    subCategory: res[i].subCategory,
                    duration: res[i].duration,
                    price: res[i].price,
                    sku: res[i].sku,
                });
                await course.save();
            }
            return NextResponse.json({ success: "success" });
        } else {
            return NextResponse.json({ error: "Products array is empty or invalid" });
        }
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "An error occurred while processing the request", details: error.message });
    }
}
