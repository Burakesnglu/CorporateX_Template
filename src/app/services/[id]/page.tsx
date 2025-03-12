"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { CTA1 } from "@/components/sections/cta-1";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { notFound } from "next/navigation";

// Service data
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "We develop modern and user-friendly websites and web applications.",
    longDescription: "We develop custom websites and web applications using modern technologies to strengthen your business's digital presence. With responsive design, SEO optimization, and fast loading times, we elevate the user experience to the highest level. We customize each project according to our clients' needs and goals.",
    icon: "/images/icons/web-dev.svg",
    image: "/images/services/web-development.jpg",
    features: [
      "Responsive design",
      "SEO optimization",
      "Fast loading times",
      "Modern UI/UX",
      "Secure infrastructure",
      "Easy management panel"
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We conduct a detailed discovery process to understand your needs and goals. We determine the scope, timeline, and budget of your project."
      },
      {
        title: "Design",
        description: "We create a user-friendly and modern design that reflects your brand identity. We present the design for your approval with wireframes and prototypes."
      },
      {
        title: "Development",
        description: "We develop your website or application using modern technologies. We manage the process transparently with regular progress reports."
      },
      {
        title: "Testing & Optimization",
        description: "We conduct comprehensive tests on different devices and browsers, and perform performance and SEO optimizations."
      },
      {
        title: "Launch & Support",
        description: "We launch your website or application and provide continuous technical support. We ensure your site stays up-to-date with regular maintenance and updates."
      }
    ],
    faq: [
      {
        question: "How long does a web development project take?",
        answer: "Depending on the scope of the project, a simple website can be completed within 4-6 weeks, while more complex projects may take 2-4 months. We provide a detailed timeline at the start of the project."
      },
      {
        question: "What technologies do you use for my website?",
        answer: "We select the most appropriate technologies based on your project's needs. For frontend, we use React, Next.js, Vue.js; for backend, Node.js, PHP, Python; and for databases, MySQL, PostgreSQL, MongoDB, among others."
      },
      {
        question: "Can I update my website myself?",
        answer: "Yes, we provide a user-friendly management panel in our projects. This allows you to easily update your content without needing technical knowledge."
      },
      {
        question: "Is SEO optimization included in the service?",
        answer: "Yes, we offer basic SEO optimization as standard in all our web projects. We also have additional services for more comprehensive SEO work."
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "We develop high-performance mobile applications for iOS and Android platforms.",
    longDescription: "We develop high-performance, user-friendly mobile applications for iOS and Android platforms to strengthen your business's mobile strategy. Using native and cross-platform technologies, we provide the most suitable solution for your needs. By prioritizing user experience, we successfully represent your brand in the mobile world.",
    icon: "/images/icons/mobile-dev.svg",
    image: "/images/services/mobile-development.jpg",
    features: [
      "Native and cross-platform development",
      "User-friendly interface",
      "Offline functionality support",
      "Push notification integration",
      "Analytics integration",
      "Continuous update support"
    ],
    process: [
      {
        title: "Discovery and Planning",
        description: "We analyze your mobile application needs and target audience, and determine the technical requirements."
      },
      {
        title: "UI/UX Design",
        description: "We create interface designs that prioritize user experience and comply with platform standards."
      },
      {
        title: "Development",
        description: "We develop your application using native or cross-platform technologies. You can track progress with regular demo versions."
      },
      {
        title: "Testing and Quality Control",
        description: "We conduct comprehensive tests on different devices and operating system versions, and fix any issues."
      },
      {
        title: "Launch and Support",
        description: "We publish your application on the App Store and Google Play Store, and provide continuous technical support and update services."
      }
    ],
    faq: [
      {
        question: "What is the difference between native and cross-platform development?",
        answer: "Native development involves separate coding for each platform (iOS and Android) and offers the highest performance. Cross-platform development allows creating applications that work on both platforms using a single codebase, which reduces development time and cost."
      },
      {
        question: "How long does the mobile app development process take?",
        answer: "Depending on the complexity of the application, a simple app can be completed within 2-3 months, while more comprehensive projects may take 4-6 months."
      },
      {
        question: "Do you help with uploading my app to the App Store and Google Play?",
        answer: "Yes, we completely manage the app store submission process. We provide support for creating necessary accounts, preparing app descriptions, and monitoring approval processes."
      },
      {
        question: "Can you update an existing application?",
        answer: "Yes, we can analyze your existing application and make updates and improvements. Depending on the quality and structure of the code, sometimes complete redevelopment may be more cost-effective."
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "We create modern and impressive interface designs that prioritize user experience.",
    longDescription: "We create modern and impressive interface designs that prioritize user experience. Through user research and behavior analysis, we understand the needs of your target audience and develop intuitive and attractive designs accordingly. By best reflecting your brand identity on digital platforms, we increase user interaction with your products.",
    icon: "/images/icons/design.svg",
    image: "/images/services/ui-ux-design.jpg",
    features: [
      "User-centered design",
      "Wireframing and prototypes",
      "Usability testing",
      "Brand identity integration",
      "Responsive design",
      "Accessibility standards"
    ],
    process: [
      {
        title: "User Research",
        description: "We conduct comprehensive user research to understand your target audience and their needs."
      },
      {
        title: "Wireframing",
        description: "We create basic page structures and information architecture to optimize user experience."
      },
      {
        title: "UI Design",
        description: "We develop modern and attractive interface designs that reflect your brand identity."
      },
      {
        title: "Prototyping",
        description: "We create interactive prototypes to simulate the actual use of the design."
      },
      {
        title: "Usability Testing",
        description: "We evaluate and improve the effectiveness of the design by conducting tests with real users."
      }
    ],
    faq: [
      {
        question: "What is the difference between UI and UX?",
        answer: "UI (User Interface) refers to the visual elements of a product's design. UX (User Experience) encompasses all aspects of a user's interaction with the product. Both are critical for a good digital product."
      },
      {
        question: "How involved will I be as a client in the design process?",
        answer: "We seek your feedback at every stage of the design process. We request your approval for wireframes, style guides, and interface designs. With a collaborative approach, we aim to bring your vision to life in the best way possible."
      },
      {
        question: "Can you design according to our existing brand identity?",
        answer: "Yes, we specialize in adapting your existing brand identity to digital platforms. By following your brand guidelines, we create a consistent user experience."
      },
      {
        question: "What tools do you use in the design process?",
        answer: "We use industry-standard design tools such as Figma, Adobe XD, and Sketch. For prototyping, we use Figma, InVision, or Protopie. We can adapt our working method according to your preferences."
      }
    ]
  }
];

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <SEOProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <Link href="/services" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <FiArrowLeft className="mr-2 h-4 w-4" />
                  All Services
                </Link>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {service.longDescription}
                </p>
                <div className="mt-8">
                  <Button>
                    Get Free Consultation
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What We Offer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key features of our {service.title} service
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Work Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Steps we follow in our {service.title} projects
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Common questions about our {service.title} service
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {service.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <p className="mt-2 text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA1 />
      </MainLayout>
    </SEOProvider>
  );
} 