"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(true);
  return (
      <div className="bg-black sticky  w-full z-20 top-0  shadow-lg ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl  font-serif text-white">
              Dumping Data
            </span>
            <img src="logo.png" className="h-8 mr-3" alt="Logo" />
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 -lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={() => setMenu(!menu)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-center md:hidden bg-white">
          {!menu && (
            <ul>
              <li>
                <Link
                  href="/"
                  onClick={() => setMenu(!menu)}
                  className="block py-2 pl-3 pr-4 text-black font-serif"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMenu(!menu)}
                  className="block py-2 pl-3 pr-4 text-black font-serif"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setMenu(!menu)}
                  className="block py-2 pl-3 pr-4 text-black font-serif"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  onClick={() => setMenu(!menu)}
                  className="block py-2 pl-3 pr-4 text-black font-serif"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenu(!menu)}
                  className="block py-2 pl-3 pr-4 text-black font-serif"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
  );
}
