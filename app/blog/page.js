import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button"
import fs from "fs";
import matter from "gray-matter"

const dirContent = fs.readdirSync("content","utf-8")
// console.log(dirConsole)
const blogs=dirContent.map(file=>{
  const fileContent=fs.readFileSync(`content/${file}`,"utf-8");
  const {data} = matter(fileContent)
    return data
  //  return { ...data, slug: file.replace(/\.md$/, "").replace(/^public\/content\//, "") };

  
})

// const blog = [
//   {
//     title: "First Blog Post",
//     description: "This is the description for the first blog post.",
//     slug: "first-blog-post",
//     date: "2023-10-01",
//     author: "Author One",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Second Blog Post",
//     description: "This is the description for the second blog post.",
//     slug: "second-blog-post",
//     date: "2023-10-02",
//     author: "Author Two",
//     image: "https://via.placeholder.com/150",
//   },
//   // Add more blog objects as needed
// ];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((post) => (
          <div
            key={post.slug}
            className=" rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="">{post.description}</p>
              <p className=" text-sm mt-2">
                By {post.author} on {post.date}
              </p>
              {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="no-underline text-white"
                >
                  Read more
                </a>
              </button> */}
              <Link href={`/blogpost/${post.slug}`} className={buttonVariants({ variant: "outline" })}>click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
