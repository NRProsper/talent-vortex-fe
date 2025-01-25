import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:my-20 flex flex-col-reverse lg:flex-row lg:gap-10 lg:items-center lg:justify-between">
      <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground my-4 lg:my-9">
          Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from
          various businesses & organizations.
        </p>
        <Button size={"xl"} className="w-full sm:w-auto">
          Get Started
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <Image
          src="/images/hero-img-1.png"
          alt="HeroImage"
          width={300}
          height={300}
          className="hidden sm:block"
        />
        <Image
          src="/images/hero-img-2.png"
          alt="HeroImage"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

