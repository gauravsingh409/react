import { CONFIG } from "@/config";
import { useQueryData } from "@/lib/react-query";
import { authService } from "../../services/authService";

export function useGetMe() {

    const query = useQueryData(
        CONFIG.API_KEYS.AUTH.GET_ME,
        () => authService.getMe(),
    )

    return query
}