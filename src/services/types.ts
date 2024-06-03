import { ReactNode } from "react";

interface ProtectedRouteProps {
    logged: boolean;
    children: ReactNode;
}

export type { ProtectedRouteProps };