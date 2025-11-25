// lib/api.ts (Client FE)
import axios from "axios";

// Đọc URL của Backend (Dashboard) từ biến môi trường
const baseURL = process.env.NEXT_PUBLIC_API_URL; // http://localhost:3001

if (!baseURL) {
  console.error("CRITICAL: NEXT_PUBLIC_API_URL is not defined.");
}

const api = axios.create({
  baseURL: baseURL, // http://localhost:3001
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // ✅ Thêm timeout
});

// ✅ Thêm interceptor để log requests (optional)
api.interceptors.request.use(
  (config) => {
    console.log(`📤 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Thêm interceptor để log responses (optional)
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error(`❌ API Error: ${error.config?.url}`, error.message);
    return Promise.reject(error);
  }
);

export default api;