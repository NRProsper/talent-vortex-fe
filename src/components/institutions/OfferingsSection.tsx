import { Card, CardContent } from "@/components/ui/card";
import { Box } from "lucide-react";

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
    <section className="container py-16">
      <h2 className="text-2xl font-bold text-center mb-12">Key Offerings & Benefits:</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {offerings.map((offering, index) => (
          <Card key={index} className="bg-[#3B82F6] text-white">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Box className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{offering.title}</h3>
                  <p className="text-white/80 text-sm">{offering.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

