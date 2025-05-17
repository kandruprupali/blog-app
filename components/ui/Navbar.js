// Navbar.js
import React from "react";
import Link from "next/link";
// import styles from "./navbar.module.css"; // Assuming you will create a CSS module for styling
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/ThemeButton";

const Navbar = () => {
  return (
    // <nav className={styles.navbar}>
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur z-10">
      {/* <div className={styles.logo}>Blog-App</div> */}
      <div className="container mx-auto flex justify-between border-b pb-6 items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">Blog-App</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:underline hover:font-bold">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:font-bold">
            About
          </Link>
          <Link href="/blog" className="hover:underline hover:font-bold">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline hover:font-bold">
            Contact
          </Link>
          <div className="flex items-center">
            <Link href="/login">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            </Link>
            <Link href="/register">
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Blog-App</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/" className="hover:underline hover:font-bold">
                      Home
                    </Link>
                    <Link href="/about" className="hover:underline hover:font-bold">
                      About
                    </Link>
                    <Link href="/blog" className="hover:underline hover:font-bold">
                      Blog
                    </Link>
                    <Link href="/contact" className="hover:underline hover:font-bold">
                      Contact
                    </Link>
                    <div className="">
                    <Link href="/login">
                      <Button className="mx-1" variant="outline">
                        Login
                      </Button>
                      </Link>
                      <Link href="/register">
                      <Button className="mx-1" variant="outline">
                        Sign Up
                      </Button>
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;