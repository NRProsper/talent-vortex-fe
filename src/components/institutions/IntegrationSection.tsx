import Image from "next/image";

export function IntegrationSection() {
  const steps = [
    "As Career Development and Job Readiness Program",
    "As Skills Assessments Method after a course or a term",
    "As extracurricular activities to complement academic courses",
    "As the portfolio of the Students",
    "As part of Capstone Projects or final-year assignments",
  ];

  return (
    <section className="py-16 px-4 md:px-8 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-9 md:py-20">
      <h2 className="text-2xl font-bold text-center mb-12">
        How Skills Challenges Program can Be Integrated into your Learning Institution
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-around">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            src="/images/participation-img.png"
            alt="Integration mockup"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

