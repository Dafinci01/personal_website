// src/assets/components/AnimatedContent.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "../../pages/Home/HomePage";
import ProjectsPage from "../../pages/Projects/ProjectsPage";
// import BlogPage from "../../pages/Blog/BlogPage";

export default function AnimatedContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
              
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectsPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
