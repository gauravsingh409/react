import { CONFIG } from '@/config';
import { tokenService } from '@/features/auth/services';
import { storage } from '@/utils';
import axios, { type InternalAxiosRequestConfig } from 'axios';

export const apiClient = axios.create({
    baseURL: CONFIG.ENV.BASE_API,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

// Request interceptor — attach token
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig<unknown>) => {
    console.log(CONFIG.ENV.MODE);
    const token = storage.get('access_token', 'local');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Response interceptor — handle 401 globally
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original = error.config;

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;
            try {
                await tokenService.refresh();
                return apiClient(original);
            } catch {
                tokenService.clear();
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);