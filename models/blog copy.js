import mongoose, { Schema, models } from "mongoose";


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
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