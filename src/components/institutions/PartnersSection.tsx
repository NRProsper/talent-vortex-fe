export function PartnersSection() {
  return (
    <section className="container py-16">
      <h2 className="text-2xl font-bold text-center mb-12">
        Join a few Educational Institutions using Skills Challenges by Umurava
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {/* Add partner logos here */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center">
            Logo {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}

