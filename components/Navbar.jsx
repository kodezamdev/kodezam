import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex py-3 sm:py-4 items-center transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10  bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="w-full sm:container sm:mx-auto px-5 sm:px-16 flex items-center justify-between ">
        <div className="w-1/2 sm:w-1/6">
          <Logo />
        </div>
        <nav className="md:flex md:flex-1 md:justify-end hidden space-x-32 items-center">
          <ul className="flex space-x-10 py-2 items-center text-base leading-6 font-semibold text-slate-700 dark:text-slate-200">
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
        <div className="md:hidden">
          <button className="cursor-pointer">
            <MenuIcon className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </header>
  );
}
