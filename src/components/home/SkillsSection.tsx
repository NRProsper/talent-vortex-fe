"use client";

import React, { useState, useEffect } from "react";
import { CategoryFilter } from "@/components/global/category-filter";
import { categories, slides } from "@/data/skills-data";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [filteredSlides, setFilteredSlides] = useState(slides);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setFilteredSlides(slides.filter((slide) => slide.category === activeCategory));
  }, [activeCategory]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    api?.scrollTo(0);
  };

  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills Challenges Cover various in-demand skills
            <br />
            and Careers for the digital economy
          </h2>
          <p className="text-muted-foreground mb-8">Explore the projects that various talents are working on.</p>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {filteredSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="bg-[#F1F1F1] border-none">
                  <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <Image
                        src={slide.logo || "/placeholder.svg"}
                        alt="Company logo"
                        width={48}
                        height={48}
                        className="mb-6"
                      />
                      <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-muted-foreground mb-6">{slide.description}</p>
                      <p className="text-primary font-semibold flex items-center gap-2">
                        {slide.ctaText}
                        <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                          <ArrowRight className="size-4 text-white" />
                        </div>
                      </p>

                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-muted-foreground/20"
                }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

