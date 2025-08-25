import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import { Menu , X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";




export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Left side */}
        <div className="text-xl font-bold">
          <Link to="/">Dafinci.</Link>
        </div>

        {/* Right side */}
        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Project</Link></li>
        </ul>
      </div>
    </header>
  );
}
