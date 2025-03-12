"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BarChart, 
  Smartphone, 
  Globe, 
  Search, 
  ShieldCheck, 
  ShoppingCart, 
  Rocket,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: <Globe className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Web Development",
    description:
      "We develop fast, secure, and user-friendly websites and applications using modern technologies.",
    features: [
      "Responsive design",
      "SEO optimization",
      "High performance",
      "Security focus",
    ],
    cta: "Learn More",
    href: "/services/web-development",
  },
  {
    id: "digital-marketing",
    icon: <BarChart className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Digital Marketing",
    description:
      "We offer comprehensive digital marketing strategies to grow your brand and strengthen your online presence.",
    features: [
      "SEO & SEM",
      "Social media management",
      "Content marketing",
      "Analytics & reporting",
    ],
    cta: "Discover Our Strategy",
    href: "/services/digital-marketing",
  },
  {
    id: "mobile-app",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Mobile App Development",
    description:
      "We develop high-performance, user-friendly mobile applications for iOS and Android platforms.",
    features: [
      "Cross-platform development",
      "Native app experience",
      "Offline working mode",
      "Push notifications",
    ],
    cta: "See Our Applications",
    href: "/services/mobile-app",
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "E-Commerce Solutions",
    description:
      "We develop secure and user-friendly e-commerce platforms that enable you to sell online.",
    features: [
      "Secure payment integration",
      "Inventory management",
      "Mobile-friendly design",
      "Customer analytics",
    ],
    cta: "Explore Solutions",
    href: "/services/ecommerce",
  },
  {
    id: "seo",
    icon: <Search className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "SEO Optimization",
    description:
      "We develop comprehensive SEO strategies to help your website rank higher in search engines.",
    features: [
      "Keyword analysis",
      "On-page optimization",
      "Technical SEO",
      "Content strategy",
    ],
    cta: "Our SEO Services",
    href: "/services/seo",
  },
  {
    id: "security",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Cyber Security",
    description:
      "We provide comprehensive security solutions to protect your digital assets from cyber threats.",
    features: [
      "Security audits",
      "Vulnerability assessment",
      "Data protection",
      "Security training",
    ],
    cta: "Secure Your Business",
    href: "/services/security",
  },
];

export function Services1() {
  return (
    <section className="section py-20">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-description mx-auto max-w-2xl"
          >
            We offer a wide range of digital services to help your business grow and succeed in the digital world.
          </motion.p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="mb-8 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button asChild>
                    <Link href={service.href}>{service.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              Explore All Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 