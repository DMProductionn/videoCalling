import axios from 'axios';


const http = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_PRODUCTION,
  withCredentials: true
});

export const httpWebSocket = axios.create({
  baseURL:  import.meta.env.MODE === 'development' ? 'localhost:8000' : import.meta.env.VITE_API_URL_WEBSOCKET_PRODUCTIONN,
  withCredentials: true
})

export default http