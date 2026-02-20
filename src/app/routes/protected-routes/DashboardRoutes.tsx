import Dashboard from "@/pages/dashboard";
import type { RouteObject } from "react-router";

export const DashboardRoutes: RouteObject[] = [
    {
        id: 'dashboard',
        path: '/dashboard',
        element: <Dashboard />
    },
]