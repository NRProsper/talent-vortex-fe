"use client";

import React, { useState, useEffect } from "react";
import { CategoryFilter } from "@/components/global/CategoryFilter";
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

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    api?.scrollTo(0);
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Skills Challenges Cover various in-demand skills
            <br className="hidden md:inline" />
            and Careers for the digital economy
          </h2>
          <p className="text-muted-foreground mb-6 md:mb-8">
            Explore the projects that various talents are working on.
          </p>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {filteredSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="bg-[#F1F1F1] border-none">
                  <CardContent className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
                    <div className="flex flex-col justify-center">
                      <Image
                        src={slide.logo || "/placeholder.svg"}
                        alt="Company logo"
                        width={48}
                        height={48}
                        className="mb-4 md:mb-6"
                      />
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{slide.title}</h3>
                      <p className="text-muted-foreground mb-4 md:mb-6">{slide.description}</p>
                      <p className="text-primary font-semibold flex items-center gap-2">
                        {slide.ctaText}
                        <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                          <ArrowRight className="size-4 text-white" />
                        </div>
                      </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mt-4 md:mt-0">
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

