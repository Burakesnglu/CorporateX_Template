"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

// Combine all FAQs into a single array
const allFaqs = [
  {
    question: "What is CorporateX?",
    answer:
      "CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS. This theme, planned to be sold on ThemeForest, will enable buyers to create their own corporate websites with minimal technical knowledge.",
    category: "general"
  },
  {
    question: "Who is CorporateX for?",
    answer:
      "CorporateX is suitable for all businesses, agencies, freelancers, and individuals who want to create a corporate website. It is especially ideal for small and medium-sized businesses looking to establish a professional web presence.",
    category: "general"
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of digital services including web development, mobile app development, UI/UX design, digital marketing, SEO optimization, and e-commerce solutions. Each service is tailored to meet the specific needs of your business.",
    category: "services"
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We provide a detailed timeline during the initial consultation phase.",
    category: "services"
  },
  {
    question: "Is CorporateX responsive?",
    answer:
      "Yes, CorporateX is fully responsive and works perfectly on all devices including desktops, tablets, and mobile phones. The theme is built with a mobile-first approach to ensure optimal performance across all screen sizes.",
    category: "product"
  },
  {
    question: "Can I customize the theme?",
    answer:
      "Absolutely! CorporateX offers extensive customization options. You can change colors, fonts, layouts, and more through an intuitive interface. No coding knowledge is required for basic customizations.",
    category: "product"
  },
  {
    question: "How much does CorporateX cost?",
    answer:
      "CorporateX will be available on ThemeForest with a one-time purchase price. The exact pricing will be announced closer to the launch date. The purchase includes the theme, documentation, and 6 months of support.",
    category: "pricing"
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "We occasionally offer promotional discounts for new customers or during special events. Subscribe to our newsletter to stay updated on any upcoming promotions or discount opportunities.",
    category: "pricing"
  },
  {
    question: "How can I get support?",
    answer:
      "We provide comprehensive support through our dedicated support portal. You can submit tickets, access documentation, and find answers to frequently asked questions. Premium support is available for customers who need additional assistance.",
    category: "support"
  },
  {
    question: "Do you offer training?",
    answer:
      "Yes, we offer training sessions to help you get the most out of CorporateX. These can be scheduled as one-on-one sessions or group workshops, depending on your needs and preferences.",
    category: "support"
  },
];

export function FAQ1() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services, products, and how we can help your business grow.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {allFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border bg-card p-6 shadow-sm max-w-md text-center"
          >
            <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground" />
            <h3 className="font-medium mt-4">Have more questions?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We're here to help with any questions you might have
            </p>
            <Button asChild className="mt-4 w-full" size="sm">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 