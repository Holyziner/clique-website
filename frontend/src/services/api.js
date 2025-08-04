import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// API service functions
export const apiService = {
  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/api/health');
      return response.data;
    } catch (error) {
      throw new Error('Health check failed');
    }
  },

  // Quote requests
  submitQuoteRequest: async (quoteData) => {
    try {
      const response = await api.post('/api/quotes', quoteData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to submit quote request');
    }
  },

  getQuotes: async (skip = 0, limit = 50) => {
    try {
      const response = await api.get(`/api/quotes?skip=${skip}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch quotes');
    }
  },

  // Contact messages
  submitContactMessage: async (messageData) => {
    try {
      const response = await api.post('/api/contact', messageData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to send message');
    }
  },

  // Testimonials
  getTestimonials: async () => {
    try {
      const response = await api.get('/api/testimonials');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch testimonials');
    }
  },

  createTestimonial: async (testimonialData) => {
    try {
      const response = await api.post('/api/testimonials', testimonialData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create testimonial');
    }
  },

  // FAQ
  getFAQ: async () => {
    try {
      const response = await api.get('/api/faq');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch FAQ');
    }
  },

  createFAQ: async (faqData) => {
    try {
      const response = await api.post('/api/faq', faqData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create FAQ');
    }
  },
};

export default api;