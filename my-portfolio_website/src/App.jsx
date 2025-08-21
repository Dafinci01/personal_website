import React from'react';
import IntroAnimation  from "./components/IntroAnimation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Project from "./pages/Project";
import NavBar  from "./assets/components/NavBar";
function App() {
    return (
        <BrowserRouter>
            <IntroAnimation/>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />

            </Routes>
        
        </BrowserRouter>


    );
}

export default App;