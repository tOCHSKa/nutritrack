import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
});

// Proxy local vers OFF pour éviter CORS
export const offApi = axios.create({
  baseURL: '/off', // IMPORTANT : correspond au proxy dans vite.config.ts
});