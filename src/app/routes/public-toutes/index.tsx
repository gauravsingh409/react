import type { RouteObject } from "react-router";
import { AuthRoutes } from "./AuthRoutes";

export const PublicRoutes: RouteObject[] = [
    ...AuthRoutes,
]