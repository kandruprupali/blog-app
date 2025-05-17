import { useState } from "react";

export default function BlogDetail({ blog }) {
  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold mb-8">Blog Detail</h1>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
