import type { ApiResponse } from "@/types";

// Login Payload Types
export interface LoginRequestPayload {
    email: string;
    password: string;
}


// Login Response Types
export interface LoginResponseData {
    accessToken: string;
    refreshToken: string;
}
export type LoginResponse = ApiResponse<LoginResponseData>