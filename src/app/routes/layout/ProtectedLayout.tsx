import Sidebar from "@/components/common/sidebar";
import { Outlet } from "react-router";

export function ProtectedLayout() {
    return (
        <div className="h-screen w-screen layout-root flex-row">
            <Sidebar />
            <main className="layout-root">
                <Outlet />
            </main>
        </div>
    )
}