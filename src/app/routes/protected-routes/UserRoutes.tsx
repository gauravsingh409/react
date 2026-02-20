import User from "@/pages/user";
import type { RouteObject } from "react-router";

export const UserRoutes: RouteObject[] = [
    {
        id: 'users',
        path: '/user',
        element: <User />
    }
]