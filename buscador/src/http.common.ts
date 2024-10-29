import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-navegador.vercel.app/api/v1', // replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers here if needed
  },
});

export default api;