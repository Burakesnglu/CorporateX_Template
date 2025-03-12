"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    name: "Company 1",
    logo: "/globe.svg",
  },
  {
    name: "Company 2",
    logo: "/file.svg",
  },
  {
    name: "Company 3",
    logo: "/window.svg",
  },
  {
    name: "Company 4",
    logo: "/globe.svg",
  },
  {
    name: "Company 5",
    logo: "/file.svg",
  },
  {
    name: "Company 6",
    logo: "/window.svg",
  },
];

export function Logos1() {
  return (
    <section className="py-16 md:py-24">
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
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-24">
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  fill
                  className="object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 