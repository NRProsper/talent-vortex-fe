"use client";

import React from "react";
import { TestimonialCard } from "../global/TestimonialCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Testimonial } from "@/types/testimonial";

const testimonials: Testimonial[] = [
  {
    id: "1",
    videoUrl: "/videos/testimonial-1.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    videoUrl: "/videos/testimonial-1.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    videoUrl: "/videos/testimonial-1.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    videoUrl: "/videos/testimonial-1.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    videoUrl: "/videos/testimonial-2.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    videoUrl: "/videos/testimonial-3.mp4",
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Users are in Love with Skills Challenges Program</h2>
          <p className="text-muted-foreground">
            See what our clients say about working with us. Their success speaks for our dedication and expertise.
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 size-9" />
          <CarouselNext className="hidden md:flex -right-12 size-9" />
        </Carousel>
      </div>
    </section>
  );
}

