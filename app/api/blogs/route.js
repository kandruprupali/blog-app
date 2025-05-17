// // import { connectMongoDB } from "@/lib/mongodb";
// // import User from "@/models/user";
// // import Blog from "@/models/blog";
// // import { NextResponse } from "next/server";
// // import bcrypt from "bcryptjs";

// // export async function POST(req) {
// //     try {   
// //         const { title, description, author,email, date, content, image } = await req.json(); // Removed useState and handleEmailChange

// //         console.log("Title: ", title);
// //         console.log("Description: ", description);
// //         console.log("Author: ", author);
// //         console.log("Email: ", email);
// //         console.log("Date: ", date);
// //         console.log("Content: ", content);
// //         console.log("Image: ", image);
// //         // console.log("Email: ", userEmail); // Changed to userEmail

// //         await connectMongoDB();
// //         await Blog.create({ title, description, author,email, date, content, image });

// //         return NextResponse.json({ message: "Blog published." }, { status: 201 });
// //     } catch (error) {
       
// //         return NextResponse.json(
// //             {
// //                 message: "An error occurred while publishing the Blog."
// //             },
// //             { status: 500 }
// //         );
// //     }
// // }

// import { MongoClient } from "mongodb";

// // const MONGO_URI = "mongodb+srv://aabhathoke:@cluster0.u02dm.mongodb.net/Project0";
// const MONGODB_URI="mongodb+srv://kandruprupali:xEpzyeAC3QjUB1oK@cluster0.tlset.mongodb.net/blogcredentials";

// const DB_NAME = "blogapp";

// export async function GET() {
//   try {
//     const client = await MongoClient.connect(MONGO_URI);
//     const db = client.db(DB_NAME);
//     const collection = db.collection("blogs");

//     const blogs = await collection.find({}).toArray();
//     client.close();

//     return new Response(JSON.stringify(blogs), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
//   }
// } 

import { MongoClient } from "mongodb";

const MONGODB_URI = "mongodb+srv://kandruprupali:xEpzyeAC3QjUB1oK@cluster0.tlset.mongodb.net/blogcredentials";
const DB_NAME = "blogapp";

export async function GET() {
  let client;
  try {
    client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(DB_NAME);
    const collection = db.collection("blogs");

    const blogs = await collection.find({}).toArray();

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  } finally {
    if (client) {
      client.close();
    }
  }
}

