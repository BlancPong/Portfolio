import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/main/Home'
import About from './components/main/About'
import Projects from './components/main/Projects'
import './App.css'

function App() {
  return (
    <div className="main_container">
      <>
        <BrowserRouter>
          <nav className='navi'>
            <Link className='logo' to="/">Nam Jeong Soo</Link>
            <Link className='menu underline-btn' to="/">Home</Link>
            <Link className='menu underline-btn' to="About">About</Link>
            <Link className='menu underline-btn' to="Projects">PROJECTS</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </>
    </div >
  );
}
export default App;

