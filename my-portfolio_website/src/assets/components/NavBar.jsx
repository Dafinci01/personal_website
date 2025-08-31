// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button"; // If not using shadcn, replace with <button>
import { motion } from "framer-motion";

export default function NavBar() {
  // State for mobile menu and scroll detection
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ref to detect outside click for mobile menu
  const navRef = useRef(null);

  // Navigation links
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
  ];

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click or ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold"
          >
            <Link to="/">Dafinci.</Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm">
              Resume
            </Button>
          </motion.div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
