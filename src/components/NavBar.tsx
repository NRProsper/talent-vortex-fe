"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { headerData } from "@/data/header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function NavBar() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-0 md:px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {headerData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Button variant="default" className="hidden md:inline-flex bg-accent py-2 px-3 lg:py-2.5 lg:px-4" asChild>
              <Link href={headerData.cta.href}>{headerData.cta.title}</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col">
                  <Link href="/" className="flex items-center justify-center mb-8 w-full">
                    <Image
                      src={headerData.logo.src}
                      alt={headerData.logo.alt}
                      width={140}
                      height={40}
                      className="h-8 w-auto"
                      priority
                    />
                  </Link>
                  <nav className="flex flex-col space-y-4 flex-grow">
                    {headerData.navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                  <Button className="bg-accent w-full mt-6" asChild>
                    <Link href={headerData.cta.href}>{headerData.cta.title}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

