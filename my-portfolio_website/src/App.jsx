import React from 'react';
import NavBar from "./assets/components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path = "/" element={ <Home/>} />
                <Route path = "/" element={ <About/>} />
                <Route path = "/" element={ <Contact/>} />
                <Route path = "/" element={ <Blog/>} />


            </Routes>

        </BrowserRouter>
    );
}

export default App;
