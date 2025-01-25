import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CareerSection() {
  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <div className="relative bg-primary rounded-2xl overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full translate-x-1/3 translate-y-1/2" />

        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          {/* Image Section */}
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/students-laptop.png"
              alt="Students collaborating on a laptop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio and
              increase your chances to land job opportunities and accelerate your career growth
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              View Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

