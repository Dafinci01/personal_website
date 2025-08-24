import React from 'react';
import NavBar from "./assets/components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/BlogHome";
import ContactSection from './assets/components/ContactSection';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <route>
                    path ="/"
                    elements={
                        <>
                            <IntroAnimation/>
                            <HomeSection/>
                            <AboutSection/>
                            <ContactSection/>
                        </>
                    }
                </route>

                <Route path="/project" element= {<Project/>} />
                <Route path="/blog" element= {<Blog/>}/>






            </Routes>

        </BrowserRouter>
    );
}

export default App;
