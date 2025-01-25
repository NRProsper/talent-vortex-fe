import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetStarted() {
  const steps = [
    {
      step: 1,
      title: "Sign up on Umurava Platform",
      description: "Submit your completed project for evaluation",
    },
    {
      step: 2,
      title: "Browse Open Challenges",
      description:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    },
    {
      step: 3,
      title: "Register and Participate",
      description: "Sign up for the challenge and start working on the project.",
    },
    {
      step: 4,
      title: "Submit your work",
      description: "Submit your completed project for evaluation",
    },
    {
      step: 5,
      title: "Receive Feedback and Recognition",
      description: "Get feedback on your work and celebrate your achievements",
    },
    {
      step: 6,
      title: "Continue Learning",
      description: "Keep participating in challenges to improve your skills",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How to Get Started</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <Card key={step.step}>
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground mb-2">Step {step.step}</Badge>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

