import { useMutationData } from "@/lib/react-query"
import { authService } from "../../services/authService"
import type { LoginTypes } from "../../types"
import type { ApiError } from "@/types"
import { CONFIG } from "@/config"

export function useLoginMutation() {

    const mutation = useMutationData<LoginTypes.LoginResponse, ApiError, LoginTypes.LoginRequestPayload>(
        (data) => authService.login(data),
        {
            invalidateKeys: [CONFIG.API_KEYS.AUTH.LOGIN]
        }
    )

    return mutation
}