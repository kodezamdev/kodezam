import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <header className="bg-white py-4 flex items-center">
      <div className="w-full sm:container sm:mx-auto px-10 flex items-center justify-between ">
        <div>
          <Logo />
        </div>
        <nav className="flex space-x-32 items-center">
          <ul className="flex space-x-10 py-2 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <Link href="/contact-us">
            <span className="text-blue-700 cursor-pointer py-2 px-5 border border-blue-700 rounded hover:text-blue-600 hover:border-blue-600">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
