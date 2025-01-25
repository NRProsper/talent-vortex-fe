import React from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="bg-foreground/5">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience a New Way of Building Work Experience</h2>
            <p className="text-muted-foreground text-lg">
              Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest
              workforce of digital professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            <Card className="bg-primary text-primary-foreground lg:col-span-6 transition-transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Build a Strong Portfolio and Hand-On Experience</h3>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by
                  businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers
                  and clients through a portfolio of completed projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground lg:col-span-3 transition-transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enhance Your Employment Path</h3>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream
                  job or contract.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground lg:col-span-3 transition-transform hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Earn Recognition and Prizes</h3>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on
                  real world projects and hackathons from our partner companies & organizations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

