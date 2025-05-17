// "use client";

// import { useSession } from "next-auth/react";
// import { useState, useEffect } from "react";
// import Blog from "@/models/blog";

// async function fetchBlogs() {
//     try {
//         const blogs = await Blog.find().populate('session?.user?.name').populate('session?.user?.email'); // Populate author and email
//         console.log(blogs);
//         return blogs;
//     } catch (error) {
//         console.error("Error fetching blogs:", error);
//         return [];
//     }
// }

// export default function Bloginfo() {
//     const { data: session } = useSession();
//     const [titles, setTitles] = useState([]); // Changed variable name to 'titles' for clarity

//     useEffect(() => {
//         const getBlogs = async () => {
//             const blogs = await fetchBlogs(); // Fetch blogs
//             if (Array.isArray(blogs)) {
//                 setTitles(blogs.map(blog => blog.title)); // Set titles from fetched blogs
//             }
//         };

//         getBlogs(); // Call the function to fetch blogs
//     }, []);

//     if (!session) {
//         return <div>Loading...</div>; // Loading state
//     }

//     return (
//         <div className="flex flex-col items-center p-2 bg-white-400 text-white">
//             <div className="flex justify-between items-center w-full mb-0">
//                 <div className="flex flex-col ml-16">
//                     <span className="text-lg text-red-600 ">Welcome, <span className="font-bold" >
//                     {titles.length > 0 ? titles.join(', ') : 'No blogs available'}</span></span> {/* Changed 'title' to 'titles' */}
//                 </div>
//             </div> 
//         </div>
//     );
// }

// "use client";

// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import Blog from "@/models/blog";
// import User from '@/models/user';
// // import  {useRouter}  from "next/navigation";

// export default function BlogInfo() {
//     const { data: session } = useSession();
//     const [blogs, setBlogs] = useState([]);
//     const [error, setError] = useState('');

//     const getBlogs = async () => {
//         try {
//             const response = await fetch('/api/blogs'); // Adjust the API endpoint as necessary
//             if (!response.ok) {
//                 throw new Error('Failed to fetch blogs');
//             }
//             const data = await response.json();
//             setBlogs(data); // Assuming the API returns an array of blog objects
//         } catch (error) {
//             setError('Error fetching blogs: ' + error.message);
//             console.error('Error fetching blogs:', error);
//         }
//     };

//     useEffect(() => {
//         getBlogs(); // Call the function to fetch blogs when the component mounts
//     }, []);

//     return (
//         <div className="flex flex-col items-center p-2 bg-white-400 text-black">
//             <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
//             {error && <span className="text-red-600">{error}</span>}
//             <ul className="w-full max-w-3xl">
//                 {blogs.map((blog, index) => (
//                     <li key={index} className="border border-gray-300 p-4 mb-4 rounded">
//                         <h2 className="text-xl font-bold">{blog.title}</h2>
//                         <p className="text-gray-700">{blog.description}</p>
//                         <p className="text-gray-500">By: {blog.author} | {new Date(blog.date).toLocaleDateString()}</p>
//                         <img src={blog.image} alt={blog.title} className="w-full h-auto mt-2" />
//                         <p className="mt-2">{blog.content}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


//new code 


"use client";

import { useEffect, useState } from "react";
import BlogDetail from "./BlogDetail"; // Import the BlogDetail component
import Link from "next/link";

export default function BlogInfo() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // New state variable to track the selected blog

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs"); // Make sure this API route exists
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  // Group blogs by author
  const groupedBlogs = blogs.reduce((acc, blog) => {
    const author = blog.author;
    if (!acc[author]) {
      acc[author] = [];
    }
    acc[author].push(blog);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold mb-8">Blog Content</h1>
      {Object.entries(groupedBlogs).map(([author, authorBlogs]) => (
        <div key={author} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Author: {author}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {authorBlogs.map((blog) => (
              <div key={blog._id} className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <button onClick={() => setSelectedBlog(blog)}>Click Here</button>
                  {/* <Link href="/components/BlogDetail ">Click me</Link> New button to select the blog */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedBlog && ( // Pass the selected blog to the BlogDetail component
        <BlogDetail blog={selectedBlog} />
      )}
    </div>
  );
}

// trials

