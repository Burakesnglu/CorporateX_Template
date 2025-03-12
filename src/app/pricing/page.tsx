import { MainLayout } from "@/components/layout/main-layout";
import { SEOProvider } from "@/components/providers/seo-provider";
import { Button } from "@/components/ui/button";
import { CTA1 } from "@/components/sections/cta-1";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description:
      "Ideal starter package for small businesses and entrepreneurs.",
    features: [
      "5-Page Website",
      "Responsive Design",
      "SEO Optimization",
      "Contact Form",
      "Social Media Integration",
      "Google Analytics",
      "1 Month Free Support",
      "Basic Hosting (1 Year)",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    description:
      "Advanced features and professional support for medium-sized businesses.",
    features: [
      "10-Page Website",
      "Custom Design",
      "Advanced SEO Optimization",
      "Blog System",
      "Email Marketing Integration",
      "Multi-language Support",
      "3 Months Free Support",
      "Premium Hosting (1 Year)",
      "SSL Certificate",
      "Backup System",
    ],
  },
  {
    name: "Enterprise",
    price: "$1,999",
    description:
      "Comprehensive digital solutions and custom development for large businesses.",
    features: [
      "Unlimited Pages",
      "Custom Design & Development",
      "E-commerce Integration",
      "Content Management System",
      "Advanced Security",
      "API Integrations",
      "6 Months Free Support",
      "Enterprise Hosting (1 Year)",
      "Premium SSL Certificate",
      "CDN Integration",
      "24/7 Technical Support",
      "Performance Optimization",
    ],
  },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <SEOProvider
        title="Pricing | CorporateX"
        description="Pricing for web development, mobile application, and UI/UX design services offered by CorporateX."
      >
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-title">
                Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="section-description">
                Choose the package that best suits your needs. All our packages are customizable 
                and can be expanded with additional services.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-lg border bg-background p-8 shadow-sm"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                    <p className="mt-2 text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/starting at</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <FiCheck className="h-5 w-5 flex-none text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mx-auto mt-20 max-w-3xl">
              <h2 className="text-center text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium">
                    Are taxes included in the prices?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    The prices listed do not include VAT. A 18% VAT will be added to the pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    What are the payment terms?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We require 40% payment at the start of the project, 30% during the development process, 
                    and 30% upon project delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Can the packages be customized?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, all our packages can be customized according to your needs. 
                    You can contact us for additional features you may require.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    How long does project delivery take?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Delivery time varies depending on the project scope, but typically ranges 
                    from 4 to 8 weeks.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    How do support and maintenance services work?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We provide free support for the period specified in each package. 
                    After this period, you can benefit from our monthly maintenance packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA1 />
      </SEOProvider>
    </MainLayout>
  );
} 