// config/env.ts
export const env = {
    BASE_API: import.meta.env.VITE_BASE_API,
    FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL,
    NODE_ENV: import.meta.env.VITE_NODE_ENV,
    MODE: import.meta.env.MODE,

    // You can also add flags
    FEATURE_X_ENABLED: import.meta.env.VITE_FEATURE_X === "true",
};

// Optional: runtime validation
if (!env.BASE_API) {
    throw new Error("VITE_BASE_API is not defined in environment variables!");
}