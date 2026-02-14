import './style.css';
import { initApp } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Service worker registration is handled automatically by vite-plugin-pwa
console.log('Trip London PWA initialized');
