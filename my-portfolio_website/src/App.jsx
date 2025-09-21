// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./assets/components/NavBar";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AnimatedContent from "./assets/components/AnimatedContent";
import BlogHome from "./pages/Blog/BlogHome";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      {/* Wrap Routes with AnimatedContent for transitions */}
      <AnimatedContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Blog routes */}
          <Route path="/blog" element={<BlogHome />} />
        </Routes>
      </AnimatedContent>
    </BrowserRouter>
  );
}

export default App;
