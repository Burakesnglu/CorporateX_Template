"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA1() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-lg border bg-background px-6 py-16 shadow-sm md:px-12 md:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <svg
              className="h-full w-full opacity-5"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Projenizi Hayata Geçirmeye{" "}
              <span className="gradient-text">Hazır Mısınız?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-description"
            >
              Modern teknolojiler ve uzman ekibimizle işletmenizin dijital
              dönüşümüne öncülük ediyoruz. Hemen ücretsiz demo için başvurun.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Ücretsiz Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Hizmetlerimiz</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 