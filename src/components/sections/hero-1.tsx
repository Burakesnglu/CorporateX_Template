"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Hero1() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Modern Corporate{" "}
              <span className="gradient-text">Website Theme</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              CorporateX is a high-performance and easily customizable website theme 
              designed for modern corporate companies, based on Next.js and TailwindCSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">High Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm">Easy Customization</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-gradient-to-tr from-primary/10 to-primary/30 p-4 md:p-6"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Corporate team working together"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </section>
  );
} 