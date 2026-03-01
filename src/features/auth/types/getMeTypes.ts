
export type UserRole = "admin" | "user" | "guest";

export interface GetMeResponse {
    role: UserRole;
}