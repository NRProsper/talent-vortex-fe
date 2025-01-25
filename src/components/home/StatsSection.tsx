import React from "react";

export default function StatsSection() {
  const stats = [
    {
      number: "1",
      label: "Year",
    },
    {
      number: "500+",
      label: "Challenges Completed",
    },
    {
      number: "10K+",
      label: "users",
    },
    {
      number: "6+",
      label: "Countries",
    },
  ];

  return (
    <section className="bg-primary rounded-3xl overflow-hidden relative mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:my-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] border-[60px] border-primary-foreground/10 rounded-full -top-[344px] -right-48" />
        <div className="absolute w-[500px] h-[500px] border-[60px] border-primary-foreground/10 rounded-full -bottom-96 left-10" />
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-1">{stat.number}</div>
            <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

