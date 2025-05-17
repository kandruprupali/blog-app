'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm()
{
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const router=useRouter();

     const handleSubmit =async(e) =>{
        e.preventDefault();

        if(!name || !email || !password)
        {
            setError("All field are required");
            return;
        }

        try 
        {

            const resUserExists=await fetch("api/userExists",{
                method: "POST",
                headers: 
                {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({email}),
            });

            const{user}=await resUserExists.json();
            if(user)
            {
                setError("User Already Exists!");
                return;
            }

           const res = await fetch('api/register',{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
              name,email,password
            }),

           });
           if(res.ok)
           {
            const form=e.target;
            form.reset();
            router.push("/login");
           }
           else 
           {
            console.log("User Registration failed.");
           }
        }
        catch(error) 
        {
            console.log("Error during Registration.",error);
        }
     };
    //  console.log("Name: ",name);

    return (
        <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded -lg border-t-4 border-blue-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input className="bg-gray-200 border-2" onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
            <input className="bg-gray-200 border-2" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
            <input className="bg-gray-200 border-2" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button className="bg-blue-400 text-white font-bold cursor-pointer px-6 py-2">Register</button>
            { error && (
            <div className="bg-white text-red-500 font-bold w-fit text-sm py-1 px-3 rounded-md mt-2">
               {error}
            </div>
            )}
            <Link className="text-sm mt-3 text-right" href={'/login'}>
            Already have an account? <span className="font-bold underline">Login</span>
            </Link>
        </form>
        </div>
    </div>
    )
}