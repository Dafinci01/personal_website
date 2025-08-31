import React, {lazy, Suspense} from 'react';
import NavBar from "./assets/components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//lazy load pages 
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const BlogHome = lazy(() => import("./pages/Blog/BlogHome"));
const ProjectsPage = lazy(() => import("./pages/Projects/ProjectsPage"));

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path ="/blog" element= {<BlogHome/>} />
                    <Route path = "/projects" element = {<ProjectsPage />} />

                </Routes>
            
            </Suspense>
            
        </BrowserRouter>
    );
}
./
export default App;
