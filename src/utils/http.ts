import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import axios from 'axios';

export type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  data: T;
};

function showToast(message: string, type: 'error' | 'success' = 'error') {
  if (type === 'error')
    console.error(`[API Error]: ${message}`);
}

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError<ApiResponse>) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message || 'Something went wrong';

    // Global Error Handling
    switch (status) {
      case 400:
        showToast(message, 'error');
        break;

      case 401:
        showToast('Session expired. Please login again.', 'error');

        localStorage.removeItem('accessToken');

        break;

      case 403:
        showToast('You do not have permission to access this resource.', 'error');
        break;

      case 404:
        showToast('Resource not found.', 'error');
        break;

      case 500:
        showToast('Internal Server Error. Please try again later.', 'error');
        break;

      default:
        showToast(message, 'error');
    }

    return Promise.reject(error);
  },
);

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    http.get<T, T>(url, config) as any,

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    http.post<T, T>(url, data, config) as any,

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    http.put<T, T>(url, data, config) as any,

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    http.delete<T, T>(url, config) as any,

  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    http.patch<T, T>(url, data, config) as any,
};

export default api;
