import type { RouteObject } from "react-router";
import { DashboardRoutes } from "./DashboardRoutes";
import { UserRoutes } from "./UserRoutes";

export const ProtectedRoutes: RouteObject[] = [
    ...DashboardRoutes,
    ...UserRoutes
]