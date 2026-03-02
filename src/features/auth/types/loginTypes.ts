import type { ApiResponse } from "@/types";

// Login Payload Types
export interface LoginRequestPayload {
    email: string;
    password: string;
}




// Login Response Types

interface User {
    id: string;
    name: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface Token {
    accessToken: string;
    refreshToken: string;
}
export interface LoginResponseData {
    user: User;
    token: Token;
}
export type LoginResponse = ApiResponse<LoginResponseData>