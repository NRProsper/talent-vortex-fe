// file located at src/app/(talent)/layout.tsx
import { TalentNav } from "@/components/talent/TalentNav";
import { Header } from "@/components/talent/Header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ProtectedRoute } from "../ProtectedRoute";

export default function TalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
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

