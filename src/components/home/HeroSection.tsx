import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='flex mx-28 my-9 gap-10 items-center justify-between'>
      <div className='w-[40%]'>
        <h1 className='text-4xl font-bold text-primary'>Build Work Experience through Skills Challenges Program</h1>
        <p className='text-xl text-muted-foreground my-9'>Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations.</p>
        <Button size={"xl"}>Get Started</Button>
      </div>
      <div className='flex my-10 gap-5'>
        <Image
          src="/images/hero-img-1.png"
          alt="HeroImage"
          width={300}
          height={300}
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
