import { apiClient, BaseApiService } from "@/lib/axios";
import type { PaginatedData } from "@/types";

class UserService extends BaseApiService {
    constructor() {
        super(apiClient); // inject singleton — caller never touches axios
    }

    getUserById(id: string) {
        return this.get<unknown>(id);
    }

    getUserList(page: number, pageSize: number) {
        return this.get<PaginatedData<unknown>>(`?page=${page}&pageSize=${pageSize}`, {
        });
    }

    deleteUser(id: string) {
        return this.delete<null>(id);
    }
}

// Export as singleton — one instance for the whole app
export const userService = new UserService();