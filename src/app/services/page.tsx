import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Features1 } from "@/components/sections/features-1";
import { Stats1 } from "@/components/sections/stats-1";
import { CTA1 } from "@/components/sections/cta-1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Services1 } from "@/components/sections/services-1";
import { PageHeader } from "@/components/ui/page-header";

const services = [
  {
    title: "Web Development",
    description:
      "We develop modern and user-friendly websites and applications. Using Next.js, React, and other modern technologies, we provide high-performance solutions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    features: [
      "Corporate Websites",
      "E-commerce Solutions",
      "Web Applications",
      "API Development",
      "SEO Optimization",
      "Performance Improvement",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We develop native and cross-platform mobile applications for iOS and Android platforms. We create fast and effective solutions using modern technologies like React Native and Flutter.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: [
      "iOS Applications",
      "Android Applications",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Application Maintenance",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "We create modern and impressive interface designs that prioritize user experience. We conduct professional design processes using tools like Figma and Adobe XD.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframes and Prototypes",
      "Design Systems",
      "Brand Identity",
      "Illustration",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "We offer comprehensive digital marketing services to strengthen your brand's digital presence. We increase your online visibility with SEO, social media, and content strategies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    features: [
      "SEO Consulting",
      "Social Media Management",
      "Content Strategy",
      "Email Marketing",
      "Google Ads",
      "Analytics and Reporting",
    ],
  },
];

export const metadata = {
  title: "Our Services | CorporateX",
  description: "Learn more about our corporate solutions and professional services.",
}

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Services"
        description="Learn more about our corporate solutions and professional services."
      />
      <Services1 />
    </MainLayout>
  );
} 