// ==================================================
// FILE: src/App.jsx
// ==================================================
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Events from './components/Events';
import Team from './pages/Team';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} /> 
          </Routes>
        </main>

        {/* Footer */}
        <Footer />  
        <ScrollToTop variant="white" showAfter={300} position="bottom-right" />
      </div>
    </Router>
  );
};

export default App;
