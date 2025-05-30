"use client";

import Link from "next/link";
import {useState} from "react";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginForm()
{  
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");

    const router=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try
        {
          const res=await signIn("credentials",{
            email,
            password,
            redirect:false,
        });
       
        // console.log(res); 
        
        if(res.error)
        {
            setError("Invalid credentials");
            return;
        }
        router.replace('dashboard');
        }
        catch(error)
        {
            console.log(error);
        }
    };

    return (<div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded -lg border-t-4 border-blue-400">
        <h1 className="text-xl font-bold my-4">Login </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input onChange={e => setEmail(e.target.value)} className="bg-gray-200 border-2" type="text" placeholder="Email" />
            <input onChange={e => setPassword(e.target.value)} className="bg-gray-200 border-2"  type="password" placeholder="Password" />
            <button className="bg-blue-400 text-white font-bold cursor-pointer px-6 py-2">Login</button>
             {error &&(
               <div className="bg-white text-red-500 font-bold w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
             )}
           
            <Link className="text-sm mt-3 text-right" href={'/register'}>
            Don't have an account? <span className="font-bold underline">Register</span>
            </Link>
        </form>
        </div>
    </div>);
}

