import { Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { generateMetadata, viewport } from "./metadata";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export { generateMetadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} font-sans antialiased`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

