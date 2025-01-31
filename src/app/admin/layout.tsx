import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminNav } from "@/components/admin/AdminNav";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ProtectedRoute } from "../ProtectedRoute";
import type React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute allowedRoles={["admin"]} redirectTo="/login">
      <SidebarProvider defaultOpen={true}>
        <AdminNav />
        <SidebarInset>
          <AdminHeader />
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  );
}

