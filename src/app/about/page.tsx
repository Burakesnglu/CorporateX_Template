import { MainLayout } from "@/components/layout/main-layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | CorporateX",
  description: "Learn about our corporate identity, values, and vision.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        description="Learn about our corporate identity, values, and vision."
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Your Corporate Solution Partner
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2010, our company provides innovative and sustainable digital solutions to our corporate clients. By prioritizing customer satisfaction and our unique approach to each project, we make a difference in the industry.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our experienced team works to contribute to your business's digital transformation using the latest technologies. We aim to build long-term relationships with our clients and be a part of their success.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Modern office environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-background p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Vision and Mission
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contributing to our clients' success with innovative and sustainable solutions that make a difference in the digital world.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-card-foreground">
                To be a leading company in digital transformation, recognized for its innovative solutions, adding value to its customers and guiding the industry.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-card-foreground">
                To provide sustainable, high-quality, and innovative solutions using the latest technologies by best understanding our customers' needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

const values = [
  {
    title: "Customer Focus",
    description: "Understanding our customers' needs and providing them with the best solutions is our priority.",
  },
  {
    title: "Innovation",
    description: "We produce innovative solutions by following continuously evolving technologies.",
  },
  {
    title: "Quality",
    description: "We commit to ensuring the highest quality standards in every project.",
  },
  {
    title: "Trust",
    description: "We aim to build long-term relationships with our customers based on trust.",
  },
]; 