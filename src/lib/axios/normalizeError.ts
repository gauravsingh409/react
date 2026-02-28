import type { ApiError } from '@/types';
import axios from 'axios';

export function normalizeError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        return {
            message: error.response?.data?.message ?? error.message,
            statusCode: error.response?.status ?? 500,
            errors: error.response?.data?.errors,
        };
    }

    if (error instanceof Error) {
        return { message: error.message, statusCode: 500 };
    }

    return { message: 'An unexpected error occurred', statusCode: 500 };
}