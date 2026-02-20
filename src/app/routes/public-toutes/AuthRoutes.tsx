import Login from "@/pages/login";
import type { RouteObject } from "react-router";

export const AuthRoutes: RouteObject[] = [
    {
        id: 'login',
        path: '/login',
        element: <Login />
    }
]