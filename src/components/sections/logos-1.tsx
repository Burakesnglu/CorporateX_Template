"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Tema ile uyumlu logo verileri
const logos = [
  {
    name: "Acme Inc",
    logo: "/globe.svg",
  },
  {
    name: "GlobalTech",
    logo: "/file.svg",
  },
  {
    name: "Innovate",
    logo: "/window.svg",
  },
  {
    name: "FutureCorp",
    logo: "/globe.svg",
  },
  {
    name: "Nexus",
    logo: "/file.svg",
  },
  {
    name: "Quantum",
    logo: "/window.svg",
  },
];

export function Logos1() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Our Clients
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading companies and organizations we've worked with on successful projects.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-center"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border/30 bg-muted/10 p-3 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-muted/20">
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute -bottom-8 left-1/2 w-full -translate-x-1/2 text-center">
                  <span className="text-xs font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {logo.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 