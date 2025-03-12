"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, HelpCircle } from "lucide-react";

const categories = [
  { id: "general", name: "General" },
  { id: "product", name: "Product" },
  { id: "services", name: "Services" },
  { id: "pricing", name: "Pricing" },
  { id: "support", name: "Support" },
];

const faqs = {
  general: [
    {
      question: "What is CorporateX?",
      answer:
        "CorporateX is a high-performance and easily customizable website theme designed for modern corporate companies, based on Next.js and TailwindCSS. This theme, planned to be sold on ThemeForest, will enable buyers to create their own corporate websites with minimal technical knowledge.",
    },
    {
      question: "Who is CorporateX for?",
      answer:
        "CorporateX is suitable for all businesses, agencies, freelancers, and individuals who want to create a corporate website. It is especially ideal for small and medium-sized businesses looking to establish a professional web presence.",
    },
  ],
  services: [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of digital services including web development, mobile app development, UI/UX design, digital marketing, SEO optimization, and e-commerce solutions. Each service is tailored to meet the specific needs of your business.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We provide a detailed timeline during the initial consultation phase.",
    },
  ],
  product: [
    {
      question: "Is CorporateX responsive?",
      answer:
        "Yes, CorporateX is fully responsive and works perfectly on all devices including desktops, tablets, and mobile phones. The theme is built with a mobile-first approach to ensure optimal performance across all screen sizes.",
    },
    {
      question: "Can I customize the theme?",
      answer:
        "Absolutely! CorporateX offers extensive customization options. You can change colors, fonts, layouts, and more through an intuitive interface. No coding knowledge is required for basic customizations.",
    },
  ],
  pricing: [
    {
      question: "How much does CorporateX cost?",
      answer:
        "CorporateX will be available on ThemeForest with a one-time purchase price. The exact pricing will be announced closer to the launch date. The purchase includes the theme, documentation, and 6 months of support.",
    },
    {
      question: "Do you offer any discounts?",
      answer:
        "We occasionally offer promotional discounts for new customers or during special events. Subscribe to our newsletter to stay updated on any upcoming promotions or discount opportunities.",
    },
  ],
  support: [
    {
      question: "How can I get support?",
      answer:
        "We provide comprehensive support through our dedicated support portal. You can submit tickets, access documentation, and find answers to frequently asked questions. Premium support is available for customers who need additional assistance.",
    },
    {
      question: "Do you offer training?",
      answer:
        "Yes, we offer training sessions to help you get the most out of CorporateX. These can be scheduled as one-on-one sessions or group workshops, depending on your needs and preferences.",
    },
  ],
};

export function FAQ1() {
  const [activeTab, setActiveTab] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

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
          <Tabs
            defaultValue="general"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(faqs).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Accordion type="single" collapsible className="w-full">
                  {items.map((faq, index) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {/* Category Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveTab(category.id);
                      setSearchQuery("");
                    }}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                      activeTab === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {category.name}
                    {activeTab === category.id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-8 rounded-lg bg-muted p-4 text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground" />
                <h3 className="font-medium">Have more questions?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Contact us
                </p>
                <Button asChild className="mt-4 w-full" size="sm">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {searchQuery && (
              <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No Results Found</h3>
                <p className="mt-2 text-muted-foreground">
                  No results found for "{searchQuery}". Please try another search term.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 