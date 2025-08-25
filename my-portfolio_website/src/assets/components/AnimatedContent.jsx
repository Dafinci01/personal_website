import React from "react";
import { motion } from "framer-motion";

const AnimatedContent = ({ isVisible = true, delay = 0, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.35, delay: delay / 1000 }}
      aria-hidden={!isVisible}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
