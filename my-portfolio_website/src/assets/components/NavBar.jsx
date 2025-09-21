import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 p-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">Dafinci.</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/#about" className="hover:text-blue-500">About</a>
          <a href="/#contact" className="hover:text-blue-500">Contact</a>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link
            to="/resume"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col justify-between w-6 h-5 md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <span className="block h-0.5 bg-black" />
          <span className="block h-0.5 bg-black" />
          <span className="block h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
            <div className="p-6 space-y-4">
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <a href="/#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">About</a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">Contact</a>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">Blog</Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">Projects</Link>
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Resume
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
