import { Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhySection() {
  const reasons = [
    {
      title: "Bridging the Experience Gap",
      description:
        "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools.",
    },
    {
      title: "Bridging Education and Employment",
      description:
        "Traditional education doesn't always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.",
    },
    {
      title: "Preparing Talents for Global Job Markets",
      description:
        "We are ensuring that African talents shine globally and that's why we are equipping them with global technical experience and standout globally.",
    },
  ];

  return (
    <section className="mb-20 container">
      <h2 className="text-2xl font-bold text-center mb-8">Why we are solving this problem</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-28">
        <Card className="bg-primary text-white md:col-span-2">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{reasons[0].title}</h3>
                <p className="text-white/90 text-sm">{reasons[0].description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {reasons.slice(1).map((reason, index) => (
          <Card key={index} className="bg-primary text-white">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="text-white/90 text-sm">{reason.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

