import { Navigate, type RouteObject } from "react-router";
import { DashboardRoutes } from "./DashboardRoutes";
import { UserRoutes } from "./UserRoutes";

export const ProtectedRoutes: RouteObject[] = [
    {
        id: 'main',
        path: '/',
        element: <Navigate to='/dashboard' replace />
    },
    ...DashboardRoutes,
    ...UserRoutes
]