"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function UserInfo() {
    const router = useRouter();
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState(session?.user?.name || '');
    const [email, setEmail] = useState(session?.user?.email || '');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    
    const handleLogout = async () => {
        await signOut();
        router.push('/login'); // Redirect to the home page or desired route after logout
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError(''); // Reset error state

        if(!title || !description || !author || !email || !date || !content || !image) {
            setError("All fields are required");
            return;
        }

        const res = await fetch('api/dashboard', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, description, author,email, date, content, image
            }),
        });

        if(res.ok) {
            setTitle('');
            setDescription('');
            setAuthor(session?.user?.name || '');
            setEmail(session?.user?.email || '');
            setDate(new Date().toISOString().split('T')[0]);
            setContent('');
            setImage('');
            // router.push("./blog");
            router.push("/dummy");
        } else {
            console.log("Failed to publish a blog.");
        }
    };

    return (
        <div className="flex flex-col items-center p-2 bg-white-400 text-white">
            <div className="flex justify-between items-center w-full mb-0">
                <div className="flex flex-col ml-16">
                    <span className="text-lg text-red-600 ">Welcome, <span className="font-bold">{session?.user?.name}</span></span>
                </div>
                <button onClick={handleLogout} className="bg-red-600 text-white font-bold px-6 py-2 rounded hover:bg-red-700 transition">
                    Log Out
                </button>
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-6 rounded shadow-md w-full max-w-3xl mt-0 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Write a Blog</h2>
                {error && <span className="text-red-600">{error}</span>}
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded"
                    required
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded" 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Author" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded" 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded" 
                    required
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded" 
                    required
                />
                <textarea 
                    placeholder="Blog Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full h-40 rounded" 
                    required
                />
                <input 
                    type="url" 
                    placeholder="Image URL" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                    className="border border-gray-600 bg-gray-100 text-black p-2 mb-4 w-full rounded" 
                    required
                />
                <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 transition mt-4">
                    Publish Blog
                </button>
            </form>
        </div>
    );
}