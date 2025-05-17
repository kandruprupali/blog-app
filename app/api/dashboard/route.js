import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {   
        const { title, description, author,email, date, content, image } = await req.json(); // Removed useState and handleEmailChange

        console.log("Title: ", title);
        console.log("Description: ", description);
        console.log("Author: ", author);
        console.log("Email: ", email);
        console.log("Date: ", date);
        console.log("Content: ", content);
        console.log("Image: ", image);
        // console.log("Email: ", userEmail); // Changed to userEmail

        await connectMongoDB();
        await Blog.create({ title, description, author,email, date, content, image });

        return NextResponse.json({ message: "Blog published." }, { status: 201 });
    } catch (error) {
       
        return NextResponse.json(
            {
                message: "An error occurred while publishing the Blog."
            },
            { status: 500 }
        );
    }
}