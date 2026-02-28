import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { normalizeError } from './normalizeError';
import type { ApiResponse } from '@/types';

export class BaseApiService {
    private readonly api: AxiosInstance;
    constructor(api: AxiosInstance) {
        this.api = api;
    }

    protected async get<TResponse>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<TResponse>> {
        try {
            const response = await this.api.get<ApiResponse<TResponse>>(url, config);
            return response.data;
        } catch (error) {
            throw normalizeError(error);
        }
    }

    protected async post<TResponse, TBody extends Record<string, unknown>>(
        url: string,
        data?: TBody,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<TResponse>> {
        try {
            const response = await this.api.post<ApiResponse<TResponse>>(url, data, config);
            return response.data;
        } catch (error) {
            throw normalizeError(error);
        }
    }

    protected async put<TResponse, TBody extends Record<string, unknown>>(
        url: string,
        data?: TBody,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<TResponse>> {
        try {
            const response = await this.api.put<ApiResponse<TResponse>>(url, data, config);
            return response.data;
        } catch (error) {
            throw normalizeError(error);
        }
    }

    protected async patch<TResponse, TBody extends Record<string, unknown>>(
        url: string,
        data?: TBody,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<TResponse>> {
        try {
            const response = await this.api.patch<ApiResponse<TResponse>>(url, data, config);
            return response.data;
        } catch (error) {
            throw normalizeError(error);
        }
    }

    protected async delete<TResponse = null>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<ApiResponse<TResponse>> {
        try {
            const response = await this.api.delete<ApiResponse<TResponse>>(url, config);
            return response.data;
        } catch (error) {
            throw normalizeError(error);
        }
    }

    // Built-in cancellable request
    protected getCancelToken() {
        const controller = new AbortController();
        return { signal: controller.signal, cancel: () => controller.abort() };
    }
}