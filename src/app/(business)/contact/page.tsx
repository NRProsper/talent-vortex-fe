import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact/ContactForm";
import MapLocation from '@/components/global/MapLocation';

export default function UmuravaContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-28 py-16">
      <div className="grid gap-8 lg:grid-cols-2 mt-1 md:mt-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Keep In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              A custom talent marketplace and workforce outsourcing platform that connects businesses with Africa&apos;s quality workforce, on-demand in just 48 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+250123456789"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +250 123 456 789
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:marketplace@umurava.africa"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                marketplace@umurava.africa
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">
                Kigali - Kimihurura - Rugando
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <a
                href="https://goo.gl/maps/FijBfhTC5rHXELVA7"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location: Google Maps
              </a>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
      <MapLocation />
    </div>
  );
}
