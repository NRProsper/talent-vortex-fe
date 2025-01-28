import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SkillsChallenges() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          Skills Challenges Program is built on the Umurava Talent Marketplace Platform
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to
            showcase their skills to real-world projects and challenges from our partner companies and organizations.
          </p>
          <p className="text-muted-foreground">
            Umurava Skills Challenges enables young talents to build a portfolio and experience that increases their
            readiness to access job opportunities and projects.
          </p>
        </div>
        <Button size="lg">Get Started</Button>
      </div>
      <div className="relative aspect-video">
        <Image
          src="/images/site-main.png"
          alt="Umurava Platform Screenshot"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

