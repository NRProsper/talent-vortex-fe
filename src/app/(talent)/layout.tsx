import { TalentNav } from "@/components/talent/TalentNav";
import { Header } from "@/components/talent/Header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ProtectedRoute } from "../ProtectedRoute";
import type React from "react";

export default function TalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute allowedRoles={["talent"]} redirectTo="/login">
      <SidebarProvider defaultOpen={true}>
        <TalentNav />
        <SidebarInset>
          <Header />
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  );
}

