/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_API: string;
    readonly VITE_FRONTEND_URL: string;
    readonly VITE_NODE_ENV: "development" | "production" | "test";
    // add more as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}