// file located at src/app/dash/page.tsx example of aut logout if you arent logged in

"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuthHooks";

export default function DashboardPage() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return <div>{/* Your dashboard content */}</div>;
}

