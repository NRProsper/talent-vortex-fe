import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      <Suspense>
        {children}
      </Suspense>
      <Footer />
    </main>
  );
}

