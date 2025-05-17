// // new page.js(trial)

// "use client";

// import { useEffect, useState } from "react";
// import BlogDetail from "@/components/BlogDetail"; // Import the BlogDetail component


// export default function BlogDetail({blog}) {
// //   const [blogs, setBlogs] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedBlog, setSelectedBlog] = useState(null); // State variable to track the selected blog

// // //   Fetch blogs from API
// //   const fetchBlogs = async () => {
// //     try {
// //       const res = await fetch("conponents/"); // Make sure this API route exists
// //       if (!res.ok) throw new Error("Failed to fetch blogs");

// //       const data = await res.json();
// //       setBlogs(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBlogs();
// //   }, []);

// //   if (loading) return <p>Loading blogs...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div className="container">
// //       <h1 className="text-center text-3xl font-bold mb-8">Blog Content</h1>
// //       {blogs.length === 0 ? (
// //         <p>No blogs available.</p>
// //       ) : (
// //         blogs.map((blog) => (
// //           <div key={blog._id} className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
// //             <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
// //               <button onClick={() => setSelectedBlog(blog)}>Click Here</button> {/* Button to select the blog */}
// //             </div>
// //           </div>
// //         ))
// //       )}
// //       {selectedBlog && ( // Pass the selected blog to the BlogDetail component
// //         <BlogDetail blog={selectedBlog} />
// //       )}
// //     </div>
//   // );
//   return (
//     <div className="container">
//       <h1 className="text-center text-3xl font-bold mb-8">Blog Detail</h1>
//       <div className="p-4">
//         <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
//         <p>{blog.content}</p>
//       </div>
//     </div>
//   );
// }
