"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Star, 
  Award, 
  Calendar, 
  MapPin, 
  Tag 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "project1",
    title: "Corporate Website Redesign",
    client: "Global Finance Inc.",
    description:
      "Complete redesign of the corporate website with a focus on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Web Design",
    results: [
      "43% increase in conversion rate",
      "27% decrease in bounce rate",
      "68% increase in mobile engagement",
    ],
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Headless CMS"],
    testimonial: {
      quote:
        "The team at CorporateX delivered beyond our expectations. The new website has significantly improved our online presence and lead generation.",
      author: "Sarah Johnson",
      position: "Marketing Director, Global Finance Inc.",
    },
  },
  {
    id: "project2",
    title: "E-Commerce Platform Development",
    client: "Urban Styles",
    description:
      "Development of a custom e-commerce platform with advanced filtering, search, and payment integration.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "E-Commerce",
    results: [
      "156% increase in online sales",
      "32% improvement in cart completion",
      "4.8/5 customer satisfaction rating",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    testimonial: {
      quote:
        "Our online sales have more than doubled since launching the new platform. The user experience is seamless and our customers love it.",
      author: "Michael Chen",
      position: "CEO, Urban Styles",
    },
  },
  {
    id: "project3",
    title: "Mobile App for Financial Services",
    client: "SecurePay",
    description:
      "Design and development of a mobile application for secure financial transactions and account management.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    category: "Mobile App",
    results: [
      "100,000+ downloads in first month",
      "4.7/5 app store rating",
      "89% reduction in transaction processing time",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Biometric Authentication"],
    testimonial: {
      quote:
        "The mobile app has transformed how our customers interact with our services. The security features and user interface are exceptional.",
      author: "Amanda Rodriguez",
      position: "Product Manager, SecurePay",
    },
  },
];

export function References1() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our portfolio of successful projects delivered to clients across various industries.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="project1">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              {projects.map((project) => (
                <TabsTrigger key={project.id} value={project.id}>
                  {project.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.id} value={project.id}>
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Client: {project.client} | Category: {project.category}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold">Results</h4>
                      <ul className="mt-2 space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Technologies</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-secondary px-3 py-1 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-muted p-4">
                      <p className="italic text-muted-foreground">
                        "{project.testimonial.quote}"
                      </p>
                      <p className="mt-2 text-sm font-medium">
                        {project.testimonial.author},{" "}
                        <span className="text-muted-foreground">
                          {project.testimonial.position}
                        </span>
                      </p>
                    </div>
                    
                    <Button>View Case Study</Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
} 