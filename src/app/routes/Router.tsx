import { createBrowserRouter } from "react-router";
import { AppLayout, ProtectedLayout, PublicLayout } from "./layout";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { PublicRoutes } from "./public-toutes";
import { ProtectedRoutes } from "./protected-routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AppLayout />
            </Suspense>
        ),
        children: [
            // Public routes wrapper
            {
                id: "public-routes",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <PublicLayout />
                    </Suspense>
                ),
                children: PublicRoutes,
            },

            // Private routes wrapper
            {
                element: (
                    <Suspense fallback={<Spinner />}>
                        <ProtectedLayout />
                    </Suspense>
                ),
                children: ProtectedRoutes,
            },
        ]
    },
]);