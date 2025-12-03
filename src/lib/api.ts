import axios from 'axios';

const api = axios.create({
  baseURL: '/api/proxy',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const url = `${config.baseURL || ''}${config.url || ''}`;
    console.log('📤 API Request:', config.method?.toUpperCase(), url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('❌ API Error:', error.config?.url || 'unknown', error.message);
    return Promise.reject(error);
  }
);

export default api;