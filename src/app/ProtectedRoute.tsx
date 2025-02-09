"use client";

import LoadingSpinner from "@/components/global/LoadingSpinner";
import { useAuth } from "@/hooks/useAuthHooks";
import { Fragment, type ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
  redirectTo?: string;
}

export function ProtectedRoute({ children, redirectTo = "/join", allowedRoles }: ProtectedRouteProps) {
  const isAuthenticated = useAuth(allowedRoles, redirectTo);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <Fragment>{children}</Fragment>;
}

