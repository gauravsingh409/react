import { useMutationData } from "@/lib/react-query"
import { authService } from "../../services/authService"
import type { LoginTypes } from "../../types"
import type { ApiError } from "@/types"
import { CONFIG } from "@/config"
import { sooner } from "@/lib/sooner"
// import { storage } from "@/utils"
import { useNavigate } from "react-router"

export function useLoginMutation() {
    const navigate = useNavigate();

    const mutation = useMutationData<LoginTypes.LoginResponse, ApiError, LoginTypes.LoginRequestPayload>(
        (data) => authService.login(data),
        {
            invalidateKeys: [CONFIG.API_KEYS.AUTH.LOGIN],
            onSuccess: (data) => {
                sooner.success(data?.message)
                // storage.set("access_token", data?.data.token.accessToken, 'local')
                // storage.set("refresh_token", data?.data.token.refreshToken, 'local')
                navigate(CONFIG.ROUTES.DASHBOARD.ROOT)

            },
            onError: (error) => {
                sooner.error(error?.message || "Login failed")
            },
        }
    )

    return mutation
}