import React from "react";
import { VideoPlayer } from "@/components/global/VideoPlayer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="space-y-4">
      <VideoPlayer videoUrl={testimonial.videoUrl} />
      <div className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-primary">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}

