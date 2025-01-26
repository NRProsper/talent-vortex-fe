import Image from "next/image";

export function OurStory() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Our Story</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            With 3 years of experience matching African digital talents to local and global job markets, we still remain
            with a big number of jobs that remain unfilled due to the lack of experienced African Talents.
          </p>
          <p className="text-muted-foreground">
            Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a
            project-based learning solution for talents to gain real-world experience, solve problems, and build
            portfolios so that they become ready for global job markets.
          </p>
        </div>
      </div>
      <div className="relative aspect-video">
        <Image
          src="/images/site-main.png"
          alt="Umurava Skills Challenges"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

