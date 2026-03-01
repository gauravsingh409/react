import { Outlet } from "react-router";

export function ProtectedLayout() {
    return (
        <div>
            
            <Outlet />
        </div>
    )
}