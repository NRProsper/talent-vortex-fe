import type React from "react";
import { Briefcase, MonitorPlay, RefreshCw, Users } from "lucide-react";
import Image from "next/image";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="p-4 bg-primary text-primary-foreground rounded-lg">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function ParticipationSection() {
  const benefits: BenefitProps[] = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Enhance Your Employment Path",
      description: "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Earn Recognition and Prizes",
      description: "Gain valuable experience and knowledge to advance your career in the digital economy.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Personal Growth",
      description: "Challenge yourself, learn new skills, and expand your professional network.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
    },
  ];

  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What else can I gain from
            <br />
            participating in Skills Challenges ?
          </h2>
          <p className="text-muted-foreground">
            Join Skills Challenges Program to accelerate your career growth and become
            <br />
            part of Africa&apos;s largest workforce of digital professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/participation-img.png"
              alt="Participation Benefits"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

