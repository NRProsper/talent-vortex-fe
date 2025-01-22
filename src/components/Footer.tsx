"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerData } from "@/data/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialIcons = {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
};

export function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="px-4 sm:px-6 md:px-20 lg:px-20 py-8 lg:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-800 pb-6 sm:pb-8">
          <Link href="/" className="mb-4 sm:mb-0">
            <Image src={footerData.logo.src || "/placeholder.svg"} alt={footerData.logo.alt} width="60" height="60" />
          </Link>

          <div className="flex justify-center gap-4">
            {footerData.socialLinks.map((link) => {
              const IconComponent = socialIcons[link.icon as keyof typeof socialIcons];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="size-6 sm:size-8" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mt-8 sm:mt-12">
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2 sm:mb-4">{footerData.address.title}</h3>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <a
                  href={`mailto:${footerData.address.email}`}
                  className="text-sm text-muted hover:text-blue-400 transition-colors"
                >
                  {footerData.address.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-sm">{footerData.address.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <a href={`tel:${footerData.address.phone}`} className="text-sm hover:text-blue-400 transition-colors">
                  {footerData.address.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-2 sm:mb-4">{footerData.quickLinks.title}</h3>
            <nav className="space-y-2">
              {footerData.quickLinks.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-2 sm:mb-4">{footerData.newsletter.title}</h3>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <Input type="email" placeholder="Email" className="bg-white text-black w-full sm:w-auto" />
              <Button className="bg-[#1967d2] hover:bg-[#1557b0] text-white w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs sm:text-sm">{footerData.legal.copyright}</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              {footerData.legal.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white text-xs sm:text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

