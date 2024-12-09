export const API_BASE_URL = 'http://localhost:3001';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    FORGOT_PASSWORD: `${API_BASE_URL}/api/auth/forgot-password`,
    RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,
    SESSIONS: `${API_BASE_URL}/api/auth/sessions`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  },
};
