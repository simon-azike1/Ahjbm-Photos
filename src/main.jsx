import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// FIXED THEME INITIALIZATION - RUNS BEFORE ANY COMPONENTS
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
