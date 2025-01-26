import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container grid md:grid-cols-2 gap-8 items-center py-16">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3B82F6] leading-tight">
          Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution
        </h1>
        <p className="text-muted-foreground">
          We partner with Universities, Schools, and Trainning Institutions to build the work experience of their
          students and trainees through project based learning challenges and hackathons
        </p>
        <Button size="lg">Partner with us</Button>
      </div>
      <div className="relative aspect-video">
        <Image src="/images/site-main.png" alt="Students working at computers" className="rounded-lg object-cover w-full h-full" width={640} height={360} />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3B82F6] rounded-lg -z-10" />
      </div>
    </section>
  );
}

