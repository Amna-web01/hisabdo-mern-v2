import apiClient from '@/lib/axios';

// Authentication service to handle login, registration, and profile retrieval
export const authService = {
  
  // Send user credentials to log in and receive authentication data/token
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  // Register a new user with the provided user details
  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  // Fetch the currently authenticated user's profile details
  getProfile: async () => {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  },
};