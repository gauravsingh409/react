// config/env.ts
export const env = {
    BASE_API: import.meta.env.VITE_BASE_API,
    FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL,
    MODE: import.meta.env.MODE
};

// Optional: runtime validation
if (!env.BASE_API) {
    throw new Error("VITE_BASE_API is not defined in environment variables!");
}