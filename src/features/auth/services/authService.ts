import { CONFIG } from "@/config";
import { apiClient, BaseApiService } from "@/lib/axios";
import type { LoginTypes } from "../types";

export class AuthService extends BaseApiService {
    async login(payload: LoginTypes.LoginRequestPayload) {
        return super.post<LoginTypes.LoginResponseData, LoginTypes.LoginRequestPayload>(CONFIG.ENDPOINTS.AUTH.LOGIN, payload)
    }

    async getMe() {
        return super.get<LoginTypes.LoginResponseData>(CONFIG.ENDPOINTS.AUTH.GET_ME)
    }
}


export const authService = new AuthService(apiClient)