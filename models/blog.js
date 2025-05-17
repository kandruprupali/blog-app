import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
});

const User = models.User || mongoose.model("User", userSchema);

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        ref:'User',
    },
    email: {
        type: String,
        required: true,
        ref:'User',
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    
},
{ timestamps: true }
);

const Blog = models.Blog || mongoose.model("Blog", blogSchema);


export default Blog;