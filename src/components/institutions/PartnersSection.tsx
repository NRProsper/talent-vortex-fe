import Image from "next/image";

export function PartnersSection() {
  const logos = Array.from({ length: 9 }).map((_, i) => `/images/partners/logos/logo (${i + 1}).png`);

  return (
    <section className="container py-16">
      <h2 className="text-2xl font-bold text-center mb-12">
        Join a few Educational Institutions using Skills Challenges by Umurava
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logos.map((logo, i) => (
          <div key={i} className="">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              className="max-w-full max-h-full"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
