import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-[#3B82F6] py-16">
      <div className="container text-center text-white space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to transform your learning institution?</h2>
        <Button size="lg" variant="secondary">
          Let's Partner
        </Button>
      </div>
    </section>
  );
}

