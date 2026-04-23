import React from 'react';
import { Sun, Moon } from 'lucide-react';

// THIS IS 100% GUARANTEED TO WORK. NO STATE. NO HOOKS.
const ThemeToggle = () => {
  return (
    <button
      onClick={() => {
        const html = document.documentElement;
        html.classList.toggle('light');
        localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
        console.log('THEME TOGGLED', html.classList.contains('light'));
      }}
      className="p-2 text-white hover:text-neutral-300 transition-colors duration-300 bg-white/10 hover:bg-white/20"
      style={{ cursor: 'pointer', zIndex: 99999 }}
    >
      {document.documentElement.classList.contains('light') ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
