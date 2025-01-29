import { TalentNav } from "@/components/talent/TalentNav";
import { Header } from "@/components/talent/Header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function TalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <TalentNav />
      <SidebarInset>
        <Header />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

