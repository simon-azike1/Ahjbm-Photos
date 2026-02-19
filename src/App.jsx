// ==================================================
// FILE: src/App.jsx
// ==================================================
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Admin from './pages/Admin';
import Events from './components/Events';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {!isAdminRoute && <Header />}

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
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Button */}
      <ScrollToTop variant="white" showAfter={300} position="bottom-right" />
    </div>
  );
};

export default App;
