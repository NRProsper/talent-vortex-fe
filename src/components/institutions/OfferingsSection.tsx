import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const offerings = [
  {
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their employability. This exposure leads to career opportunities and this lead to career advancement and long-term success.",
  },
  {
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
  },
  {
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills. Create competitive and collaborative environments where students are excited and actively engaged in their learning journey.",
  },
  {
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
  },
  {
    title: "Skills Assessments",
    description: "Embed our projects based tests and skills assessments directly into your curriculum.",
  },
];

export function OfferingsSection() {
  return (
    <section className="py-16 px-4 md:px-8 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Key Offerings & Benefits:</h2>
      <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {offerings.map((offering, index) => (
          <Card key={index} className={`bg-[#3B82F6] text-white ${index === 3 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
            <CardContent className="h-full p-6">
              <div className="flex gap-4 h-full">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-semibold text-lg">{offering.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{offering.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

