import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}

