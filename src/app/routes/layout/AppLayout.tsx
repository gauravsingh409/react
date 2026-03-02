// This is root layout for all protected and private routes

import { Outlet } from "react-router";

export function AppLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}