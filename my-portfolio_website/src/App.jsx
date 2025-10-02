// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./assets/components/NavBar";
import AnimatedContent from "./assets/components/AnimatedContent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      {/* AnimatedContent handles all routes with transitions */}
      <AnimatedContent />
    </BrowserRouter>
  );
}

export default App;
